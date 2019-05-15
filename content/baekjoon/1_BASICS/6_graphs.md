---
path: "/algorithm/baekjoon_basic/graph"
date: '2019-05-03'
title: "[백준] 강의노트 06. 그래프 1"
description: 백준 알고리즘 강의 기초 6강 정리
image: ''
tags: ['백준', '알고리즘', 'C++', '강의노트', '그래프']
---

### 그래프 (Graph)
__정점과 간선으로 이루어진 자료구조의 일종__
- __G = (V, E)__
    - 그래프는 정점 집합과 간선 집합으로 이루어졌다고 표현함
- V = 정점 (node, vertex)
- E = 간선 (edge)
    - 정점 사이를 연결; 정점간의 관계를 나타냄

#### 경로 & 사이클 
- __경로 (Path)__: __정점 A에서 다른 정점 B로 가는 경로__ 이다.
- __사이클 (Cycle)__: __정점 A에서 다시 A로 돌아오는 경로__ 이다. (시작점 == 도착점)

#### 단순 경로 & 단순 사이클
Simple Path & Simple Cycle
- 경로/사이클에서 같은 정점을 두 번 이상 방문하지 않는 경로/사이클이다.
- 특별한 말이 없으면, __일반적으로 사용하는 경로와 사이클은 단순 경로와 사이클을 말한다__.

#### 방향
- __방향 있는 그래프 (Directed Graph)__: 간선에 방향이 있는 그래프이다.
- __양방향 그래프 (Bidirectional Graph)__: 
    - 특별히 정해진 방향이 없는 그래프는 양방향이라고 이해
    - __문제를 풀거나 그래프를 저장할 때는 양방향 그래프를 모두 방향 그래프로 바꾸어 저장함__

#### 간선
- 간선이 여러 개인 경우 (Multiple Edge): 최단거리/비용을 구할 때면 값이 작은 것을 선택하면 된다.
- 간성의 양 끝 점이 같은 경우 (Loop): 

#### 가중치 (Weight)
- __A에서 B로 이동하는 거리, 시간, 비용을 나타낸다__.
- 가중치가 따로 표시가 되지 않는 경우, 모두 1이라고 생각하면 된다.

#### 차수 (Degree)
- __정점과 연결되어 있는 간선의 개수__ 이다.
- 방향이 있는 그래프의 경우, 들어오는 간선의 개수를 in-degree라고 하고 나가는 간선의 개수를 out-degree라고 한다.

### 그래프를 이용하여 문제풀기
- __문제를 그래프로 모델링__ 하여 최단경로를 찾거나 경우의 수를 구하는 식으로 문제를 바꾸어 푼다.
- 즉, 문제를 그래프 문제로 바꾸어 푸는 것이다.

### 그래프의 표현
그래프의 표현은 결국 __간선을 저장하는 방식과 같다__
- 정점: V개
    - ex. {1, 2, 3}
- 간선: 쌍으로 저장
    - ex. {(1,2), (1,3)}
- __일반적으로 인접 리스트를 사용한다__. 
    - 간선이 여러 개인 경우, 인접 행렬보다는 인접 리스트를 더 사용하는 것이 효율적임
- __어떤 특별한 경우에만, 간선 리스트를 사용하기도 한다__.

#### 인접 행렬 (Adjacency Matrix)
- V x V 크기의 __이차원 배열로 표현__
    - (i, j) 간선이 있으면, A[i][j] = 1 (없으면, A[i][j] = 0)
    - 가중치가 있다면 A[i][j] = 가중치
- 양방향 그래프일 경우, 행렬이 i == j를 기준으로 대칭을 이룬다.
- 존재하지 않은 간선도 표현하기 때문에 비효율적인 측면이 존재한다.
- 공간 복잡도: O(V^2)

#### 인접 리스트 (Adjacency List)
- __링크드 리스트를 이용하여 구현__
- A[i] = i와 연결된 정점들의 링크드 리스트
    - 실제로 간선이 저장되는 형태로 이해하면 됨 
    - ex. A[1] = {2, 5} => 간선 (1, 2), (1 ,5)
- 가중치가 있다면, 정점과 가중치를 pair로 저장
- 단, 링크드 리스트를 구현하는데 시간이 오래 걸리기 때문에 __주로 vector과 같이 길이를 변경할 수 있는 배열을 이용하여 구현__
- 공간 복잡도: O(E)
```cpp
// vector<int> a를 총 n개 선언; 이차원 배열
vector<int> edges[n + 1];
edges[v1].push_back(v2); // (v1, v2) 저장
edges[v2].push_back(v1); // (v2, v1) 저장
```

#### 간선 리스트 (Edge List)
- 만약 STL을 사용할 수 없을 때는,
- 배열을 이용하여 간선을 모두 저장하는 간선 리스트로 그래프를 저장한다.
- e[i][2] = 간선의 개수 i만큼 저장된 간선들
    - e[0][0] = 1, e[0][1] = 2 => 간선 (1, 2)
    - e[i]의 e[i][0]이 작은 숫자부터 정렬하여 사용해야 함
