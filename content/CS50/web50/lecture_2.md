---
path: "/web50/2"
date: '2018-07-21'
title: "Web50 lecture 2 - Python & Flask"
description: CS50 Web Programming with Javascript and Python lecture 2 정리
image: ''
tags: ['CS50', 'Web50', 'Flask']
---
> Harvard's Web Programming with Python and Javascript lecture 2 정리

### Python

#### Basic Syntax
- __indentation is important!__
- printing
```python
# print string
print("Hello, world!")
# print string with variable
name = input()
print(f"Hello, {name}!)
```
- if-else conditions
```python
if x > 0
    print("+")
elif x < 0
    print("-")
else
    print("0")
```
- for loops
```python
# iterate for 5 times
for i in range(5):
    ...
# iterate over collection
for name in names:
    ...
```
- functions
```python
def function(x):
    return x * x
```
    - trying to call a function not defined, raises a __NameError__ as exception

#### Data Types
- python = __weakly typed language__
- `int`, `float`, `str`, `bool`, `None`

#### Data Structures
- __Sequences__
    - __String__(sequence of char): `name = "Alice"` (name[0]으로 접근 가능)
    - __Tuple__: `coord = (10.0, 20.0)` (coord[0]으로 접근 가능)
    - __List__: `names = ["Alice", "Bob", "Charlie"]` (names[2]로 접근 가능)
    - if index out of range, __IndexError__ is raised as an exception
- __Sets__: unordered colection of unique elements
    - __cannot be indexed__; 중복 item은 하나로 저장됨
    - use: `s = set()` -> `s.add(1)`
- __Dictionaries__: unordered collection of (keys : values)
    - use: `ages = { "Alice": 22, "Bob": 27}` -> `print(ages["Alice"])`, `ages["Alice"] += 1`

#### Modules
__separate `.py` files of code__ (= __library__)
- ex: `from functions import square`
- to enable only certain functions to be called instead of entire code in the separated file, __must encapsulate entire code under `main` and include call to main function__
```python
def main():
    ...
if __name__ == "__main__":
    main()    
```

#### Classes
a way to __define a new custom python datatype__
```python
# define class
class Point
    def __init__(self, x, y):
        self.x = x
        self.y = y
# initialize instance of class
p = Point(3, 5)
point(p.x)
```

### HTTP
__protocol for receiving requests and sending responses__
- system the internet uses to interact and communicate btw computers and servers
- having written a website, the next step is to write the code that takes care of the __server-side processing__ (receiving and interpreting requests and generating responses for the user)

### Flask
__python code for a back-end server__, listening for requests and returning somekind of response
- __micro-framework__ written in python that makes it easier to get a simple web application up and running
- useful in that helps developers focus on the requests from and responses to users
- __designed in routes__ (in part of the URL) which determine which page is being requested
- use: 
    - `export FLASK_APP = {app_name}.py`: enable flask to know that file is the web server program
    - `flask run`: run the web server program

#### Flask App
- a simple app
```python
# use flask as micro-framework
from flask import Flask
app = Flask(__name__)
# define function for route
@app.route("/")
def index():
    return "hello, world!"
```
- __use data from url (get request)__
```python
# when any string is entered in route, it will be stored as name and used in the function
@app.route("/<string: name>")
def hello(name):
    # return inline html tags
    return f"<h1>hello, {name}!</h1>"
```

#### Rendering Templates
__return html templates__, maybe plugged with data (instead of using inline html tags)
- use: `from flask import render_template`
```python
from flask import Flask, render_template
app = Flask(__name__)
# return index.html
@app.route("/")
def index():
    return render_template("index.html")
```
- __template file should be stored in directory__ `templates`
- can also __pass arguments__ to render_template: plug in data into templates
```python
...
headline = "hello, world!"
return render_template("index.html", headline=headline)
```

#### Jinja2
templating language for flask's render_template
- template is rendered by Jinja2 language
- use: `{{ }}`
```html
<!-- index.html -->
<h1> {{ headline }} </h1>
```
- conditions: `{% if %}`, `{% else %}`, `{% endif %}`
```html
{% if  new_year %}
    <h1> Happy New Year! </h1>
{% else %}
    <h1> Not Yet :( </h1>
{% endif %}
```
- loops: `{% for %}`, `{% endfor %}`
```html
{% for name in names %}
    <li> {{ name }} </li>
{% endfor %}
```
- __template inheritance__: __factor out commonalities into layout templates__ using `blocks`
- __link__ different parts of your web app: use `{{ url_for( 'route_name' ) }}`
```html
<a href="{{ url_for( 'route_name' ) }}">link</a>
```

#### Forms
- __forms__ w/ backend to store data
```html
<!-- hello.html -->
<form action="/" method="post">
    <input type="text" name="name">
    <button>submit</button>
</form>
```
```python
# backend web server
from flask import Flask, render_template, request
@app.route("/")
def hello():
    name = request.form.get("name")
    return render_template("hello.html", name=name)
```

#### Storing data in Web servers
- __global variables__ in python: stores data as long as server is alive, but restarts when server is down (volatile)
- __sessions__ (a.k.a cookies): stores data that pertains to a particular user, regardless of whether server is up or down (involatile)
```python
from flask import Flask, render_template, request, session
from flask_session import Session
app = Flask(__name__)
# configure sessions
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
# set route
@app.route("/", methods=["GET, POST"])
def index():
    # if notes doesn't exist in sessions, initialize notes
    if session.get("notes") is None:
        session["notes"] = []
    # if post request, store note data into sessions from form
    if request.method == "POST":
        note = request.form.get("note")
        session["notes"].append(note)
    # return template using notes data from sessions
    # if get request, automatically fetch notes data
    # if post request, update notes data and fetch that notes data
    return render_template("index.html", notes=session["notes"])
```
- databases: for more complicated data (involatile)