from __future__ import annotations

from typing import List, Optional

from sqlalchemy.orm import Mapped, relationship
from sqlmodel import SQLModel, Field


class Item(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str

    orders: Mapped[List["Order"]] = relationship(back_populates="item")
