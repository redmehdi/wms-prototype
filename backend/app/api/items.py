from fastapi import APIRouter
from pydantic import BaseModel

class Item(BaseModel):
    id: int
    name: str

router = APIRouter()

items_db = [Item(id=1, name="Widget"), Item(id=2, name="Gadget")]

@router.get("/", response_model=list[Item])
def list_items():
    return items_db

