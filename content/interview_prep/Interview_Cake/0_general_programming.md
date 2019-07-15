---
date: '2019-06-27'
title: "Interview Cake - 0. General Programming"
description: Interview Cake - General Programming 정리
tags: ['Interview Cake']
---
> Interview Cake의 General Programming 파트 정리

### Short Circuit Evaluation
strategy of __stop evaluating logical expression as soon as the result is certain to avoid unnecessary work__
- `(first && second)`: stop if first is false; don't even bother to check second bcuz the whole expression is false anyway
- `(first || second)`: stop if first is true; the whole expression is true anyway

__use to filter out edge cases__ (especially seg fault cases!)
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

#### cf) Smart Pointers in C++
a wrapper class over pointers to help __automatically manage and free resources__
- __unique pointers__: the only reference to its allocated resource (single ownership)
```cpp
#include <memory>
using namespace std;
// unique pointer
unique_ptr<int> p1(new int(5));
// prevents copying of its contained pointer
unique_ptr<int> p2 = p1; // compile error
// as soon as the unique pointer is out of scope, it is deallocated
p2 = move(p1); // transferred ownership
cout << p1; // prints null
```
- __shared pointers__: multiple pointers can reference the same resource
```cpp
// shared pointer
shared_ptr<int> p1(new int(5));
// another pointer shares the reference
shared_ptr<int> p2(p1);
// refernce count
cout << p1.use_count(); // prints 2
// freed when all the references are out of scope
p1.reset(); // relinquish ownership
p2.reset();
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
// modified to mutable vector
const_cast<vector<int>&>(v)[0] = 1;
```