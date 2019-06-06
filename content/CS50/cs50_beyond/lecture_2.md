---
path: "/cs50/beyond/2"
date: '2019-03-12'
title: "CS50 Beyond lecture 2 - JavaScript"
description: CS50 Beyond lecture 2 정리
image: ''
tags: ['CS50', 'JavaScript']
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
    
### ES6: Arrow Functions
- `() => {}`
- __use w/ arrays__ by:
    - `forEach`:
    - `map`
    - `filter`

### Functional Programming
- JavaScript makes use of higher order functions 
 - __function can be passed as argument values__
- functions being passed is called __callback functions__
    - called when the event being listened for occurs

### Using an API in JavaScript
- use `fetch`
- use promises: `.then` and `.catch`

#### Making an Ajax request
```js
// currency converter example
document.addEventListener('DOMContentLoaded', () => {
    const currency = document.querySelector('#currency').value;
    // Make an HTTP request (Ajax request)
    fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency}`)
    // convert response to JSON format
    .then(response => response.json())
    // extract the information and plug in to HTML
    .then(data => {
        const content = `1 USD = ${data.rate[currency]} ${currency}`;
        document.querySelector('#result').innerHTML = contents;    
    })
    // catch errors
    .catch(() => {
        document.querySelector('#result').innerHTML = 'error';
    });
    return false;
});
```

### SVG Animation (using D3 library)
- link script of d3 library in html file
- 