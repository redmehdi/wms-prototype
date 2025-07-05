from __future__ import annotations

from sqlmodel import SQLModel, Field, Relationship

class Item(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str

    orders: list["Order"] = Relationship(back_populates="item")

