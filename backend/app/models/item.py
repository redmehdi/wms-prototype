from __future__ import annotations

from typing import List, Optional

from sqlalchemy.orm import Mapped
from sqlmodel import SQLModel, Field, Relationship


class Item(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str

    orders: Mapped[List["Order"]] = Relationship(back_populates="item")
