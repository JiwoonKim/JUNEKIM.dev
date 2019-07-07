---
date: '2018-08-21'
title: "Web50 lecture 5 - JavaScript & Web Sockets"
description: CS50 Web Programming with Javascript and Python lecture 5 정리
image: ''
tags: ['CS50', 'Web50', 'JavaScript', '웹소켓']
---
> Harvard's Web Programming with Python and Javascript lecture 5 정리

### JavaScript
programming language designed to run inside a browser that runs on __client-side__
- client-side processes reduce load on the server and are often faster

#### Syntax
- __Variables__: `const`, `let` (local to scope), `var` (local to function)
- __Literals__: ``Hello, ${name}``
- __Selectors__: 
    - `document.querySelector(" ")`
    - `document.querySelectorAll(" ")`
    - can change styles: `__.style._property_`
    - can change classes: 
        - `__.ClassName`
        - `__ClassList.add`, `__ClassList.remove`, `__ClassList.toggle`
- __Event Listeners__: `__.addEventListener(_event_, function() { ... });`
    - listens/waits for the event to occur
    - when event occured, the function is called (__call back functions__)
- __Arrow Functions__: `() => {}`
    - used to define __anonymous functions__ (w/o the word _function_)
```js
x => x + 2;
```
```js
x => { alert(x); }
```
```js
() => { alert(Hello); }
```
```js
document.addEventListener('DOMContentLoaded', () => {
            document.querySelector("h1").style.color = 'red';
});
```

#### JavaScript Examples
- To Do List
```js
document.addEventListener('DOMContentLoaded', () => {
        // when form is submitted, 
        document.querySelector('#new-task').onsubmit = () => {
            // create a list item element
            const li = document.createElement('li');
            // assign the input value into the content of the list item
            li.textContent = document.querySelector('#task').value;
            // append the list item to list
            document.querySelector('#tasks').append(li)';
            // reset the input value in form to blank
            document.querySelector('#task').value = '';
            // stop from from submitting
            return false;
        }
});
```
- Timer (increment count by 1s)
```js
document.addEventListener('DOMContentLoaded', () => {
        setInterval(count, 1000);
});
let counter = 0;
function count() {
        counter++;
        document.querySelector('#counter').textContent = counter;
}
// problem: counter resets everytime the browser reloads
```
- Timer (w/ local storage)
```js
// if no counter, set as 0
if (!localStorage.getItem('counter')) {
        localStorage.setItem('counter', 0);
}
document.addEventListener('DOMContentLoaded', () => {
        // set the counter content as counted before
        document.querySelector('#counter').textContent = localStorage.getItem('counter');
        // when button is clicked,
        document.querySelector('button').onclick = () => {
            // increment count
            let counter = localStorage.getItem('counter');
            coutner++;
            // update counter content value
            document.querySelector("#counter').textContent = counter;
            // store updated value in local storage
            localStorage.setItem('counter', counter);
        }
});
```

### Network Models
- __Request-Response model__
    - basis of HTTP requests and how client-server model works
    - useful as long as __data is only being passed when a request is made__
- __Ajax__
    - also __based on request-response model__
    - can make a request to access server-side resource __while not holding up the app to wait for response__
    - uses __callback functions__ to be invoked when response is ready
- __Web Sockets__
    - __based on event model__
    - __persistent connection__
    - useful for __when data is transferred frequently__
        - data 양이 많아 매번 request를 일일이 매번 만드는 것이 inefficient하기에 web socket가 더 유용

### Ajax (Asynchronous JavaScript and XML)
asynchronous way of getting data from server
- used to __get more information from server w/o reloading__ an entirely new page
- used on the client-side to create asynchronous web apps
- _굳이 client-side, server-side 따지지 말기_ (__ajax is its own concept__; bridge btw server & client)

#### Making an Ajax Call
1. make a __request__: `const request = new XMLHttpRequest()`
2. set the __method__ & __route__: `request.open('GET', '/')` or `request.open('POST', '/')`
3. define the __callback function__: `request.onload = () => { ... }`
    - use w/ `const data = JSON.parse(request.responseText)` to _parse response data_
    - check __data success__ and fail cases
4. __send request__: `request.send()` or `request.send(data)`
    - if post request, use w/ `const data = new FormData()` and _append object to it_
```js
document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('#form').onsubmit = () => {
                // create a request
                const request = new XMLHttpRequest();
                const currency = document.querySelector('#currency').value;

                // set the method and route of the request
                request.open('POST', '/convert');

                // callback function when request is completed
                request.onload = () => {
                    const data = JSON.parse(request.responseText);
                    // if successfully received resonse, show content currency
                    if (data.success) {
                        const content = `1 usd = $ {data.rate} $ {currency}`;
                        document.querySelector('#results').textContent = content;
                    }
                    // else print error
                    else {
                        document.querySelector('#results').textContent = 'error';
                    }
                };
                // create an object to hold the user input in
                const data = new FormData();
                data.append('currency', currency);

                // send data
                request.send(data);
                return false;
            };
});
```

### Web Sockets
protocol that allows __full duplex communication__
- allows to open and persist a connection to server so data is transferred quickly
- enables __real-time communication__
- __both client & server can send messages__

#### Using Web Sockets
- add a specific reference script to the html
- use socket in custom script (js)
    - `var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port)`
    - `socket.on('connect', () => { ... }`
    - `socket.emit('submit vote', {'selection': selection})`
    - `socket.on('announce vote', data => { ... }`
```js
document.addEventListener('DOMContentLoaded', () => {
            // create a socket connection
            var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);
            socket.on('connect', () => {
                // if button is clicked, emit a message to server
                document.querySelectorAll('button').forEach(button => {
                    button.onclick = () => {
                        const selection = button.dataset.vote;
                        socket.emit('submit vote', {'selection': selection});
                    };
                });
            });
            // when a message is received from server, display vote
            socket.on('announce vote', data => {
                const li = document.createElement('li');
                li.textContent = `vote recorded: ${data.selection}`;
                document.querySelector('#votes').append(li);
            })
});
```
- enable sockets in server
```python
# Enable sockets in Flask server
import os
import requests
from flask import Flask, jsonify, render_template, 
from flask_socketio import SocketIO, emit
app = Flask(__name__)
# create socket
socketio = SocketIO(app)
# when server receives message, emit message to all (broadcast)
@socketio.on("submit vote")
def vote(data):
        selection = data['selection']
        emit("announce vote", {"selection": selection}, broadcast=True)
```