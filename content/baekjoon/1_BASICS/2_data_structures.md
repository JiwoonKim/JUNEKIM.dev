---
path: "/algorithm/baekjoon_basic/data_structure_1"
date: '2019-01-25'
title: "[백준] 기초 02. 자료구조 1"
description: 백준 알고리즘 강의 기초 2강 정리
image: ''
tags: ['백준','알고리즘','C++','자료구조']
---

### 스택 (Stack)
- Last-in-First-Out (__LIFO__)
- C++의 STL의 stack을 사용하여 `push`, `pop`, `top`, `empty`, `size` 연산을 사용.
- 직접 구현할 경우, __stack을 표현할 배열과 크기를 기록할 size 변수 사용__.
- __가장 가까운 원소를 O(1)만에 찾을 수 있는 장점__ (push & pop)을 적극적으로 활용해서 문제를 풀 것!
```cpp
stack[size] = x; size++;     // push 연산
stack[size - 1] = 0; size--; // pop 연산
```

#### 괄호문제
- empty check를 바탕으로 풀기 때문에 따로 스택을 만들 필요 없이, 그냥 size만 사용해도 풀 수 있다.

#### 에디터문제
- 입력 크기를 고려하여 문자열 하나로 푸는 것이 아니라, 스택 두 개를 활용하여 풀어야 한다.

### 큐 (Queue)
- First-in-First-Out (__FIFO__)
- C++의 STL의 queue을 사용하여 `push`, `pop`, `front`, `back`, `empty`, `size` 연산을 사용.
- 한 쪽에서 자료를 넣고 다른 쪽에서 자료를 뺄 수 있는 구조.
- back보다 __front가 더 중요__.
- __양쪽에서 넣을 수 있다__
- 직접 구현할 경우, __queue을 표현할 배열과 시작 인덱스를 기록할 begin 변수와 마지막 인덱스를 기록할 end를 사용__.
```cpp
queue[end] = x; end++;          // push 연산
queue[begin] = 0; begin += 1;   // pop 연산
size = end - begin;             // size 연산 
empty = (begin == end)? 1 : 0;  // empty 연산
```

#### 조세퍼스문제
- 큐를 이용하여 풀기

### 덱 (Deque)
- __double-ended queue__: 양 끝에서 자료를 넣고 뺄 수 자료구조.
- C++의 STL의 queue을 사용하여 `push_front`, `push_back`, `pop_front`, `pop_back`, `front`, `back` 연산을 사용.

### 문자열 (String)
- __ASCII 코드를 사용하여 저장함__.
- 단어 길이가 필요 시, 아래와 같이 `len` 값을 따로 저장하여 사용해야 O(n) 실행 가능 (매번 루프에서 조건체크 시 strlen 호출하면 O(n^2)가 걸린다)
```cpp
int len = strlen(s);
for (int i = 0; i < len; i ++)
```
- __문자열 -> 정수 변환__: `stoi()`, `stol()`, `stoll()` 사용
- __정수 -> 문자열 변한__: `to_string()`