from sqlmodel import SQLModel, Field, Relationship
from .item import Item

class Order(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    item_id: int | None = Field(default=None, foreign_key="item.id")
    quantity: int
    item: Item | None = Relationship(back_populates="orders")


