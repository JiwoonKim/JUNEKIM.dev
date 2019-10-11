---
date: '2019-08-21'
title: "[알고리즘] ??. 백트래킹"
description: Data Structures in C++ - Array 정리
tags: ['알고리즘', 'Cpp']
---
> 알고리즘 중 백트래킹 소개

### 백트래킹 (Backtracking)
동일한 데이터 타입이 연속적으로 저장되는 자료구조 (sequence of same data type)
- 이전상태를 기록하고 다시 추적하여 되돌아가는데 사용
    - 스택을 활용 (스택 or 호출 스택)

n 중첩 for 문 (입력값 n만큼 for문을 돌려야 하는 경우) -> 재귀함수 사용하기
-> 백트래킹할 때 많이 쓰임

an algorithm for finding all solutions by exploring all potential candidates. If the solution candidate turns to be not a solution (or at least not the last one), backtracking algorithm discards it by making some changes on the previous step, i.e. backtracks and then try again.
