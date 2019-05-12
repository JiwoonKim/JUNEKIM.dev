---
path: "/cheatkeys/cpp"
date: '2019-05-12'
title: "C++ Common Errors 치트키"
description: C++ Common Errors 정리
image: ''
tags: ['치트키']
---
> C++로 프로그래밍하면서 자주 하는 오류 사항들 체크 리스트

#### 배열
- __variable sized arrays__ -> __use vectors__
    - arrays can only be declared with constant size (strictly speaking)
    - cannot use variables to initialize the size of an array
    - use `vector< vector<int> > v(rows, vector<int>(columns))` instead
    - or use `memset(v, 0, sizeof(v))` for initializing chars or -1 or 0 (not for other numbers)