---
path: "/javascript/3"
date: '2019-03-20'
title: "JavaScript 3 - Primitive Data Types"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'JavaScript']
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

### 1. Numbers
- use `e` to specify zero count
```js
let million = 1e6; // 1000,000
let milli = 1e-3; // 0.001
```

#### Conversion
- __to Number__: `+` or `Number()`, 
    - `parseInt()` & `parseFloat()`: to convert and parse
- __from Number__: `.toString()`
```js
let num = 255;
num.toString();  // "255"
num.toString(2); // "11111111"
100..toString(); (100).toString(); // to use directly on value
```

#### Rounding
- Rounding to __Integers__: `Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.trunc()`
- Rounding to __Floating-point values__:
```js
let num = 3.145;
// rounds to n digits after the point, returns string
// then, must convert it back to number type
+num.toFixed(2); // 3.145 -> "3.14" -> 3.14
```
    
#### Imprecison
since floating-point values are actually represented as endless fractions in binary form, they produce imprecise calculations. __So Beware!__ 
- can use `.toFixed()` to round result into desired outcome and lose imprecise calculations

#### Other Math Functions
- `Math.random()`: returns random number from 0 to 1
- `Math.max()` & `Math.min()`: returns max/min from number or arguments
- `**`: returns n^power

### 2. Strings
textual data encoded in UTF-16
- `.length`: return length of string
- `.toLowerCase()` & `.toUpperCase()`: convert to lower/uppercase

#### Substrings
- find position of substring: `.indexOf()`
- checks containing of substring: `.includes()`, `.startsWith()`, `.endsWith()`
- return a substring: `.slice()`, `.substring()`

#### Comparison
- use `localeCompare`, otherwise they are compared by character codes

### 3. Boolean
`true` or `false`

### 4. Null
__nothing, empty, value unknown__
- `null`:used to assign an empty or unkown value to variable

### 5. Undefined
__value is not assigned__
- `undefined`: used to check if variable has been assigned a value

### 6. Symbols
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