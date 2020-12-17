import unittest
import requests

# base url
BASE_URL = 'http://noahrayroberts.com'

# contains urls to test along with their correct status codes
TESTING_ENDPOINTS = [
    {'url': BASE_URL, 'status_code': 200},
    {'url': BASE_URL + '/', 'status_code': 200},
    {'url': BASE_URL + '/search?tech=flask', 'status_code': 200},
    {'url': BASE_URL + '/search?tech=asdfasdf', 'status_code': 200},
    {'url': BASE_URL + '/search?type=CS50', 'status_code': 200},
    {'url': BASE_URL + '/search?type=NOT-CS50', 'status_code': 200},
    {'url': BASE_URL + '/dev/projects', 'status_code': 401},
]

class test_endpoint_status_code(unittest.TestCase):

    def test_all_get_endpoints(self):
        for item in TESTING_ENDPOINTS:
            response = requests.get( item['url'] )
            print(item['url'], str(response.status_code) + '?=' + str(item['status_code']))
            self.assertEqual(response.status_code, item['status_code'])

    ### tests for CRUD operations with authoriation removed for security

if __name__ == '__main__':
    unittest.main()
