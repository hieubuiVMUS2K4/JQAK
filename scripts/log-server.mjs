import { createServer } from "node:http";
import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const logFile = resolve(projectRoot, "logs", "log-history.txt");
const port = Number(process.env.LOG_SERVER_PORT ?? 8787);
const host = process.env.LOG_SERVER_HOST ?? "127.0.0.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

async function ensureLogFile() {
  await mkdir(dirname(logFile), { recursive: true });
  try {
    await readFile(logFile, "utf8");
  } catch {
    await writeFile(logFile, "", "utf8");
  }
}

function readBody(request) {
  return new Promise((resolveBody, rejectBody) => {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy(new Error("Payload too large"));
      }
    });
    request.on("end", () => resolveBody(body));
    request.on("error", rejectBody);
  });
}

function send(response, statusCode, body, contentType = "application/json; charset=utf-8") {
  response.writeHead(statusCode, {
    ...corsHeaders,
    "Content-Type": contentType,
  });
  response.end(body);
}

function sendJson(response, statusCode, payload) {
  send(response, statusCode, JSON.stringify(payload));
}

function normalizeEntries(payload) {
  const entries = Array.isArray(payload) ? payload : [payload];
  return entries.map((entry) => ({
    id: Number.isFinite(Number(entry?.id)) ? Number(entry.id) : null,
    at: typeof entry?.at === "string" ? entry.at : "",
    level: ["info", "warn", "error", "success"].includes(entry?.level) ? entry.level : "info",
    message: typeof entry?.message === "string" ? entry.message : String(entry?.message ?? ""),
    user: typeof entry?.user === "string" ? entry.user : "anonymous",
    received_at: new Date().toISOString(),
  })).filter((entry) => entry.message.trim().length > 0);
}

function formatLogLine(entry) {
  const message = entry.message.replace(/[\r\n]+/g, " ").trim();
  const user = entry.user.replace(/[\r\n]+/g, " ").trim();
  const appTime = entry.at ? ` app_time=${entry.at}` : "";
  const id = entry.id === null ? "" : ` id=${entry.id}`;
  return `[${entry.received_at}] [${entry.level.toUpperCase()}] user=${user}${id}${appTime} ${message}`;
}

const server = createServer(async (request, response) => {
  try {
    if (request.method === "OPTIONS") {
      response.writeHead(204, corsHeaders);
      response.end();
      return;
    }

    const url = new URL(request.url ?? "/", `http://${request.headers.host ?? `${host}:${port}`}`);

    if (request.method === "GET" && url.pathname === "/health") {
      sendJson(response, 200, { ok: true, logFile });
      return;
    }

    if (request.method === "GET" && url.pathname === "/logs") {
      await ensureLogFile();
      const content = await readFile(logFile, "utf8");
      send(response, 200, content, "text/plain; charset=utf-8");
      return;
    }

    if (request.method === "POST" && url.pathname === "/logs") {
      const body = await readBody(request);
      const entries = normalizeEntries(JSON.parse(body || "{}"));
      if (entries.length === 0) {
        sendJson(response, 400, { ok: false, error: "No valid log entries." });
        return;
      }

      await ensureLogFile();
      const lines = entries.map(formatLogLine).join("\n") + "\n";
      await appendFile(logFile, lines, "utf8");
      sendJson(response, 201, { ok: true, appended: entries.length, logFile });
      return;
    }

    sendJson(response, 404, { ok: false, error: "Not found" });
  } catch (error) {
    sendJson(response, 500, { ok: false, error: error instanceof Error ? error.message : "Unknown error" });
  }
});

await ensureLogFile();
server.listen(port, host, () => {
  console.log(`Log server listening at http://${host}:${port}`);
  console.log(`Appending history to ${logFile}`);
});
