---
path: "/algorithm/baekjoon_basic/dynamic_programming_1"
date: '2018-02-03'
title: "[백준] 강의노트 03. 다이나믹 프로그래밍 1"
description: 백준 알고리즘 강의 기초 3강 정리
image: ''
tags: ['백준', '알고리즘', 'C++', '강의노트', '다이나믹 프로그래밍']
---

### 다이나믹 프로그래밍 (Dynamic Programming)
- __큰 문제를 작은 부분 문제로 나눠서 푸는 알고리즘__.
- dynamic은 사실 아무런 부여 의미가 없음 (멋있어서 이름이 지어졌다는 것은 안 비밀..!)
- 두 가지 속성을 이해해야 다이나믹 프로그래밍으로 문제를 풀 수 있다.
    1. Overlapping Subproblem: 작게 나누어진 부분 문제들이 서로 겹쳐야 한다.
    2. Optimal Substructure: 같은 문제를 구할 때마다 정답이 일정하고 문제의 정답을 작은 문제의 정답으로부터 구할 수 있다.
- 작은 문제들의 정답 기록해 놓고 (Memoization) 다시 사용하는 방법을 이용한다.


#### 피보나치 수 문제로 동적계획 알고리즘 이해하기
- F0 = 0, F1 = 1, FN = FN-1 + FN-2 (N >= 2)
- 문제: N번째 피보나치 수 구하기
- 작은 문제: N-1번째 피보나치 수 구하기, N-2번째 피보나치 수 구하기
- 문제의 정답을 작은 문제의 정답을 합하는 것으로 구할 수 있다.
```c++
int memo[100];
int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    else {
        // memoriazation을 통해 
        memo[n] = fibonacci(n-1) + fibonacci(n-2);
        return memo[n];
    }
}
```