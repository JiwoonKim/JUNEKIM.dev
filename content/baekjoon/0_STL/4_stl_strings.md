---
path: "/baekjoon/STL/STL_string"
date: '2019-01-28'
title: "[백준] STL 04. 문자열"
description: 백준 알고리즘 강의 STL 5강 정리
image: ''
tags: ['백준', 'Cpp', 'STL']
---
> C와 C++의 문자열 정리

### 문자열 (String)
- C 문자열: `char c[]`로 선언을 한다.
- C++ 문자열: `string s`로 선언을 한다.
```cpp
char c[] = "c string";    // C 문자열
string s = "c++ string"; // C++ 문자열 (NULL전까지만 할당)
string s = c;            // C 문자열을 담을 수도 있음 
string s(5, '#');        // "#####"
```

#### 문자열 입출력
- `cin`와 `cout`, 그리고 `getline(cin, str)`사용이 편리하다.
- printf를 사용해야 하는 경우, `str.c_str()`을 통해 C 문자열로 변환 후 출력해야 한다.
```cpp
include <string>
string str = "hello";
printf("%s", str.c_str());
```

#### 문자열 연산
- 비교: 
    - `==`와 `!=`로 같은지 확인할 수 있다.
    - `>` 또는 `<`로 사전순으로 앞서는지 뒤에 서는지 알아볼 수 있다.
- 추가: `+=`와 `append` 또는 `insert`를 통해 뒤에 문자열을 추가할 수 있다.
- 크기: `length`를 통해 크기를 알아보고, `empty`를 통해 빈 문자열인지 확인해본다. (단, size는 unsigned 형태이기 때문에 size() - 1와 같은 표현이 불가능함))
```cpp
include <string>
string str = "h";    // h
str += "ello";       // hello
str.append("world"); // hello world
str.insert(10, "!"); // hello world! (10번째 index에 추가)
```

#### 문자열 <-> 숫자
- 문자열 -> 숫자: `stoi()`, `stol`, `stof`, `stod`를 이용한다.
```cpp
string str = "10";
int num = stoi(str);   // 10 (기본으로 10진법으로 바꿈)
num = stoi(str, 0, 2); // 2 (2진법으로 숫자를 읽어 바꿈)
num = stoi(str, 0 16); // 16 (16진법으로 숫자를 읽어 바꿈)
// 숫자와 혼합된 스트링 변환하기
str = "21 Guns";
num = stoi(str); // 21 (숫자가 있는 부분까지만 읽어 바꿈)
```
    - 0 ~ 9 한 자리수 문자열을 숫자로 변환시에는 `c - '0'` 도 사용 가능하다.
- 숫자 -> 문자열: `to_string()`를 이용한다.

#### 문자열 파싱 (string parsing)
- `istringstream`을 사용하여 string을 표준 입출력처럼 사용할 수가 있다.
```cpp
#include <string>
#include <stringstream>
// 일단 입력된 값을 스트링 형태로 저장
string str;
string line;
while (cin >> line) s += line;
// 스트림을 사용하여 문자열 파싱
int num;
istringstream sin(s); // 문자열 스트림을 생성
while (getline(sin, num, ',')) {...}; 
// 문자열 스트림의 문자열을 ,로 구분하여 num에 저장
```
