---
path: "/algorithm/baekjoon_basic/math"
date: '2019-03-29'
title: "[백준] 강의노트 04. 수학 1"
description: 백준 알고리즘 강의 기초 4강 정리
image: ''
tags: ['백준', '알고리즘', 'C++', '강의노트', '수학']
---

### 수학
알고리즘 문제를 풀 때 필요한 수학 공식들

#### 나머지 연산
(A + B) % C = [(A % C) + (B % C)] % C
- 다이나믹 문제에서 주로 나온다
    - 경우의 수를 구해야 할 때 그 수가 너무 커서 범위가 overflow 되지 않기 위해 결과값에 나머지를 연산하게끔 한다

#### 최대공약수 (GCD)
Greatest Common Divisor
1. 2부터 min(A, B)까지 모든 정수로 나누어보는 방법: O(N)
2. __유클리드 알고리즘__ (Euclidean algorithm): __gcd(a, b) = gcd(b, a % b)__
```cpp
// 재귀함수로 구현한 유클리드 알고리즘
int gcd(int a, int b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
// 비 재귀방식으로 구현한 유클리드 알고리즘
int gcd(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}
```
- 최대공약수가 1인 두 수의 관계를 __서로소(Coprime)__라고 한다

#### 최소공배수 (LCM)
Least Common Multiplier
- 최대공배수를 응용하여 구할 수 있다: LCM * GCD = A * B
- __LCM = (A * B) / GCD__
- 최소공배수를 구할 때는 항상 결과값의 __범위를 고려해서 자료형을 선언__ 해야 한다.

#### 진법 변환 (Base Conversion)
1. __10진법 -> n진법 바꾸기__
    - 숫자가 __0이 될 때까지 나머지를 계속해서 구해 반대의 순서로 나열__ 하면 된다.
    - ex. 11 -> 3진법: 102
        - 11/3 = 3 ... 2 | 3/3 = 1 ... 0 | 1/3 = 0 ... 1 => 102

2. __n진법 -> 10진법 바꾸기__
    - __n진법으로 표현된 수의 k 자리의 수에 n^k을 곱하면서 더해__ 가면 된다.
    - ex. 3진법 수 102 -> 11
        - 2 * (3^0) + 0 * (3^1) + 1 * (3^2) => 11
    - 
```cpp
string N; int b; // 주어진 b진법의 수 N
int result;
// 
for (int i = 0; i < s.size(); i++) {
    // 
    result = result * b;
    // 
    if ('0' <= s[i] && s[i] <= '9) {
        result += s[i] - '0';
    } else {
        result += s[i] - 'A' + 10;
    }
}
```

####