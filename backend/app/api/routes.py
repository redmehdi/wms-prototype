from fastapi import APIRouter
from . import dashboard

try:
    from . import items, orders
    _include_extra = True
except Exception:
    _include_extra = False

api_router = APIRouter()

if _include_extra:
    api_router.include_router(items.router, prefix="/items", tags=["items"])
    api_router.include_router(orders.router, prefix="/orders", tags=["orders"])

api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])

