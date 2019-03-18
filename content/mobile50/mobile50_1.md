---
path: "/mobile50/1"
date: '2019-03-18'
title: "Mobile50 lecture 1 - ES6"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'JavaScript', '자바스크립트'
]
---
> Understanding JavaScript ES6 Standards

### ES6
- the __specification__ of the language __ECMA Script__
- JavaScript = _implementation_ of this specification
- conventionally, environments __generally support ES5__
    - need __transpilers__ (_Babel, TypeScript, CoffeeScript_, etc.) to make newer features _backward compatible to ES5 spec_
- __use newer specs__
    - bcuz browsers will eventually catch up
    - can use transpilers to convert to ES5

### Closures
a function having __access to the parent scope__, __even after the parent function has closed__

#### Immediately Invoked Function Expression (IIFE)
- a.k.a __self-invoking function__
- __function expression invoked automatically, w/o being called__
    - function expression must be _wrapped around parenthesis_
    - and must be _followed by ()_ to be self-invoking
- creates __closure__ to enable the function to have a __private variable__ while not polluting the global scope
```js
var add = (function() { // self-invoked function (only invoked once)
        var counter= 0;     // sets the counter to 0
        return function() { // returns a function expression (add becomes function)
            counter += 1;
            return counter;
        }
}) ();
add(); // has access to counter variable
```

### First-class Functions
handling functions as _first-class citizens_
- __functions are treated the same way as values__ (functions = objects)
    - can be __assigned__ to variables, arrays values, and object values
    - can be __passed as arguments__ or __returned__ by other functions
- allows the creation of __higher-order functions__

#### Higher-order Functions
can take functions as arguments or return them
- `forEach()`: initiates a function on each of the elements in the array
- `map()`: maps a particular function to every element in the array, returns a result array
- `filter()`: filters an array through a function (returns true/false) and only retains the elements that had true values
- `reduce()`: takes multiple values (array) and reduces it to a single value (accumulates in how the function was defined)
- also includes __any custom-made function__ that takes functions as arguments or return them

### Synchronous vs. Async vs. Single-threaded
- __JavaScript__: __synchronous__ and __single-threaded language__
    - a function may lock up the page (become unresponsive)
    - page may have to wait for a function to be over
- but, JavaScript can also be __aynchronous__ (can use _asynchronous functions_)
    - ex. `setTimeout(_function_, _seconds_)`

#### Asynchronous JavaScript
executes everything in the execution stack and then, checks the function queue (which is sent browser API) to execute
- __Execution Stack__: _call stack_ for __synchronous functions__
- __Browser APIs__: space of __asynchronous functions__ _tracked by the browser_
    - functions not built-in to the JavaScript 
    - functions are __sent to function queue__
    - ex. `setTimeout(_function_, _seconds_)`
- __Function Queue__: _queue_ for __asynchrnous functions__
- __Event Loop__: 
    - 

### Overflow

### Asynchronous Functions

### Callbacks

### Promises

### Async/Await

### this

### Broswers and the DOM