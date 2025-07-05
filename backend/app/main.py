from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .api.routes import api_router
from .core.config import settings

app = FastAPI(title="WMS Prototype")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)


@app.get("/health")
def health():
    return {"status": "ok"}


