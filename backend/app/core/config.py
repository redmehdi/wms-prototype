import os


class Settings:
    """Simple settings model that reads values from environment variables."""

    def __init__(self) -> None:
        self.database_url = os.getenv("DATABASE_URL", "sqlite:///./test.db")
        self.redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
        self.rabbitmq_url = os.getenv("RABBITMQ_URL", "amqp://guest:guest@localhost//")
        self.secret_key = os.getenv("SECRET_KEY", "CHANGE_ME")
        cors = os.getenv("CORS_ORIGINS", "http://localhost:3000")
        if isinstance(cors, str):
            self.cors_origins = [o.strip() for o in cors.split(',')]
        else:
            self.cors_origins = list(cors)


settings = Settings()

