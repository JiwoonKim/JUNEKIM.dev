---
path: "/cheatkeys/javascript"
date: '2019-04-08'
title: "JavaScript 치트키"
description: JavaScript 치트키 정리
image: ''
tags: ['Javascript', '치트키']
---
> JavaScript 언어로 프로그래밍할 때 필요한 치트키들을 정리.
> 개인적인 자주 사용하는 문법을 반영하여 만든 치트키입니다.

### Variables
- `let`으로 primitive data type 선언
- `const`으로 object, array, function 선언

### Arrays
- use `for of` to iterate
- use `map()` for returning values based on initial array (instead of `forEach()`)
- use `filter()` and `reduce()`

### Objects
- use `for in` to enumerate

#### Destructuring


### Functions
avoid side effects, keep functional purity (de)

### Debugging
- use `debugger` keyword in code

### How JavaScript Works
JavaScript is a __single-threaded__ language that can be __non-blocking__
- __single-threaded__: one call stack
    - (_cf. multi-threaded = multiple call stacks but deadlock issues_)
    - thus, JavaScript is __synchronous programming__ (one statement executed at a time)
- __non-blocking__: __asynchronous execution__ so that a single very long function does not block other functions (wait)
    - use web api -> callback queue 
    - checked by event loop