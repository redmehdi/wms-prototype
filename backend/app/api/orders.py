from fastapi import APIRouter
from pydantic import BaseModel

class Order(BaseModel):
    id: int
    item_id: int
    quantity: int

router = APIRouter()

orders_db = [Order(id=1, item_id=1, quantity=5)]

@router.get("/", response_model=list[Order])
def list_orders():
    return orders_db

