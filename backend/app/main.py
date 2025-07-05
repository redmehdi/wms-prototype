from fastapi import FastAPI
from .api.routes import api_router

app = FastAPI(title="WMS Prototype")

app.include_router(api_router)


@app.get("/health")
def health():
    return {"status": "ok"}


