---
path: "/algorithm/baekjoon_STL/STL_string"
date: '2018-01-28'
title: "[백준] 프로그래밍 대회에서 사용하는 C++ STL string"
description: 백준 알고리즘 강의 STL 5강 정리
image: ''
tags: ['백준', 'C++', '강의노트']
---
> C와 C++의 문자열 정리.

### 문자열 (String)
- C 문자열: `char c[]`로 선언을 한다.
- C++ 문자열: `string s`로 선언을 한다.

```c++
char c[] = "c string"; // C 문자열

string s = c;          // C++ 문자열 (NULL전까지만 할당)
string s = "c++ string";
string s(5, '#');     // "#####"
```