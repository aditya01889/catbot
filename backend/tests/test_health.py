"""Test health check endpoint."""
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)

def test_health_check():
    """Test the health check endpoint."""
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy", "version": "0.1.0"}
