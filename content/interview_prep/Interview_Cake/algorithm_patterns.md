---
path: "/interviewprep/interviewcake/keypoints"
date: '2019-05-16'
title: "Interview Cake - Untangling Algorithms"
description: Algorithm Patterns
image: ''
tags: ['Interviewcake', '인터뷰', '알고리즘']
---
> Interview Cake 문제 풀면서 파악한 알고리즘 패턴 및 치트키 정리

### Untangling Stucks
cheatkeys to gaining momentum in solving algorithm problems

####  1. Solve a simpler version of the problem 
- __to see if that gets us closer to a solution for the original problem__
- ex. reverse words inplace (1-3)문제를 풀기 위해 reverse string inplace (1-2)를 풀기 위한 방법을 먼저 사용해보고, 혹시 이를 통해 문제를 해결하기 위한 실마리를 찾을 수 있는지 살펴보는 것

#### 2. Short-circuit evaluation
when two or more boolean expressions connected with AND are evaluated && the first expression is false, program does not even check the next expression
- EDGE CASE를 거르는데 유용하게 쓰임
- ex. merge two arrays (1-4) 또는 single riffle shuffe (1-5)