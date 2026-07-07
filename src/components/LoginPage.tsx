import { FormEvent, useState } from "react";
import { LockKeyhole, LogIn, User } from "lucide-react";

type LoginPageProps = {
  onLogin: (username: string) => void;
};

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextUsername = username.trim();
    if (!nextUsername || !password.trim()) {
      setError("Nhap du username va password.");
      return;
    }

    setError("");
    onLogin(nextUsername);
  }

  return (
    <main className="login-shell">
      <section className="login-panel">
        <div className="login-brand">
          <p className="eyebrow">Vietlott Power 6/55</p>
          <h1>Combination Space</h1>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="field-row">
            <User size={18} />
            <input
              autoComplete="username"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>

          <label className="field-row">
            <LockKeyhole size={18} />
            <input
              autoComplete="current-password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          {error && <p className="login-error">{error}</p>}

          <button className="primary login-submit" type="submit">
            <LogIn size={17} />
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
