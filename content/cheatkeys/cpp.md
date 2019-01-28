---
path: "/cheatkeys/cpp"
date: '2018-01-14'
title: "[C++] 치트키 정리"
description: C++ 치트키 정리
image: ''
tags: ['C++', '치트키']
---
> C++ 언어로 프로그래밍할 때 필요한 치트키들을 정리.
> 개인적인 자주 사용하는 문법을 반영하여 만든 치트키입니다.

### 입출력
- 기본적으로 `scanf`와 `printf`이 가장 빠르다.
- `ios_base::sync_with_stdio(false);`를 `cin`과 `cout` 사용 전에 명시하면 비슷한 빠르기로 실행가능.
- 입력:
    - `getline(cin, s)`를 사용하면 '\n' 기준으로 한 줄씩 읽을 수 있다 (단, cin 사용 후에 getline을 사용하려면 `cin.ignore`로 먼저 istream에 있는 '\n'을 flush해주어야 함) 
- 출력:
    - `cout << "\n"`가 endl 보다 빠르다.
    - printf 사용시 c++ string class를 

#### 테스트 케이스
- 모든 테스트 케이스를 입력받은 후에 출력할 필요 없이, 하나 입력받고 하나 출력하는 방식으로 진행해도 된다. (테스트 개수가 주어지지 않을 때 유용)
  1. 테스트 케이스의 개수가 주어지는 경우, `while(t--)을 사용할 것
```c++
int t; cin >> t;
while (t--) { ... } // t의 개수가 0 (false)일 때까지 진행
```
  2. 테스트 케이스의 개수가 주어지지 않는 경우, 입력을 EOF까지 받으면 된다.
```c++
int a, b;
while (scanf("%d %d\n", &a, &b) == 2)  { ... } // 입력 개수가 일치할 경우 동안 진행
```
```c++
while (cin >> a >> b)  { ... } // 입력 개수가 주어질 때까지 진행
```
```c++
string s;
while (getline(cin, s)) { ... } // 마찬가지 with getline
```

#### Input 형태
- Input이 인접한 형태로 주어졌을 때 (ex. 12345), `scanf 길이 제한`을 사용하여 입력받기.
```c++
scanf("%1d", &x); // 12345에서 1자리씩 읽기
scanf("%10s", s); // 문자열 길이 10씩 읽기
```

### 런타임 에러 피하기 프로토콜
- 자료형: 숫자가 너무 커지는 경우, int보다는 long이나 long long이 적절하다 (런타임에러 피하기)
- 벡터 삭제: `erase`를 사용할 경우, iterator 값이 그 다음 값으로 자동으로 증가하니 주의!
    - 만일, 원형으로 이어진다고 가정할 경우, `it++; if (it == v.end()) it = v.begin();` 와 `if (it == v.begin()) it = v.end(); it--`를 사용하면 좋다. 백준 문제 중 풍선 터뜨리기(2346번) 문제 참고하기!