---
path: "/mobile50/0"
date: '2019-03-15'
title: "Mobile50 lecture 0 - JavaScript"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'JavaScript', '자바스크립트'
]
---
> Understanding JavaScript

### JavaScript
- _interpreted language_: read and execute line by line
- each browser has their own JavaScript engine that interprets the code
- __ECMAScript standard__

### Types
JavaScript has __dynamic typing__
- variables are not associated w/ specific types
- __primitive types__: no methods, _immutable_
    - `undefined`: falsy value
    - `null`: falsy value
    - `boolean`: false = falsy value
    - `number`: 0 = falsy value
    - `string`
    - `symbol`
- __objects__: everything else

#### Typecasting
changing one type to another type (a.k.a coercion)
- _explicit coercion_: being explicit in changing types
    - ex. const string_x = String(x);
- _implicit coercion_
    - ex. const string_x = x + " ";

#### Check Types
- __check type__: `typeof`
- __compare values__
    - `==`: coerce the types (types don't have to be equivalent)
        - __never use!__ (bcuz) you have to know all the coerce types to use it
    - `===`: requires equivalent types

### Objects
everything else than the primitive types
- mutable
- stored by reference
- _three ways_ to __create objects__:
```js
const d = new Object();
d.name = "dragon"
d.isAlive = true
o.fire = function () {
    console.log('fire!')
}
```
```js
const d = {}
d.name = 'dragon'
d{'isAlive'} = true
```
```js
const d = {
    name: "dragon",
    isAlive: true,
    fire: function {
        console.log('fire!')
    },
}
```
- __access__: by `.key` or `['key']`

#### Object Mutation


#### Prototypal Inheritance

#### Scope

### JavaScript Engine

### Global Object

### Closures