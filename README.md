# Cyber Dashboard

Lightweight cyber dashboard prototype for visualizing and interacting with local network/security data. This repository contains a small Python-based backend (entrypoint `app.py`), static frontend files (`index.html`, `script.js`, `style.css`), a `config.py` for configuration, and a `requirements.txt` for dependencies.

## Contents

- `app.py` — Python application entrypoint (server). Assumed to be the main script to run the dashboard.
- `config.py` — Configuration file used by the application.
- `index.html` — Frontend HTML for the dashboard UI.
- `script.js` — Frontend JavaScript logic.
- `style.css` — Frontend styles.
- `requirements.txt` — Python package requirements.

If any of the above assumptions are incorrect, update the README or ask for help and I can adapt it.

## Features

- Simple, focused dashboard UI for cyber/network/security metrics.
- Backend API served by `app.py` (Flask or similar — check `requirements.txt`).
- Static frontend assets for quick local testing.

## Quick Start (Windows PowerShell)

These steps assume you are on Windows and using PowerShell (the repository root is the folder that contains `app.py`).

1. Create and activate a virtual environment

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

If your PowerShell blocks script execution, you may need to allow the local execution policy for the current session:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

2. Install dependencies

```powershell
pip install --upgrade pip
pip install -r requirements.txt
```

3. Configure (optional)

Edit `config.py` to change ports, API keys, or other runtime options. If `config.py` expects environment variables you can set them in PowerShell like:

```powershell
$env:MY_CONFIG_VALUE = 'value'
# then run the app as below in the same session so it inherits the variable
```

4. Run the app

```powershell
python app.py
```

By default the app often listens on `http://127.0.0.1:5000/` (or another port configured in `config.py`). Open that address in your browser to view the dashboard. If the project is a pure static site instead of a server-backed app, open `index.html` in the browser.

## Development notes

- If `app.py` uses Flask, you can enable debug mode by setting `FLASK_ENV=development` or configuring `app.run(debug=True)` in `app.py`.
- If you modify frontend assets, reload the browser to see changes. Consider using a static server (e.g., `python -m http.server 8000`) for a simple static preview of `index.html`.

## Testing & Linting

There are no test files included by default. Recommended lightweight steps to add tests:

- Add `pytest` to `requirements.txt` or `dev` dependencies.
- Create a `tests/` folder and add basic unit tests for any helper functions in the backend.

Example install for test/dev tools:

```powershell
pip install pytest flake8
```

Then run tests:

```powershell
pytest -q
```

## Troubleshooting

- If `pip install -r requirements.txt` fails, check your Python version (recommend Python 3.8+). Use the full error trace to locate the failing dependency and let me know if you want help fixing it.
- If `app.py` immediately exits with an error, open the file to inspect the top-level imports. Missing packages usually show an ImportError pointing to the package name.
- If PowerShell refuses to run `Activate.ps1`, run the `Set-ExecutionPolicy` command shown above for the current process.

## Deployment

This repository is a prototype. For production deployment consider:

- Packaging as a proper WSGI app (Gunicorn/uvicorn) behind a reverse proxy (nginx).
- Adding secure configuration for secrets instead of committing them to `config.py`.
- Using Docker for reproducible deployments.

## Contributing

Small, focused contributions are welcome. Suggested first steps:

1. Open an issue describing your change.
2. Create a feature branch, make changes, and open a PR.

Please include tests for any new backend logic and keep UI changes small and documented.
