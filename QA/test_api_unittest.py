import unittest
import requests

BASE_URL = "http://localhost:3000/dados"

class TestAPI(unittest.TestCase):
    def test_get_dados(self):
        response = requests.get(BASE_URL)
        self.assertEqual(response.status_code, 200)

    def test_post_dados(self):
        payload = {"nome": "Luiz"}
        response = requests.post(BASE_URL, json=payload)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["dado"], payload)

if __name__ == "__main__":
    unittest.main()
