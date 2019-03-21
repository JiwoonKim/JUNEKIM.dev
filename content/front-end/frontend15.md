---
path: "/frontend/15"
date: '2019-03-20'
title: "Frontend Focus 15 - JavaScript Primitive Data Types"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'JavaScript', '자바스크립트'
]
---
> Understanding JavaScript
> - 
> - based on [tutorial](http://javascript.info/)

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