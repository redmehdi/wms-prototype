from __future__ import annotations

from typing import Optional

from sqlalchemy.orm import Mapped
from sqlmodel import SQLModel, Field, Relationship


class Order(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    item_id: Optional[int] = Field(default=None, foreign_key="item.id")
    quantity: int
    item: Mapped[Optional["Item"]] = Relationship(back_populates="orders")
