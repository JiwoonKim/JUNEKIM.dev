---
path: "/javascript/1"
date: '2019-03-19'
title: "JavaScript 1 - Fundamentals"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'Javascript']
---
> Understanding JavaScript
> - variables, data types, functions, browser functions
> - based on [tutorial](http://javascript.info/)

### Variables
- `let`: __mutable values__
- `const`: __immutable values__
    - use capital letter and underscores for hard-coded values

### Data Types
JavaScript = __dynamically typed language__
1. __Number__: integer and floating point numbers
    - _special numeric values_: `Infinity`, `-Infinity`, `NaN` (computational error)
    - _mathematical operations are safe_ in JS: __no fatal error__ (instead, returns NaN)
2. __String__: used w/ _quotes_ (single or double)
    - __backticks__ to embed variables w/ `${}`
3. __Boolean__: `true` or `false`
4. __Null__: `null` (_nothing, empty, value unknown_ )
    - used to assign an empty or unkown value to variable
5. __Undefined__: `undefined` (_value is not assigned_)
    - used to check if variable has been assigned a value
6. __Objects__: collections of data
7. __Symbols__: unique identifiers for objects

#### Check Type 
- use `typeof x` or `typeof(x)`: __returns a string__ w/ the __type name__

#### Type Conversion
converting values to the appropriate data type
- __implicit conversion__: _operators and functions_ __automatically convert__ the values given to them to the right type
- __explicit conversion__: `String()`, `Number()`, `Boolean()`
    - `+` in front of non-number: converts to _numeric value_

### Functions
- __one function, one action__: a function should do exactly what is suggested by its name, no more
    - _separating functions are as good as comments!_
- __arguments__:
    - if a parameter(value) is __not provided in use__, it is `undefined`
    - can set __default values for arguments__
- __a function can also be a value__
    - can be assigned, copied, or declared

#### Creating Functions
1. __Function Declaration__
    - use `function` keyword for declaration and __name by action__
    - JavaScript engine reads and creates function before code is actually executed
```js
function f { ... }
```
2. __Function Expression__
    - function created and __assigned to variable__ w/o name (anonymous)
    - function is created as a part of an expression
    - JavaScript engine creates function when assigned
```js
let f = function() { ... };
```
3. __Arrow Functions__: `=>`
    - function created and __assigned to variable__ w/o name (anonymous) and __simpler than function expressions__
    - _used in the same way as function expressions_
    - usually takes the form as `() => {}`
```js
let f = x => x + 1;
let f = (a, b) => {
            alert(`chose ${a} and ${b}`);
}
```

#### Callback Functions
- __functions passed as arguments__ to higher-order functions
    - passed the __function's name (w/o () )__
    - passed entire __function expressions__ or __arrow functions__
- they are expected to be __called back later if necessary__
    - w/ (), the result of the function is stored into variable
    - w/o (), __the function itself is stored__
```js
function sayHi() {
            alert( "hi" );
}
alert( sayHi ); // shows function's code
```

### Browser Functions
- `alert()`: opens modal window w/ text message
- `prompt()`: opens modal window w/ text message and input field, returns the inputted value
- `confirm()`: opens a modal window w/ a text message (question) and two buttons for true and false to be returned