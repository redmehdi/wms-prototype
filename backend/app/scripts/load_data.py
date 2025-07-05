from sqlmodel import Session, select
from ..core.database import init_db, engine
from ..models.item import Item
from ..models.order import Order


def load_data() -> None:
    """Create sample items and orders in the database."""
    init_db()
    with Session(engine) as session:
        # Skip seeding if items already exist
        if session.exec(select(Item)).first():
            print("Data already loaded")
            return
        widget = Item(name="Widget")
        gadget = Item(name="Gadget")
        session.add_all([widget, gadget])
        session.commit()

        order = Order(item_id=widget.id, quantity=5)
        session.add(order)
        session.commit()


if __name__ == "__main__":
    load_data()
