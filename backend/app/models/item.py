from sqlmodel import SQLModel, Field, Relationship
from .order import Order

class Item(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str

    orders: list["Order"] = Relationship(back_populates="item")

