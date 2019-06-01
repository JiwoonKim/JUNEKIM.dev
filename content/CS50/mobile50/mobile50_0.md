---
path: "/mobile50/0"
date: '2019-03-15'
title: "Mobile50 lecture 0 - JavaScript"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'Javascript']
---
> Understanding JavaScript

### JavaScript
- _interpreted language_: read and execute line by line
- each browser has their own JavaScript engine that interprets the code
- __ECMAScript standard__

### Types
JavaScript has __dynamic typing__
- variables are not associated w/ specific types
- __primitive types__: _no methods, immutable_
    - `undefined`: _falsy_ value
    - `null`: _falsy_ value
    - `boolean`: false = _falsy_ value
    - `number`: 0 = _falsy_ value
    - `string`
    - `symbol`
- __objects__: every other type is object

#### Typecasting
changing one type to another type (a.k.a __coercion__)
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
- include __objects, arrays, and functions__
- mutable and stored by reference
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
- objects are __passed by reference__
- acts like pointers
- assigning `=`: _pointing to the reference_
- copying `Object.assign({}, _copy_)`: create new object and merge the values
```js
// o1 and o2 point to the same object
const o1 = {
        a: 'a',
}
const o2 = o1 
// o3 points to a completely different object
// but same values bcuz merged o1's values into o3
const o3 = Object.assign({}, o1)
```

#### Prototypal Inheritance
- primitive types do not have methods associated w/ them
    - but can use __wrappers__ which give access to methods
    - primitive types are _automatically wrapped/boxed_ when used as variable
- __non-primitive types (objects)__ have __properties__ and __methods__
    - each object stores a __reference to its prototype__
    - the more specific prototype, its methods
- it is __dangerous to make changes to prototypes

### Scope
variable lifetime (how long a variable exists)
- lexical scoping: `var`
- block scoping: `const` and `let`
- global scoping: declared w/o scoping

#### How JavaScript Engine Works
- before executing the code, the __engine read the entire file first__ and will _throw a syntax error if one is found_
    - _any function definition will be saved in memory_
    - variable initializations will not be run, but _lexically-scoped variable (var) names will be declared_
- then, __code is executed__
    - _block-scoped variables (let, const) names will be declared_

#### Hoisting
- __variables and function declarations__ are __moved to the top__ of their scope __before code execution__

### Global Object
- __all variables and functions__: _parameters and methods on the global object_
    - _Browser global object_ = __window object__
    - _Node.js global object_ = __global object__