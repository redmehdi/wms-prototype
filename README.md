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

To run the stack locally:

```bash
make up
```

Visit `http://localhost:3000` for the UI and `http://localhost:8000/docs` for the API docs.

