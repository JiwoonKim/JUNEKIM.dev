---
date: '2019-08-07'
title: "[자료구조] ??. 스트링"
description: Data Structures in C++ - String 정리
tags: ['자료구조', 'Cpp']
---
> 문자 배열인 문자열 소개

### 문자열 (String)
문자(Char) 데이터 타입이 연속적으로 저장되는 자료구조 (sequence of chars)
- 문자만을 저장하는 배열의 한 종류라고 생각할 수 있다
    - 그래서 배열의 특징대로 메모리에 연속적으로 저장되고, 시간복잡도 O(1)의 인덱스 바탕의 임의 접근이 장점이다

#### 문자열의 종류
- char-based (null-terminated)
- string class

### 문자열 클래스 (String Class)
C++ 언어에서 구현된 문자열만의 클래스
```cpp
#include <string>
using namespace std;
string str;
```

#### 문자열 클래스 메소드
| 연산 | 사용방법 | 설명 |
|:----:|:---|:---|
| __삽입__ | v.insert(`it`, `값`) | 이터레이터 자리에 삽입|

sort() 했을 시 "12", "120", "13", "145" "146" 순서대로 정렬됨