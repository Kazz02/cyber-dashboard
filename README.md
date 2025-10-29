# Cyber Dashboard

Cyber dashboard prototype for visualizing and interacting with local network/security data. This repository contains a small Python-based backend (entrypoint `app.py`), static frontend files (`index.html`, `script.js`, `style.css`), a `config.py` for configuration, and a `requirements.txt` for dependencies.

## Contents

- `app.py` — Python application entrypoint (server).
- `config.py` — Configuration file used by the application.
- `index.html` — Frontend HTML for the dashboard UI.
- `script.js` — Frontend JavaScript.
- `style.css` — Frontend styles.
- `requirements.txt` — Python package requirements.

## Features

- Simple dashboard UI for cyber/network/security metrics.
- Backend API served by `app.py`.
- Static frontend assets for quick local testing.

## Quick Start (Windows PowerShell)

These steps assume you are on Windows

1. Create and activate a virtual environment

python -m venv .venv
.\.venv\Scripts\Activate.ps1

2. Install dependencies

pip install --upgrade pip
pip install -r requirements.txt

3. Run the app

python app.py

## Testing & Linting

- Test files to be added.

## Contributing

Small, focused contributions are welcome. Suggested first steps:

1. Open an issue describing your change.
2. Create a feature branch, make changes, and open a PR.

Please include tests for any new backend logic and keep UI changes small and documented.
