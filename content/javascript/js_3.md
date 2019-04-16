---
path: "/javascript/3"
date: '2019-03-20'
title: "JavaScript 3 - Primitive Data Types"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'JavaScript', '자바스크립트'
]
---
> Understanding JavaScript
> - based on [tutorial](http://javascript.info/)

### Primitive Data Types
single valued data types
- 6 types: __numbers__, __strings__, __boolean__, __null__, __undefined__, and __symbols__

#### Primitive Methods
- JavaScript creates __object wrappers__ when __numbers, strings, booleans and symbols__ are accessed by `.` to allow extra functionalities such as __methods and properties__
- the wrapper (a.k.a String, Number, Boolean, Symbol) is different for each primitive type; provide different methods
- the wrapper is destroyed right after it is used

### Numbers
- use `e` to specify zero count
```js
let million = 1e6; // 1000,000
let milli = 1e-3; // 0.001
```

#### Conversion
- `.toString()`: method to convert number to string type
```js
let num = 255;
num.toString();  // "255"
num.toString(2); // "11111111"
100..toString(); (100).toString(); // to use directly on value
```

#### Rounding
- `Math.floor()`: rounds __down__ to integer value
- `Math.ceil()`: rounds __up__ to integer value
- `Math.round()`: rounds to __nearest__ integer value
- `Math.trunc()`: __removes decimal values__
    

### Strings

###

### Symbols
primitive type for unique identifiers
```js
let s = Symbol();
```
- symbols are __always unique__ even if they have the same name
- __used to create hidden properties for objects__
- symbol -> string: need to use `.toString()` (do not auto-convert)
- __global symbols__: symbols that can access the same value
    - same-named symbols are equal in global registry
    - use `Symbol.for(__name__)`
```js
// s === ss
let s = Symbol.for("id"); // create if not exists
let ss = Symbol.for("id");
```
    - `Symbol.keyFor(__symVar__)`: returns symbol name

#### System Symbols
system symbols JavaScript uses internally, can be used to fine-tune various various aspects of objects
- `Symbol.hasInstance`, `Symbol.isConcatSpreadable`, `Symbol.iterator`, `Symbol.toPrimitive`, etc.