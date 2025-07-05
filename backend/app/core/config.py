from pydantic import BaseSettings

class Settings(BaseSettings):
    database_url: str = "sqlite:///./test.db"
    redis_url: str = "redis://localhost:6379/0"
    rabbitmq_url: str = "amqp://guest:guest@localhost//"
    secret_key: str = "CHANGE_ME"

settings = Settings()

