---
date: '2019-06-08'
title: "[자료구조] 0. 자료구조 개요"
description: Data Structures in C++ - Complexity 정리
tags: ['자료구조', 'Cpp']
---

### 복잡도 (Complexity)
알고리즘의 효율성 및 성능을 분석하는 척도 (approximate measure of the efficiency of an algorithm)
- __시간 복잡도__ (__Time Complexity__): 입력값에 비례하여 런타임이 얼마나 걸리는지
- __공간 복잡도__ (__Space Complexity__): 입력값에 비례하여 공간이 얼마나 더 필요한지
    - 일반적으로, 추가적으로 더 필요한 공간을 계산한다 (__extra space 측면__ 에서 분석할 것)

#### 점근 표기법 (Asymptotic Notation)
복잡도를 근사치로 표현하는 표기법
- __O(n)__: performance <= n
- __Θ(n)__: performance = n
- __Ω(n)__: performance >= n

일반적으로 빅오(big-O)로 알고리즘 분석을 하지만, 여기서 big-O는 엄연히 말하자면 사실은 세타(Θ) 표기법을 사용하고 있다. 즉, 빅오라고 쓰고 세타라고 읽는 것과 같다.

### 자료구조 개요
자료구조란 
필요한 이유는 목적에 맞춰 시간과 공간을 효율적으로 사용하기 위함이다.
- 선형 자료구조 (Linear Data Structures): 배열, 링크드 리스트, 스택, 큐
- 비선형 자료구조 (Non-linear Data Structures): 트리 (이진 트리, 이진 탐색 트리 (BST)), 그래프, 힙 (이진 힙)

### Array vs. Linked List
| operation | Array | Linked List  |
|:----------:|:-----:|:-------------:|
| 선언 (메모리 할당) | fixed size \n (fixed block of memory based on size declared) | resizable \n (can access or release memory based on addition and deletion of elements) |
| access | O(1) | O(n) |
| append / prepend | O(n) | O(1) |
| delete (front/back) | O(n) |O(1) |

참고

https://wayhome25.github.io/cs/2017/04/17/cs-18/
