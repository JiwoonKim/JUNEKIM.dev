---
date: '2019-06-18'
title: "Web50 lecture 8 - Testing"
description: CS50 Web Programming with Javascript and Python lecture 8 정리
image: ''
tags: ['CS50', 'Web50', 'Testing']
---
> Harvard's Web Programming with Python and Javascript lecture 8 정리

### Testing
__making sure code works__
- to ensure that changes to a function don't cause other parts of the application to break
- also to ensure that the application can handle various types of inputs
- learn:
    - how to build out a system for testing
    - how to test thing on your own
    - tools to facilitate the testing process

### Basic Python Testing

#### Testing Function
write test function code
- testing cases manually is tedious work
- instead, __write test function code__
```python
# import function code to test
from prime import is_prime
# define testing function
def test_prime(n, expected):
    if is_prime(n) != expected:
        print(f"ERROR on is_prime({n}), expected {expected}")
```
    - __run test cases__ either __in main function__:
```python
## same file as above
# run test cases 
if __name__ == "__main__":
    test_prime(-1, False)
    test_prime(1, False)
    test_prime(2, True)
    test_prime(8, False)
```
    - or __in bash scrip__t: `./tests0.sh`
```bash
python3 -c "from tests0 import test_prime; test_prime(-1, False)"
python3 -c "from tests0 import test_prime; test_prime(1, False)"
python3 -c "from tests0 import test_prime; test_prime(2, True)"
python3 -c "from tests0 import test_prime; test_prime(8, False)"
```

#### Assert
python's built-in command
- `assert {expression}`: asserts that the __following expression is true__
- if not true, __assertion error__ is raised
```python
# assert (function to code == expected result)
assert square(10) == 100
```

#### Unittest
built-in library for testing in python
- __define class w/ test cases as methods__
- use: `assertTrue()`, `assertFalse()`, `assertEqual()`, `assertNotEqual`, `assertIn`, `assertNotIn`
```python
# import unittest library
import unittest
# import function to test
from prime import is_prime
# define tests
class Tests(unittest.Testcase):
    def test_1(self):
        """Check that 1 is not prime."""
        self.assertFalse(is_prime(1))
    def test_2(self):
        """Check that 2 is prime."""
        self.assertTrue(is_prime(2))
    def test_8(self):
        """Check that 8 is not prime."""
        self.assertFalse(is_prime(8))
# run tests
if __name__ == "__main__":
      unittest.main()
```

### Testing Django
testing for Django app (airline project - flights app)
- Django comes w/ its own testing framework

