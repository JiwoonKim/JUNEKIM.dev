---
path: "/web50/lecture_5"
date: '2018-08-21'
title: "Web50 lecture 5 - JavaScript & Web Sockets"
description: CS50 Web Programming with Javascript and Python lecture 5 정리
image: ''
tags: ['CS50', 'Web50', '강의노트', '웹개발', 'javascript', '웹소켓']
---
> Harvard's Web Programming with Python and Javascript lecture 5 정리

### JavaScript
programming language designed to run inside a browser that runs on __client-side__

#### Syntax
- __Variables__: `const`, `let` (local to scope), `var` (local to function)
- __Literals__: ``Hello, ${name}``
- __Selectors__: 
    - `document.querySelector(" ")`
    - `document.querySelectorAll(" ")`
    - can change styles: `__
    .style._property_`
    - can change classes: 
        - `__.ClassName`
        - `__ClassList.add`, `__ClassList.remove`, `__ClassList.toggle`
- __Event Listeners__: `__.addEventListener(_event_, function() { ... });`
    - listens/waits for the event to occur
    - when event occured, the function is called (__call back functions__)
- __Arrow Functions__: `() => {}`
    - used to define __anonymous functions__ (w/o the word _function_)
```js
x => x + 2;
x => { alert(x); }
() => { alert(Hello); }
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("h1").style.color = 'red';
});
```

### Ajax (integrating Javascript w/ Flask)

### Web Sockets