---
date: '2019-03-18'
title: "Mobile50 lecture 1 - ES6"
description: 
tags: ['CS50', 'Mobile50', 'JavaScript']
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

### Immediately Invoked Function Expression (IIFE)
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
- but, JavaScript can also be __aynchronous__: use _asynchronous functions_
    - `setTimeout(_function_, _seconds_)`
    - __http requests__: 
        - `XMLHttpRequest()`, `fetch()`
        - __jQuery__, __ajax__, 
    - __database calls__

### Asynchronous JavaScript
executes everything in the execution stack and then, checks the function queue (which is sent browser API) to execute
- __Execution Stack__: _call stack_ for __synchronous functions__
- __Browser APIs__: space of __asynchronous functions__ _tracked by the browser_
    - functions not built-in to the JavaScript 
    - functions are __sent to function queue__
    - ex. `setTimeout(_function_, _seconds_)`
- __Function Queue__: _queue_ for __asynchrnous functions__
- __Event Loop__: __checks stack's status__
    - when stack is empty, __moves function from queue to stack__

#### Callbacks
functions passed as an _argument_ of a higher-order function
- way to __control flow of asynchronous calls__
    - makes sure certain code doesn't execute until other code has already finished execution
        - ex. make program not able to use data from API until API data is fully loaded
    - in other words, __execute code once asynchronous call returns value or completes__
    - program __does not have to wait__ for a value
    - can handle success and error cases
- __problem__ _as calls become more nested_, the code becomes more difficult to manage
    - __callback hell__ / __pyramid of doom__

#### Promises
way to alleviate the callback hell problem
- an object assuming a value is eventually returned within a success function
- use callback functions in chains via `.then` and `.catch`
    - `.then` handles success cases
    - `.catch` handles failure cases
- can refactor nested callback function into promises
- _use_:
    - `fetch`: function that returns a promise
    - `.then`: takes a callback
    - `.catch`: takes a callback to handle errors proceeded in the .then statements (only need a single error handler)

#### Async/Await
- introduced in ES2017
- allows ppl to write async code as if it were synchronous
- can refactor promises/callbacks to async/await
- _use_:
    - use `async` keyword in front of higher-order function
    - use `await` keyword in front of asynchronous functions
    - use `try` and `catch` to handle errors

### this
`this` points to the object that is set at the creation of a new execution context (function invocation)
- in the global execution context, refers to the global object
- if the function is called as a method of an object, 'this' is bound to the object the method is called on
- _usage_: way to use value you don't yet know what it will be
- setting 'this' manually: `bind()`, `call()`, `apply()`

### Classes
- introduced in ES6
- simplifies the defining of complex objects w/ __their own prototypes__
```js
class Set {
    constructor(arr) {
        this.arr = arr
    }
    add(val) {
        if (!this.has(val)) this.arr.push(val)
    }
    delete(val) {
        this.arr = this.arr.filter(x => x !== val)
    }
    has(val) {
        return this.arr.includes(val)
    }
    get size() {
        return this.arr.length
    }
}
```
- __classes__ (abstract form)
    - define properties and methods
    - define constructor method
- __instances__:
    - created by using `new` (to pass values) and a __constructor__
    - methods: any function invoked on instances
    - properties: any values associated w/ the instances
    - static methods: not related to specific instance but overall classes
```js
// extend class based on native set class
class MySet extends Set {
    constructor(arr) {
        super(arr)
        this.originalArray = arr
    }
    add(val) {
        super.add(val)
    }
    toArray() {
        return Array.from(this)
    }
    reset() {
        return new MySet(this.originalArray)
    }
}
```
- __inheritance__:
    - `extends` a class to define a new class
    - `super` refers to the class being extended

### Broswers and the DOM
- HTML defines a tree-like structure
- browsers render HTML to a webpage
    - construct the DOM tree in memory
    - then, paint the page
- DOM can be modified by using JavaScript