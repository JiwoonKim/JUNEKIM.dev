---
path: "/interviewcake/general_programming"
date: '2019-06-27'
title: "Interview Cake - General Programming"
description: Interview Cake - General Programming 정리
image: ''
tags: ['Interview Cake']
---
> [Interview Cake의 Data Structure 파트] 정리

### Short Circuit Evaluation
strategy of __stop evaluating logical expression as soon as the result is certain to avoid unnecessary work__
- (first && second): stop if first is false; don't even bother to check second bcuz the whole expression is false anyway
- (first || second): stop if first is true; the whole expression is true anyhow
- __use to filter out edge cases__ (especially seg fault cases!)
    - ex. (cur && cur->data > 0)

### Garbage Collection
C++ (manual memory management) <-> Java (garbage collector)
- __manual memory management__:
    - manually free allocated memory (ex. `new`)
```cpp
// manual memory management for C++
char* str = new char[15];
delete[] str;
```
- __garbage collector__: automatically frees up memory that a program is not using anymore
    - strategies: tracing garbage collection, reference counting
cf) C++ has __smart pointers__ (unique pointers, shared pointers) which automatically manage and free resources
```cpp

```

### Mutable vs. Immutable Objects
- __mutable object__: can be changed after it's created
    - mutable objects are nice bcuz you can make __changes in-place__
    - but be careful since the changes are reflecting into all references of that object
- __immutable object__: cannot be changed

#### in C++
__everything is mutable by default__
- `const` keyword to make immutable
- but `const_cast` lets you cast away const keyword so nothing is truly immutable
```cpp
// immutable vector
const vector<int> v = {0, 1};
// modified vector
const_cast<vector<int>&>(v)[0] = 1;
```