---
path: "/cheatkeys/cpp"
date: '2018-01-14'
title: "C++ 치트키"
description: C++ 치트키 정리
image: ''
tags: ['C++', '치트키']
---
> C++ 언어로 프로그래밍할 때 필요한 치트키들을 정리.
> 개인적인 자주 사용하는 문법을 반영하여 만든 치트키입니다.

### 입출력
- 기본적으로 `scanf`와 `printf`이 가장 빠르다.
- `ios_base::sync_with_stdio(false);`를 `cin`과 `cout` 사용 전에 명시하면 비슷한 빠르기로 실행가능 (하지만 그래도 scanf와 printf가 더 빠름)
- 입력:
    - `getline(cin, s)`를 사용하면 '\n' 기준으로 한 줄씩 읽을 수 있다 (단, cin 사용 후에 getline을 사용하려면 `cin.ignore`로 먼저 istream에 있는 '\n'을 flush해주어야 함) 
- 출력:
    - `cout << "\n"`가 endl 보다 빠르다.
    - printf 사용시 c++ string class를 출력할 수 없기 때문에 c-type string으로 변환해주어야 한다.

#### 테스트 케이스
- 모든 테스트 케이스를 입력받은 후에 출력할 필요 없이, 하나 입력받고 하나 출력하는 방식으로 진행해도 된다. (테스트 개수가 주어지지 않을 때 유용)
  1. 테스트 케이스의 개수가 주어지는 경우, `while(t--)을 사용할 것
```cpp
int t; cin >> t;
while (t--) { ... } // t의 개수가 0 (false)일 때까지 진행
```
  2. 테스트 케이스의 개수가 주어지지 않는 경우, 입력을 EOF까지 받으면 된다.
```cpp
int a, b;
while (scanf("%d %d\n", &a, &b) == 2)  { ... } // 입력 개수가 일치할 경우 동안 진행
```
```cpp
while (cin >> a >> b)  { ... } // 입력 개수가 주어질 때까지 진행
```
```cpp
string s;
while (getline(cin, s)) { ... } // 마찬가지 with getline
```

#### Input 형태
- Input이 인접한 형태로 주어졌을 때 (ex. 12345), _scanf 길이 제한_ 을 사용하여 입력받기.
```cpp
scanf("%1d", &x); // 12345에서 1자리씩 읽기
scanf("%10s", s); // 문자열 길이 10씩 읽기
```

- float나 double 출력시, `fixed`를 사용하여 원하는 방식대로 출력할 수 있다.
```cpp
#include <iomanip>
// 값이 너무 클 때, scientific notation이 아닌 숫자 그대로 출력
double d = 365808847; // 
cout << fixed << d;
// 실수의 특정 자리수를 지정하여 출력
float f = 3.1415;
cout << fixed << setprecision(3); // 3.14 (셋째자리에서 반올림)
cout << setprecision(2); // 3.14
```

### 숫자와 수학

#### 올림, 내림, 반올림
- `<cmath>` 헤더파일 포함시켜 사용하기
```

```
#### 최소값 & 최대값
- `<limits>` 헤더파일 포함시켜 사용하기.
- 최소값 찾을 때: `numeric_limits<int>::max()`로 먼저 초기화하여 사용하기.
- 최대값 찾을 때: `numeric_limits<int>:: min()`로 먼저 초기화하여 사용하기.
- 벡터 내에서 최소값 또는 최대값 찾을 때: `min_element()` 또는 `max_element()`으로 이터레이터 값 접근하여 사용하기.

### 탐색
- 벡터/배열 내에 존재하는지 여부 판단을 위한 방법 2 가지:
    1. set와 count를 이용하는 방법
    2. sort 후 binary_search를 이용하는 방법

### 런타임 에러 피하기 프로토콜
- 자료형: 숫자가 너무 커지는 경우, int보다는 long이나 long long이 적절하다 (런타임에러 피하기)
- 벡터 삭제: `erase`를 사용할 경우, iterator 값이 그 다음 값으로 자동으로 증가하니 주의!
    - 만일, 원형으로 이어진다고 가정할 경우, `it++; if (it == v.end()) it = v.begin();` 와 `if (it == v.begin()) it = v.end(); it--`를 사용하면 좋다. 백준 문제 중 풍선 터뜨리기(2346번) 문제 참고하기!