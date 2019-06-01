---
path: "/web50/lecture_2"
date: '2018-07-21'
title: "Web50 lecture 2 - Python & Flask"
description: CS50 Web Programming with Javascript and Python lecture 2 정리
image: ''
tags: ['CS50', 'Web50', 'Flask']
---
> Harvard's Web Programming with Python and Javascript lecture 2 정리

### Python

#### basic syntax
- indentation is important!
```python
print("Hello, world!")
```
```python
name = input()
print(f"Hello, {name}!)
```
```python
if x > 0
    print("+")
elif x < 0
    print("-")
else
    print("0")
```

#### data types
- python = weakly typed language
- `int`, `float`, `str`, `bool`, `None`

#### data structures
- sequences
    - string (sequence of char): `name = "Alice"` (name[0]으로 접근 가능)
    - tuple: `coord = (10.0, 20.0)` (coord[0]으로 접근 가능)
    - list: `names = ["Alice", "Bob", "Charlie"]` (names[2]로 접근 가능)
    - _if index out of range, IndexError is raised as an exception_
- sets = unordered colection of unique elements
    - cannot be indexed; 중복 item은 하나로 저장됨.



### HTTP

### Flask