#### Testing Models (the Backend)
- consider testing example function in _flights/models.py_
```python
## inside Flight model
    # create function to check if flight is valid
    def is_valid_flight(self):
        return (self.origin != self.destination) and (self.duration >= 0)
```
- `flights/tests.py`: create class of test functions to test cases for the models
```python
# testcase library (extends unittest library)
from django.test import TestCase
from .models import Airport, Flight
# create tests
class ModelsTestCase(TestCase):
    # run setup (before any custom tests run)
    def setup(self):
        # create airports
        a1 = Airport.objects.create(code="AAA", city="City A")
        a2 = Airport.objects.create(code="BBB", city="City B")
        # create flights
        Flight.objects.create(origin=a1, destination=a2, duration=100)
        Flight.objects.create(origin=a1, destination=a1, duration=200)
        Flight.objects.create(origin=a1, destination=a2, duration=-100)
    # test departures keywork (in Flight model)
    def test_departures_count(self):
        a = Airport.objects.get(code="AAA")
        self.assertEqual(a.departures.count(), 3)
    # test arrivals keywork (in Flight model)
    def test_arrivals_count(self):
        a = Airport.objects.get(code="AAA")
        self.assertEqual(a.arrivals.count(), 1)
# test is_valid_flight function (in Flight model)
    # test for valid flight
    def test_valid_flight(self):
        a1 = Airport.objects.get(code="AAA")
        a2 = Airport.objects.get(code="BBB")
        f = Flight.objects.get(origin=a1, destination=a2, duration=100)
        self.assertTrue(f.is_valid_flight())
    # test for invalid flight
    def test_invalid_flight(self):
        a1 = Airport.objects.get(code="AAA")
        f = Flight.objects.get(origin=a1, destination=a1)
        self.assertFalse(f.is_valid_flight())
    # test for invalid flight's duration
    def test_valid_flight)duration(self):
        a1 = Airport.objects.get(code="AAA")
        a2 = Airport.objects.get(code="BBB")
        f = Flight.objects.get(origin=a1, destination=a2, duration=-100)
        self.assertTrue(f.is_valid_flight())
```
- __run tests__: `python manage.py test`
    - __creates test database__ (so that the test cases don't actually manipulate the real database); __destroyed after running tests__

#### Testing Views (the Frontend)
- `flights/tests.py`: create class of test functions to test cases for the views using `Client` library
```python
from django.db.models import Max
from django.test import Client, TestCase
from .models import Airport, Flight, Passenger
...
# create tests
class FlightsTestCase(TestCase):
    # ... same setup and model testing as above
    # test index view
    def test_index(self):
        c = Client()
        response = c.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context["flights"].count(), 2)
    # test for valid view page
    def test_valid_flight_page(self):
        a1 = Airport.objects.get(code="AAA")
        f = Flight.objects.get(origin=a1, destination=a1)
        c = Client()
        response = c.get(f"/{f.id}")
        self.assertEqual(response.status_code, 200)
    # test for invalid view page
    def test_invalid_flight_page(self):
        max_id = Flight.objects.all().aggregate(Max("id"))["ide__max"]
        c = Client()
        response = c.get(f"/{max_id + 1}")
        self.assertEqual(response.status_code, 404)
    # test for passengers in flight page
    def test_flight_page_passenger(self):
        f = Flight.objects.get(pk=1)
        p = Passenger.objects.create(first="Alice", last="Adams")
        f.passengers.add(p)
        c = Client()
        response = c.get(f"/{f.id}")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context["passengers"].count(), 1)
    # test for non passengers in flight page
    def test_flight_page_non_passengers(self):
        f = Flight.objects.get(pk=1)
        p = Passenger.objects.create(first="Alice", last="Adams")
        c = Client()
        response = c.get(f"/{f.id}")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context["non_passengers"].count(), 1)
```
    - `Client` library: __simulate a web client for testing purposes__
        - can make requests to and get responses from the web server

### Testing Browser Behavior
testing browser behavior, including javascript code

#### Selenium
a browser testing tool for testing browser behavior
- uses __web driver which enables python code to pretend to be a user interacting w/ a webpage__
```python
    import os
    import pathlib
    import unittest
    from selenium import webdriver
    # turn a filename into full path for browser to use
    def file_uri(filename):
        return pathlib.Path(os.path.abspath(filename)).as_uri()
    # set web driver to simulate user interaction
    driver = webdriver.Chrome()
    # define tests
    class WebpageTests(unittest.TestCase):
        # check the title
        def test_title(self):
            uri = file_uri("counter.html")
            driver.get(uri)
            self.assertEqual(driver.title, "Counter")
        # test increase in counter
        def test_increase(self):
            driver.get(file_uri("counter.html"))
            increase = driver.find_element_by_id("increase")
            increase.click()
            self.assertEqual(driver.find_element_by_tag_name("h1").text, "1")
        # test decrease in counter
        def test_decrease(self):
            driver.get(file_uri("counter.html"))
            decrease = driver.find_element_by_id("decrease")
            decrease.click()
            self.assertEqual(driver.find_element_by_tag_name("h1").text, "-1")
        # test multiple increases in counter
        def test_multiple_increase(self):
            driver.get(file_uri("counter.html"))
            increase = driver.find_element_by_id("increase")
            for i in range(3):
                increase.click()
            self.assertEqual(driver.find_element_by_tag_name("h1").text, "3")
```
