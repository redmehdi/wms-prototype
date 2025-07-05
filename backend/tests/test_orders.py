from fastapi.testclient import TestClient
from backend.app.main import app

client = TestClient(app)


def test_orders_without_redirect():
    no_slash = client.get('/orders')
    with_slash = client.get('/orders/')
    assert no_slash.status_code == 200
    assert with_slash.status_code == 200
    assert no_slash.json() == with_slash.json()
