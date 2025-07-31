# WMS Prototype

This repository contains a minimal warehouse management system prototype using the following stack:

- **FastAPI 0.111** with Python 3.12
- **PostgreSQL 16** (SQLite for local unit tests)
- **Redis 7** for caching/pub-sub
- **Celery 5** with **RabbitMQ 3.13** for background jobs
- **scikit-learn**, **Facebook Prophet**, **OR-Tools** for forecasting and optimisation
- **React 18 + TypeScript** (Vite) for the front end
- **JWT authentication** via FastAPI Users
- Docker, docker-compose and GitHub Actions CI for deployment to Cloud Run
- Custom Nginx config to support React Router

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
5. Load some sample inventory and order data:
   ```bash
   make load
   ```
6. Visit `http://localhost:3000` for the UI and `http://localhost:8000/docs` for the API docs.
7. When you're finished, stop all services:
   ```bash
   make down
   ```

To run backend tests locally:
```bash
pip install -e ./backend pytest
pytest backend/tests
```

## GitHub Actions Deployment

The repository includes a workflow that builds and tests the backend, then
deploys the container image to Cloud Run. Configure the following GitHub
secrets so the deployment step can authenticate and target the correct
project:

- `GCP_PROJECT_ID` – your Google Cloud project ID.
- `GCP_SERVICE_ACCOUNT_KEY` – a service account key JSON with permissions to
  deploy to Cloud Run.

The workflow uses these secrets to authenticate and sets `PROJECT_ID` when
running `gcloud`. Ensure both secrets are present for successful deployments.

## Smart Contracts

This repository includes a simple Hardhat project used to compile and test Solidity contracts. The main contract, `NewsPublisher.sol`, allows the owner to publish articles and lets users vote on them.

### Usage

1. Install Node.js (version 18+ recommended).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile the contracts:
   ```bash
   npm run compile
   ```
4. Run the tests:
   ```bash
   npm test
   ```

> **Note**: Installing dependencies requires internet access to download packages such as Hardhat and OpenZeppelin.
