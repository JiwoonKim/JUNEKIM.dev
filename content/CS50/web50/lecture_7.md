---
path: "/web50/7"
date: '2018-09-05'
title: "Web50 lecture 7 - Django"
description: CS50 Web Programming with Javascript and Python lecture 7 정리
image: ''
tags: ['CS50', 'Web50', 'Django']
---
> Harvard's Web Programming with Python and Javascript lecture 7 정리

### Django
a heavier web framework w/ more built-in features to develop more sophisticated and complicated web applications easily

### Using Django
- __projects__: Django divides all of its web application into multiple projects, composed of different parts
    - __create new project__: `django-admin startproject {project_name}`
- __appications__: project consists of one or more Django applications, which serves a particular purpose
    - __create new app__: `python manage.py startapp {app_name}` __inside the project directory__
- __run server__: `python manage.py runserver` inside project directory

#### Project
creates a directory {project_name} w/ one python file and one directory
- `manage.py`: python script to use to perform useful operations on the app
- `{project_name}/` __directory__
    - `__init__.py`: defines {name/} difectory as a package (= collection of multiple python files)
    - `settings.py`: defines settings for the app
    - `urls.py`: associates urls to functions (for the entire project)
    - `wsgi.py`: file that helps to deploy an app to a web server

#### App (inside project)
creates a {app_name} directory (w/ multiple python files and one migrations folder) inside the project directory
- `__init__.py`:
- `admin.py`: add models in app to be accessed/manipulated from admin app
- `apps.py`: defines configuration of app
- `models.py`: where classes for specific data types are defined in order to be stored in database
- `tests.py`:
- `urls.py`: associates urls to functions (for this specific app) -> need to manually create file
- `views.py`: where functions are defined for each routes
- `migrations/` folder: automatically detect changes in models and generate sql codes to make changes to the database (instead of manually coding sql commands)

### Configure Views
airlines application example (airline project - flights app)
- `views.py`: where functions are defined for each routes
```python
from django.http import HttpResponse
# create views: always include request as parameter
def index(request):
    return HttpResponse("flights!")
```
- `flights/urls.py`: associates urls to functions (for this specific app) -> need to manually create file
```python
# import path variable
from django.urls import path
# import views function from current directory
from . import views
# associate urls to certain functions for this particular app
urlpattern = [
    # / -> views.index()
    path("", view.index)
]
```
- `urls.py`: associates urls to functions (__for the entire app__; project app only looks into the project's urls.py not into the app's urls.py -> need to link to app's urls.py)
```python
from django.contrib import admin
from django.urls import include, path
# associate urls to certain apps' urls for the entire project
urlpatterns = [
    path('', include('flights.urls')),
    path('admin/', admin.site.urls),
]
```

#### Routes w/ Parameters
- `views.py`: add function to use data in parameter
```python
...
# define function w/ parameter as argument
def flight(request, flight_id):
    # retrieve data from database using parameter
    try:
        flight = Flight.objects.get(pk=flight_id)
    except Flight.DoesNotExist:
        raise Http404("Flight does not exist")
    # return template w/ data
    context = {
        "flight": flight
    }
    return render(request, "flights/flight.html", context)
```
- `flights/urls.py`: add view function to app's url
```python
urlpatterns = [
    ...
    path("<int:flight_id>, views.flight)
]
```

#### Link between URLS
- __name urls__ in `flights/urls.py` so that can refer to route using name
```python
urlpatterns = [
    path("", views.index, name="index"), 
    path("<int:flight_id>", views.flight, name="flight")
]
```
- use urls in html: `{% url 'route_name' %}` in href
```html
<!-- flight.html: add link to route to index -->
<a href="{% url 'index' %}">Back to index page</a>
```
```html
<!-- index.html: add link to route to flight/{flight_id} -->
<a href="{% url 'flight' flight.id %}">{{ flight}} </a>
```

### Templates

#### Rendering Templates
- `views.py`: define function to return template
```python
from django.http import HttpResponse
from django.shortcuts import render
from .models import Flight
# define function for view
def index(request):
    # define context to include data from database
    context = {
        "flights": Flight.objects.all()
    }
    # return template and pass context
    return render(request, "flights/index.html", context)
```
- __create `templates` folder__:
    - create `flights` __folder where template file will be stored__ (define as __namespace templates__)
- __create template__
```html
<!-- airline/flights/templates/flights/index.html -->
<h1> Flights </h1>
<ul>
    {% for flight in flights %}
    <li> {{ flight }} </li>
    {% endfor %}
</ul>
```

#### Template Inheritance
- create generic template
```html
<!-- base.html -->
<title> {% block title %}{% endblock %} </title>
{% block body %}
{% endblock %}
```
- extend generic template 
```html
<!-- index.html -->
{% extends "flights/base.html" %}
{% block title %} Flights {% endblock %}
{% body block %}
    <h1>Flights</h1>
{% endblock %}
```

### Configure Models (databases)
airlines application example (airline project - flights app)
1. define models
2. include models in project's config
3. make migrations to database

#### 1. Define models
- `models.py`: where classes for specific data types are defined in order to be stored in database
- __create a separate Airport model and reference it in Flights model via ID__
```python
from django.db import models
# define airport model
class Airport(models.Model):
    code = models.CharField(max_length=3)
    city = models.CharField(max_length=64)
    # define print function of class
    def __str__(self):
        return f"{self.city} ({self.code})"
# define flight model (using references from airport model)
class Flight(models.Model):
    origin = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="departures")
    destination = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="arrivals")
    duration = models.IntegerField()
    # define print function of class
    def __str__(self):
        return f"{self.id} - {self.origin} to {self.destination}"
```
- reference using `ForeignKey()`
- specify `on_delete=models.CASCADE` to delete all flights w/ that airport when that airport instance is deleted from database
- specify `related_name="key"` to use key to access only those specific cases (flights w/ key)

#### 2. Include Model in Project's Config
- `{airline_project}/settings.py`: let the app know the models (-> include app's class in INSTALLED_APPS)
```python
...
INSTALLED_APPS = [
    # include model (flights/apps.py 내의 FlightsConfig class)
    'flights.apps.flightsConfig',
    ...
]
```

#### 3. Make Migrations
- `migrations/` folder: automatically detect changes in models and generate sql codes to make changes to the database (instead of manually coding sql commands)
    - __create migrations__: `python manage.py makemigrations`
    - __apply migrations__: `python manage.py migrate`
        - cf) view the actual sql command: `python manage.py sqlmigrate {app} {migration #}`
- cf) database defined in `{project}/settings.py` 내의 DATABASES 부분

#### cf) Django shell
- use: `python manage.py shell`
```python
## implement code line-by-line in shell terminal
# import airport and flight class
from flights.models import Airport, Flight
# create instance for airports (insert data)
jfk = Airport(code="JFK", city="New York City")
lhr = Airport(code="LHR", city="London")
# save the change to database
jfk.save()
lhr.save()
# create instance for flight (insert data)
f = Flight(origin=jfk, destination=lhr, duration=415)
f.save()
# query for data
Flight.objects.all()
jfk.departures.all() # returns flights which origin=jfk
# access instance
f.origin.code
# delete instance from database
f.delete()
```

### Admin
__built-in app that makes it easy to manipulate data__ for the web page
- `admin.py`: add models in app to be accessed/manipulated from admin app
```python
from django.contrib import admin
from .models import Airport, Flight
# register models to use in admin app
admin.site.register(Airport)
admin.site.register(Flight)
```
- __register and login to admin__:
    - register: `python manage.py createsuperuser`
    - login: via admin site
- runserver and go to `/admin` route: access user interface

### 