---
path: "/algorithm/baekjoon_STL/cpp_basic"
date: '2018-01-24'
title: "[백준] 프로그래밍 대회에서 사용하는 C++ 언어"
description: 백준 알고리즘 강의 STL 2강 정리
image: ''
tags: ['백준', 'C++', '강의노트']
---

### 입출력
- `cin`와 `cout` 사용.
- `getline(cin, s)`: 한 줄 읽기

#### 실수 출력
- setprecision과 fixed을 사용한다.
```cpp
#include <iomanip>
#include <iostream>
using namespace std;
// 소수점 출력하기
double f = 3.14159;
cout << setprecision(5) << f ; // 총 5글자 반올림하여 출력: 3.1416
cout << fixed << setprecision(5) << f; // 소수점 5자리까지 출력: 3.1415
```

#### 출력 속도
- endl는 flush까지 포함하기 때문에 '\n'을 사용하는 것이 빠르다.
- printf가 cout보다 빠르다.
- cin/cout 사용 전에 `ios_base::sync_with_stdio(false);`를 사용하면  printf의 속도로 사용가능 (단, cin/cout을 scanf/printf와 같이 사용할 수 없음)

### auto 자료형
- 컴파일러가 자료형 타입을 추론해서 타입을 결정한다.
- 변수의 타입을 명확하게 알 수 있게 value를 assign해야 함.
```cpp
auto a;     // 자료형을 추론할 수 없기에 컴파일 에러가 뜸
auto b = 0; // 자료형이 추론 가능
```
- iterator로 사용할 때 매우 편리하다.
```cpp
#include <vector>
#include <map>
map<pair<int, int>, vector<pair<int,string>>> d;
for (auto it = d.begin(); ...) //길게 자료형을 선언해야 하는 대신 auto 편리하게 사용
```

### range-based FOR
- foreach에 해당하는 문법.
```cpp
#include <vector>
vector<int> a = {1, 2, 3, 4, 5};
for (auto x : a) {...}
```

### 람다 함수 (Lamda Function)
- 이름이 없는 익명 함수: [캡쳐] (함수인자) {함수내용}으로 정의한다.
```cpp
cout << [](int x, int y) {
    return x + y; 
}(1, 2);
```
```cpp
auto sum = [](int x, int y) {
    return x + y;
};
cout << sum(1, 2);
```

#### 캡쳐
- 람다 함수의 scope를 어떻게 결정할 것인지를 정하는 부분이다.
- [&]를 통해 람다 함수 밖의 모든 변수를 참조할 수 있다.
```cpp
int x;
auto is_less = [&] (int number) {
    return number < x;
};

#### 리턴 타입
```cpp
function<void()> print = [] {};
function<void(int)> print2 = [](int x) {};
function<int(int,int)> sum = [](int x, int y) {
    return x + y;
};
```