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
    - `__init__.py`: defines {project_name/} directory as a package (= collection of python files)
    - `settings.py`: defines settings for the app
    - `urls.py`: associates urls to functions (for the entire project)
    - `wsgi.py`: file that helps to deploy an app to a web server

#### App (inside project)
creates a {app_name} directory (w/ multiple python files and one migrations folder) inside the project directory
- `__init__.py`: defines {app_name/} directory as a package (= collection of multiple python files)
- `admin.py`: add models in app to be accessed/manipulated from admin app
- `apps.py`: defines configuration of app
- `models.py`: where classes for specific data types are defined in order to be stored in database
- `tests.py`: defines tests for app (check lecture 8)
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
add flight view page 
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
            "flight": flight,
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

#### Form
add registration page for flights
- create form to flight page (w/ dropdown of passengers)
```html
    <!-- add form inside flight.html -->
    <h2>Add a passenger</h2>
    <form action="{% url 'book' flight.id %}" method="post">
        {% csrf_token %}
        <select name="passenger">
            {% for passenger in non_passengers %}
            <option value="{{ passenger.id }}">{{ passenger }}</option>
            {% endfor %}
        </select>
        <input type="submit" value="Book Flight" />
    </form>
```
- `views.py`: add function for users to register to flights
```python
# add fields to context in flight function
        ...
        context = {
            ...
            "passengers": flight.passengers.all(),
            "non-passengers": Passenger.objects.exclude(flights=flight).all()
        }
        ...
    # define function to book flight
    def book(request, flight_id):
        # retrieve passenger and flights
        try:
            passenger_id = int(request.POST["passenger"])
            passenger = Passenger.objects.get(pk=passenger_id)
            flight = Flight.objects.get(pk=flight_id)
        # render error cases
        except KeyError:
            return render(request, "flights/error.html", {"message": "No selection made"})
        except Passenger.DoesNotExist:
            return render(request, "flights/error.html", {"message": "No passenger"})
        except Flight.DoesNotExist:
            return render(request, "flights/error.html", {"message": "No flight"})
        # add flight to passenger's flights information
        passenger.flights.add(flight)
        # redirect to flight page
        return HttpResponseRedirect(reverse("flight", args(flight_id, )))
```
- `flights/urls.py`: add book function to app's url
```python
    urlpatterns = [
        ...
        path("<int:flight_id>/book, views.book, name="book")
    ]
```
- __CSRF (Cross-site Request Forgery)__: potential security vulnerability in forms whereby someone could forge where the form is coming from -> Django built-in to protect from these attacks
    - add `{% csrf-token %}` within form tag

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
    <head>
        <title> {% block title %}{% endblock %} </title>
    </head>
    <body>
        {% block body %}
        {% endblock %}
    </body>
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
- reference to another class using `ForeignKey()`
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

#### Model Relationships
__many-to-many relationships__
- create an in-between table (to map between two relationships to allow many-to-many relationships)
- `models.py`: define class using `ManyToManyField`
```python
    ...
    class Passenger(models.Model):
        first = models.CharField(max_length=64)
        second = models.CharField(max_length=64)
        flights = models.ManyToManyField(Flight, blank=True, related_name="passengers")
        def __str__(self):
            return f"{self.first} {self.last}"
```
    - Django automatically creates in-between table when `ManyToManyField` is used
- shell to interact w/ that model
```python
    ## implement code line-by-line in shell terminal
    from flights.models import Flight, Passenger
    # create passenger instance and save
    p = Passenger(first="Alice", last="Adams")
    p.save()
    # add flight to passenger's field
    f = Flight.objects.get(pk=1)
    p.flights.add(f)
    # query for passenger's flights
    p.flights.all()
    # query for flight's passengers
    f.passengers.all()
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
    admin.site.register(Passenger)
```
- __register and login to admin__:
    - register: `python manage.py createsuperuser`
    - login: via admin site
- runserver and go to `/admin` route to access user interface

#### Extend Admin Interface
extend admin interface to allow for custom behavior
- `flights/admin.py`: add defining custom models
```python
    from django.contrib import admin
    from .models import Airport, Flight, Passenger
    # customize admin interface
    class PassengerInline(admin.StackedInline):
        # allow flight -> passenger modification at admin
        model = Passenger.flights.through
        extra = 1
    ## extend admin models
    class FlightAdmin(admin.ModelAdmin):
        # add that inline function for admin
        inlines = [PassengerInline]
    # use special admin class
    class PassengerAdmin(admin.ModelAdmin):
        # add easy way to move flights back and forth for a passenger
        fliter_horizontal = ("flights",)
    # register models
    admin.site.register(Airport)
    admin.site.register(Flight, FlightAdmin)
    admin.site.register(Passenger, PassengerAdmin)
```

### Login and Authentication
built-in app for authentication for users
- create users app
- `users/urls.py`: 
```python
    urlpatterns = [
        ...
        path("", views.index, name="index")
        path("login", views.login_view, name="login"),
        path("logout", views.logout_view, name="logout")
    ]
```
- `users/views.py`:
```python
    # Django's built-in authentication library 
    from django contrib.auth import authenticate, login, logou
    # other Django libraries
    from django.http import HttpResponse, HttpResponseRedirect
    from django.shortcuts import render
    from django.urls import reverse
    # create index view function
    def index(request):
        # if request is not authenticated, return login page
        if not request.user.is_authenticated:
            return render(request, "users/login.html", {"message": None})
        # if authenticated, return user page
        context = {
            "user": request.user
        }
        return render(request, "users/user.html", context)
    # create login view function
    def login_view(request):
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        # if user exists, redirect back to index
        if user is not None:
            login()
            return HttpResponseRedirect(reverse("index"))
        # if user does not exist, return login page again
        else:
            return render(request, "users/login.html", {"message": "Invalid credentials"})
    # create logout view function
    def logout_view(request):
        logout(request)
        return render(request, "users/login.html", {"message": "Logged out"})
```
- create users (using admin interface or shell)
```python
    ## implement code line-by-line in shell terminal
    from django.contrib.auth.models import User
    # create new user (firstname, email, password)
    user = User.objects.create_user("alice", "alice@something.com", "alice12345")
    # can modify user info
    user.first_name = "Alice"
    user.save()
```

### Static Files
using external static files (`.css` or `.js` files)
- need special Django syntax to use external static files
```html
{% load static %}
<link rel="stylesheet" href="{% static 'flights/styles.css' %}" />
```
- __create `static` folder__:
    - create `flights` __folder where static file will be stored__ (define as __namespace folder__)