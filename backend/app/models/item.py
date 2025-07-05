from typing import Optional, TYPE_CHECKING, List

from sqlmodel import SQLModel, Field, Relationship

if TYPE_CHECKING:
    from .order import Order


class Item(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str

    orders: List["Order"] = Relationship(back_populates="item")
