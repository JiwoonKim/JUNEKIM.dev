---
path: "/c++/cheatsheet"
date: '2018-01-14'
title: "C++ cheatsheet 정리"
description: C++ cheatsheet 정리
image: ''
tags: ['C++']
---

### C++ 입출력
- `ios_base::sync_with_stdio(false);`를 cin, cout 전에 사용하면 scanf, printf와 같은 속도로 입출력을 실행할 수 있다.
- 입력: 
    - `cin >> s`
    - `getline(cin, s)`: cin 사용후 `cin.ignore`을 사용하여 getline 사용시 \n flush가 필요)
    - scanf("%d", &x): \n을 자동으로 읽지 않으니 따로 명시하는 것 주의!
- 출력:
    - `cout << "\n"`을 cout << endl 대신 사용하기 (더 빠르다)
    - printf 사용 시 c++ string class를 읽을 수 없으니 주의!

#### 테스트 케이스
- 모든 테스트 케이스를 입력받은 후에 출력할 필요 없다. 
- 하나 입력받고, 하나 출력하여 진행 가능. (테스트 개수가 주어지지 않을 때 유용)
  1. 테스트 개수 t가 주어질 때, `while(t--)`을 사용.
```c++
int t; cin >> t;
while (t--) { ... } // t의 개수가 0 (false)일 때까지 진행
```
  2.  테스트 케이스 개수가 주어지지 않을 때, 입력을 EOF까지 받으면 된다.
```c++
int a, b;
while (cin >> a >> b)  { ... } // 입력 개수가 주어질 때까지 진행
```

#### Input 형태
- Input이 인접한 형태로 주어졌을 때 (ex. 12345), `scanf 길이 제한`을 사용하여 입력받기.
```c++
scanf("%1d", &x); // 12345에서 1자리씩 읽기
scanf("%10s", s); // 문자열 길이 10씩 읽기
```
