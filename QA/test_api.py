import requests

BASE_URL = "http://localhost:3000/dados"

def test_get_dados():
    response = requests.get(BASE_URL)
    assert response.status_code == 200

def test_post_dados():
    payload = {"nome": "Luiz"}
    response = requests.post(BASE_URL, json=payload)
    assert response.status_code == 201
    assert response.json()["dado"] == payload


##Teste