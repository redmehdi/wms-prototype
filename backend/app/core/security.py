from fastapi_users.authentication import JWTAuthentication
from .config import settings

jwt_auth = JWTAuthentication(secret=settings.secret_key, lifetime_seconds=3600)

