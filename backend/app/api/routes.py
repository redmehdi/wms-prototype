from fastapi import APIRouter
from . import items, orders, dashboard

api_router = APIRouter()

api_router.include_router(items.router, prefix="/items", tags=["items"])
api_router.include_router(orders.router, prefix="/orders", tags=["orders"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])

