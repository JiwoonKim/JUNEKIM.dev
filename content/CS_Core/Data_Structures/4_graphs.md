---
date: '2019-08-18'
title: "[자료구조] 04. 그래프"
description: Data Structures in C++ - graph 정리
tags: ['자료구조', 'Cpp']
---
> 비선형적으로 그물망처럼 자료를 서로 연결하는 형태로 저장하는 그래프 소개

### 그래프
동일한 데이터 타입의 노드들을 정점으로 서로 간선으로 이어 저장하는 자료구조

그래프 __G = (V, E)__: 정점 집합과 간선 집합으로 이루어진다
- __정점__ (__V__): 자료가 실제로 저장하는 노드 (node, vertex)
- __간선__ (__E__): 자료들 사이의 관계를 나타내기 위해 자료 간을 잇는 선 (edge)
- cf) 차수 (degree): 해당 정점에 연결되어 있는 간선의 개수

#### 그래프는 어디에 사용되는가

#### 그래프의 종류
- __방향__ (O / X): 유향 그래프 (directed graph), 무향 그래프 (undirected graph)
- __가중치__ (O / X): 가중 그래프 (weighted graph), 비가중 그래프 (unweighted graph)
- __순환__ (O / X): 순환 그래프 (cyclic graph), 비순환 그래프 (acyclic graph)

* legal coloring ( adjacent nodes same color X )

### 그래프의 표현 방식
간선을 어떤 방식으로 저장하는가에 따라 그래프를 표현할 수 있는 방식이 3가지로 나누어진다. 일반적으로 인접 리스트를 가장 많이 사용하며 그 외에 인접 행렬, 그리고 특별한 경우에 간선 리스트를 사용한다. 

#### 1. 인접 리스트 (Adjacent List)
각 노드마다 연결된 간선들을 리스트의 형태로 저장하는 가장 일반적인 그래프 표현 방식

#### 2. 인접 행렬 (Adjacent Matrix)
노드의 개수를 바탕으로 (N x N) 행렬로 각 간선의 여부를 저장하는 그래프 표현 방식

#### 3. 간선 리스트 (Edge List)


* Edge Cases
* node w/ no edges (bi-composites)
* cycles
* loop (cycle only itself)