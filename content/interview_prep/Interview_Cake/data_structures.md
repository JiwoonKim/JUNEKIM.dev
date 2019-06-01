---
path: "/interviewcake/datastructure"
date: '2019-05-10'
title: "Interview Cake - Data Structures"
description: Interview Cake - Data Structures 정리
image: ''
tags: ['Interviewcake', '자료구조']
---
> [Interview Cake의 Data Structure 파트](https://www.interviewcake.com/article/cpp/data-structures-coding-interview?course=fc1&section=algorithmic-thinking) 정리

### Random Access Memory (RAM)
__where variables are stored__ (a.k.a memory)
- 그림
- computers keep track of variables (numbers, strings, arrays, etc.) to run code
- structured like __tall bookcase w/ billions of shelves__
    - each shelf holds 1 byte (8 bits)
    - shelf number = address
- processors access variables via the __memory controller which has direct access to each shelf (by indexing the address)__
- processors also __use cache to speed the access time__
    - cache = storing nearby content of recently accessed addresses
    - this makes reading sequential memory faster than jumping around addresses

#### RAM (memory) <-> Disc (storage)
- memory: faster but less space, direct access (by indexing address)
- storage: slower but more space, no direct access (have to use head on disc)

### Binary Numbers
the number system computers use

#### Fixed-width Integers
- integer overflow 있을 수 있음
- takes constant space O(1)
- simple operations take constant time O(1)

### Arrays
- storing same data type in sequential order in memory
- access time: O(1), cachable
- constraints: same data type, must be stored in sequenctial order

### Strings
- storing series of chars

#### Pointers
- storing address of data
- ex. array of strings (= array of arrays)
    - problem: each string may have different length
    - solution: store each string in any given space (don't need huge amount of space) then, store the first address of each string in array
    - constraints: not cachable

### Dynamic Arrays
- problem w/ arrays: have to pre-determine their size
- dynamic arrays resize arrays when more space is necessary

### Linked Lists
- faster prepends/appends than dynamic arrays
- but slower lookups

### Hash Tables
- 배열 인덱스 숫자를 통해 값에 접근하는 것처럼
- 특정 숫자, 단어 등을 인덱스 (키 값)로 값에 접근할 수 있는 배열처럼 생각하면 됨
- 특정 숫자, 단어 등의 키 값을 인덱스로 변환하는 과정을 hash function이라고 함
- hash collision 문제 해결 필요