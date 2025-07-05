# WMS Prototype

This repository contains a minimal warehouse management system prototype using the following stack:

- **FastAPI 0.111** with Python 3.12
- **PostgreSQL 16** (SQLite for local unit tests)
- **Redis 7** for caching/pub-sub
- **Celery 5** with **RabbitMQ 3.13** for background jobs
- **scikit-learn**, **Facebook Prophet**, **OR-Tools** for forecasting and optimisation
- **React 18 + TypeScript** (Vite) for the front end
- **JWT authentication** via FastAPI Users
- Docker, docker-compose and GitHub Actions CI (workflow not included)

## Running Locally

1. Ensure Docker and Docker Compose are installed.
2. Clone the repository and change into the project directory:
   ```bash
   git clone <repository-url>
   cd wms-prototype
   ```
3. (Optional) Copy the example environment file and adjust values if necessary:
   ```bash
   cp backend/.env.example backend/.env
   ```
4. Start all services with Docker Compose:
   ```bash
   make up
   ```
5. Visit `http://localhost:3000` for the UI and `http://localhost:8000/docs` for the API docs.
6. When finished, stop the containers:
   ```bash
   make down
   ```

To run backend tests locally, install the Python dependencies first:
```bash
pip install -e ./backend
pytest backend/tests
```
Alternatively run them inside the Docker container:
```bash
docker-compose run --rm backend pytest
```
