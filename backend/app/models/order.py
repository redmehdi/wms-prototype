from typing import Optional, TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship

if TYPE_CHECKING:
    from .item import Item


class Order(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    item_id: Optional[int] = Field(default=None, foreign_key="item.id")
    quantity: int
    item: Optional["Item"] = Relationship(back_populates="orders")
