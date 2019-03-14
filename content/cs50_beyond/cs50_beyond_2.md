---
path: "/cs50/beyond/2"
date: '2019-03-12'
title: "CS50 Beyond lecture 2 - JavaScript"
description: CS50 Beyond lecture 2 정리
image: ''
tags: ['CS50', '강의노트', '웹개발', '']
---
> Harvard's CS50 Beyond lecture 2 정리

### JavaScript Syntax

#### Variables
define variables
- `let`: mutable; can change value
- `const`: _immutable_; can't change value

#### Functions
define functions
- `function` keyword

### DOM Manipulation

#### Selectors
select an object in html by id, class, element
- `document.querySelector(" ")`: returns __first element__
    - `document.querySelector("tag")`
    - `document.querySelector("#id")`
    - `document.querySelector(".class")`
- `document.querySelectorAll(" ")`: returns a __list__ of elements
    - __use w/ `for` loop__ to iterate over all

#### Events
- can use __inline__ in HTML __as attribute__ in element
```html
<button onclick="count">Increment</button>
```
- can use within `addEventListener("DOMContentLoaded, function)`
```js
document.addEventListener("DOMContentLoaded, function() {
    document.querySelector("button").onclick = count;
});
// button이 click되면, 따로 정의한 count 함수를 호출
```
    - html <head> 부분에 script가 포함되어 있는 경우, __DOM이 다 만들어질 때까지 기다리게 하기__
    - 아니면 _<body> 밑에 포함시키기_
- __functions__:
    - `onclick`
    - `onload`
    - `onmouseover`
    - `onkeydown`, `onkeyup`
    - `onblur`
- __styles__:
    - `.style.`후에 style property 나열하여 값 assign하기
    - html에서 dataset attribute 포함시키면 더 편하게 사용 가능
```html
<button class="color-button" data-color="red">Red</button>
<button class="color-button" data-color="blue">Blue</button>
```
```js
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("color-button").forEach(function(button) {
        button.onclick = function() {
            document.querySelector("#text").style.color = button.dataset.color;
        }
    });
});
```
    
### ES6

#### Arrow Functions
- `() => {}`
- __use w/ arrays__ by:
    - `forEach`:
    - `map`
    - `filter`

### Functional Programming
JavaScript can pass functions as arguments (not immediately use them, but save for calling later)
makes use of higher order functions (functions can be passed as argument values)
the function being passed is called a callback function - called when the event being listened for occurs
