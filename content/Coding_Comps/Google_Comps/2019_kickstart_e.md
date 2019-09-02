---
date: '2019-08-28'
title: "Google Kick Start 2019 - Round E"
description: Google Kick Start 2019 round E 문제 풀이
tags: ['코딩 대회', '알고리즘']
---
> WTM Scholarship Retreat 인터뷰 세션을 위해 풀어가야 하는 Kickstart E round 문제 풀이

### 1. Cherries Mesh
n개의 체리와 m개의 블랙 설탕 막대기가 주어졌을 때, 모든 체리가 이어지면서 설탕의 총량이 최소인 경우를 구하기
(단, m개의 블랙 설탕 막대기로 이어졌음이 명시되지 않는 경우에는 대신 레드 설탕 막대기로 이어지며, 블랙은 1단위의 설탕을, 레드는 2단위의 설탕을 담고 있음을 가정한다)

#### 문제 분석
가중치가 1 또는 2인 그래프에서 최소 스패닝 트리(minimum spanning tree)를 만들어 가중치의 합을 리턴하는 문제이다.
1. 가중치가 1인 선을 중심으로 일단 먼저 가능한 최소


#### 내가 푼 방법
time: O() & space O(n)
- 

####
union-find


### 2. Code-Eat Switcher

### 3. Street Checkers

### What I learned
- 1번 문제가 최소 스패닝 트리 문제임을 파악하였으나, 관련 알고리즘을 어렴풋이만 알아 구현하기가 어려운 문제가 있었다.
    - 각 정점마다 연결된 간선들을 일일이 체크하고, 더 이상 연결이 불가능할 경우 다시 방문하지 않은 정점을 체크하는 방식을 어떻게 구현해야 할지 계속 헤맸다. 우선순위 큐를 이용하면 될 것을....