from fastapi.testclient import TestClient
from backend.app.main import app

client = TestClient(app)


def test_dashboard():
    response = client.get('/dashboard')
    assert response.status_code == 200
    data = response.json()
    assert 'totalSKUs' in data
    assert 'totalItems' in data
    assert 'pendingOrders' in data
