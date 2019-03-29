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
- 최대공약수가 1인 두 수의 관계를 __서로소(Coprime)__라고 한다

#### 최소공배수 (LCM)
Least Common Multiplier