- cnt[i] = 정점 i에 연결된 마지막 간선의 번호
    - cnt[e[i][0]] += 1을 해서 구하면 됨
- i번 정점과 연결된 간선은 cnt[i-1]부터 (cnt[i] - 1)까지 구하면 된다.

### 그래프 탐색
- 목적: __모든 정점을 한 번씩만 방문하는 것!__
- DFS는 최대한 깊숙히 많이 가는 방법이고, BFS는 최대한 넓게 가는 방법이다.

#### DFS
깊이 우선 탐색
- __스택을 사용__ 한다.
- 갈 수 있는만큼 최대한 많이 가고, 갈 수 없으면 이전 정점으로 돌아간다.
- 방법:
    - check 배열을 사용하여 방문한 경우와 방문하지 않은 경우를 확인하며
    - 방문하는 경우에 스택에 push하여 경로를 기록
    - 더 이상 갈 수 있는 길이 없으면 스택에서 pop하여 경로를 되돌아감
    - 스택에 비어질 때까지 pop를 하고 모든 check 배열이 방문으로 체크되었는지를 확인
- __구현__: 재귀함수를 사용하여 구현
        - bcuz 이미 스택을 활용하기 때문에 사용하기 용이함
- __인접 행렬을 이용한 구현__: O(V^2)
```cpp
// x를 방문
void dfs(int x) {
    // 방문을 체크
    check[x] = true;
    // 경로 출력
    printf("%d", x);
    // 방문하지 않은 정점으로 이동할 수 있다면 (간선 존재),
    for (int i  = 1; i <= n; i++) {
        if (a[x][i] == 1 && check[i] == false) {
            // 다음 정점으로 이동
            dfs(i);
        }
    }
}
// 인접 행렬을 사용하였기 때문에 
// a[x][i]는 간선 (x, i)의 존재여부를 나타냄
```
- __인접 리스트를 이용한 구현__: O(V + E)
```cpp
void dfs(int x) {
    // 방문을 체크
    check[x] = true;
    // 경로 출력
    printf("%d", x);
    // 해당 정점과 연결된 모든 간선에서
    for (int i = 0; i < a[x].size(); i++) {
        int y = a[x][i];
        // 방문하지 않은 정점으로 이어지면
        if (check[y] == false) {
            // 다음 정점으로 이동
            dfs(y);
        }
    }
}
```

### BFS
너비 우선 탐색
- __큐를 사용__ 한다.
- 모든 가중치가 1인 경우, 최단거리를 찾는 문제에서 주로 사용한다.
- 방법:
    - __현재 정점에서 갈 수 있는 모든 정점을 큐에 push하면서 check 배열에 방문으로 체크__ (push하면서 check!)
    - 그 다음, 큐에서 다음 정점으로 이동하고 또 거기서 갈 수 있는 모든 정점을 또 큐에 push
    - 방문하지 않은 정점이 없다면 큐에서 해당 정점을 pop하고 큐의 다음 정점으로 이동
- 구현: 재귀함수보다는 __루프를 사용하여 반복적으로 구현__
- __인접 행렬을 이용한 구현__: O(V^2)
```cpp
// 큐 선언
queue<int> q;
// 시작 정점부터 큐에 push하고 체크
q.push(start);
check[start] = true;
// 큐가 빌 때까지,
while (!q.empty()) {
    // 제일 앞의 정점을 pop하고
    int x = q.front(); 
    q.pop()
    printf("%d", x);
    // 방문하지 않은 모든 연결된 정점을 push 및 체크
    for (int i = 1; i <= n; i++) {
        if (a[x][i] == 1 && check[i] == false) {
            check[i] = true;
            q.push(i);
        }
    }
}
```
- __인접리스트를 이용한 구현__: O(V + E)
```cpp
queue<int> q;
// 시작 정점부터 큐에 push하고 체크
q.push(start);
check[start] = true;
// 큐가 빌 때까지, 
while (!q.empty) {
    int x = q.front();
    q.pop();
    printf("%d", x);
    // 방문하지 않은 모든 연결된 정점을 push 및 체크
    for (int i = 0; i < a[x].size(); i++) {
        int y = a[x][i];
        if (check[y] == false) {
            q.push(y);
            check[y] = true;
        }
    }
}
```

#### DFS vs. BFS
1. DFS는 최대한 깊숙히 많이 가는 방법이고, BFS는 최대한 넓게 가는 방법이다.
2. __DFS는 스택을 사용__ 하고 __BFS는 큐를 사용__ 한다.
3. __DFS는 각 정점에 이르렀을 때 해당 정점 check를 하고__, __BFS는 각 정점에서 다음 정점을 큐에 push하면서 다음 정점을 check__ 한다.
    - DFS: 해당 정점 check
    - BFS: 다음 정점 미리 check (해당 정점에서 자기 자신 check X)