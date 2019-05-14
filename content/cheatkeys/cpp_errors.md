---
path: "/cheatkeys/cpp"
date: '2019-05-12'
title: "C++ Common Errors 치트키"
description: C++ Common Errors 정리
image: ''
tags: ['치트키']
---
> C++로 프로그래밍하면서 자주 하는 오류 사항들 체크 리스트

### Char 또는 String Input
- char 또는 string 입력값의 경우, 형식의 영향을 많이 받기 때문에 (빈칸 또는 새로운 줄 또한 읽어들임)
- __가능하면 `cin`과 `cout`으로 모두 해결할 것!__

#### Variable-sized 배열 값 초기화
```cpp
cin >> n >> m;
int arr[n][m] = {0,}; 
// 모든 값이 0으로 초기화되는데 실패함
// 단순히 1차원 배열이면 0으로 초기화되나, 그 이상은 실패
```
- __variable sized arrays__ -> __use vectors__
    - arrays can only be declared with constant size (strictly speaking)
    - cannot use variables to initialize the size of an array (even if you can declare them, they will fail in initilizing like the example above)
    - use `vector< vector<int> > v(rows, vector<int>(columns))` instead
    - or use `memset(v, 0, sizeof(v))` for initializing chars or -1 or 0 (not for other numbers)