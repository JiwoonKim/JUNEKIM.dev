---
date: '2019-07-12'
title: "자바스크립트로 패러다임 살펴보기"
description: 
tags: ['웹개발', '프론트엔드', 'JavaScript', '패러다임']
---

### 패러다임
- imperative
    - procedural
    - object-oriented
- declarative
    - functional 
    
### 함수형 패러다임 (Functional Paradigm)
모든 것을 함수로! (everything in functions)
함수 = input -> output
1. avoid side-effects; use pure functions
    - ex. printing (X), using or changing global variables (X)
2. higher-order functions
    - use functions as input or outputs; nested functions possible
    - ex. iteration like for-loop (X) -> instead, use `map`, `reduce`, `filter`
3. avoid mutability; can't change values of data
    - all data = immutable
```js
// use this way instead of changing initial[0] = 0;
let initial = [1, 2, 3];
let changed = initial.map( (val) => {
    ...
})
```
    - problem: unnecesaary duplicates just to change small part of data
    - solution: use persistent data structures (structural sharing)
        - ex. Mori, immutable.js

- [참고자료](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming)