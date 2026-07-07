@echo off
setlocal

cd /d "%~dp0"

echo Starting Power 6/55 log server and web app...
echo.

start "Power 6/55 Log Server" cmd /k "pushd ""%~dp0"" && npm.cmd run log-server"
start "Power 6/55 Web App" cmd /k "pushd ""%~dp0"" && npm.cmd run dev"

echo Open the app at http://127.0.0.1:5173
echo Log server runs at http://127.0.0.1:8787
echo.
pause
