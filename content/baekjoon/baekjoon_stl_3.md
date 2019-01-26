---
path: "/algorithm/baekjoon_STL/STL_container"
date: '2018-01-25'
title: "[백준] 프로그래밍 대회에서 사용하는 C++ STL 컨테이너"
description: 백준 알고리즘 강의 STL 3강과 4강 정리
image: ''
tags: ['백준', 'C++', '강의노트']
---
> Standard Template Library (STL)는 알고리즘, 컨테이너, 함수, 이터레이터로 이루어져 있으며 그 중 컨테이너를 정리.
> 순차 컨테이너: vector, list, deque 
> 연관 컨테이너: set, map

### 컨테이너 (Container)
- Pair, Tuple, Vector, Deque, List, Set, Map, Stack, Queue, Priority Queue, Bitset 등이 존재한다.

#### Pair
- 두 자료 T1과 T2를 묶어서 사용한다.
- Pair는 <utility> 헤더파일에 정의되지만, <algorithm>이나 <vector> 헤더파일에도 포함되어 있기 때문에 일반적으로 이 둘을 사용한다.
- 선언: `make_pair` 또는 생성자를 이용한다.
- 접근: `pair.first`와 `pair.second` 또는 `tie`를 이용한다.
```c++
#include <vector>

pair<int,int> p; // 선언이 따로 없으면 0과 0으로 초기화된다
p = make_pair(1, 2); // make_pair를 통해 선언과 값 설정
p = pair<int,int>(1, 2); // 생성자를 통해 선언과 값 설정
pair<int,int> p(1, 2); // 

p.first = 0;
p.second = 0;
tie(x, y) = p;

tie(a, b) = make_pair(b, a) // 이러한 문법을 통해 변수에 들어가는 순서를 바꾸는 것도 가능
```

#### Tuple
- 둘 이상의 여러 개의 자료를 묶어 사용할 수 있다.
- 선언: `make_tuple`을 이용한다.
- 접근: `get<>` 또는 `tie`를 이용한다.
```c++
#include <tuple>
tuple<int, int, int> t1 = make_tuple(1, 2, 3);

cout << get<0>(t1);     // get을 이용하여 접근
tie(x, y, z) = t1;      // tie를 통해 각 index에 접근
tie(x, y, ignore) = t1  // tie에 ignore를 함께 사용하여 특정 index에 접근
```

### 순차 컨테이너 (Sequential Container)
- 순서가 있는 컨테이너로 vector, list, deque가 존재한다. 

#### Vector
- 길이를 변경할 수 있는 배열이다.
- 선언: 길이를 직접 지정하거나, 특정 값으로 초기화하는 옵션도 가능하다.
- 삽입: `push_back`을 통해 가장 뒤쪽에 삽입, `insert`를 통해 원하는 자리에 원소를 삽입한다.
- 제거: `pop_back`을 통해 가장 뒤쪽을 제거, `erase`를 통해 원하는 자리의 원소를 제거, `clear`로 모든 원소 제거한다.
- 크기: `size`를 통해 벡터의 크기를 알아보고, `empty`를 통해 벡터가 비었는지 안 비었는지를 알아본다.
```c++
#include <vector>
vector<int> v;         // 길이가 0인 벡터 선언
vector<int> v(10);     // 길이가 10인 벡터 선언
vector<int> v(15, 1);  // 길이가 15이고 1로 모두 초기화된 벡터 선언
vector<int> v = {1, 2} // list를 이용한 벡터 선언

v.insert(인덱스, 값) // 인덱스에 값 추가
v.insert(인덱스, 개수, 값) // 인덱스에 값 개수만큼 추가
vv.insert(인덱스, v.begin(), v.end()) // 인덱스에 v 벡터의 값들을 모두 삽입

v.erase(v.begin() + 인덱스) // 인덱스 + 1 자리 제거
v.erase(v.begin() + 인덱스, v.begin() + 끝자리) // 인덱스 + 1부터 끝자리 바로 전까지 제거
```
- front와 back, 그리고 [] 또는 iterator를 통해 원소에 접근이 가능하다.
```c++
for (int i = 0; i < v.size(); i++) {
    v[i];
}
for (int &x : v) {
    x; // 인덱스 접근
    *x; // 값 접근
}

for(vector<int>::iterator it = v.begin(); it != v.end(); it++) {
    cout << *it;
}
for (auto it = v.begin(); it != v.end(); it++) {
    it - v.begin() // 인덱스 번호 접근
    *it // 원소 자체의 값에 접근
}
```
- vector가 pair 자료로 이루어지는 경우, emplace_back을 push_back과 동일하게 사용할 수 있다.
```c++
#include <vector>
vector<pair<int,int>> a;
a.emplace_back(1, 2);
a.push_back( {3, 4} );
```

#### Deque
- double-ended queue의 약자로 양쪽으로 삽입과 제거가 가능한 큐이다.
- 선언: <deque> 헤더파일을 포함시킨 후에 deque<자료> d를 통해 선언한다.
- 삽입: `push_front`와 `push_back`을 이용한다.
- 제거: `pop_front`와 `pop_back`을 이용한다.

#### List 
- 이중 연결 리스트(Doubly-linked list)를 의미한다.
- 사실 프로그래밍 대회에서는 잘 사용하지 않는 컨테이너에 해당된다.
- 삽입 & 제거: `insert`와 `erase`를 사용하여 O(1)로 연산이 가능하다.
- 정렬: list 자체에 내장된 `sort`함수를 사용해야 한다 (<algorithm>에 포함된 sort 함수를 사용하지 못함)
```c++
list<int> l = {2, 1, -1, 0, -2}; // 리스트 선언과 초기화

l.sort();               // 오름차순으로 정렬 {-2, -1, 0, 1, 2}
l.sort(greater<int>()); // 알고리즘 greater를 사용하여 내림차순으로 정렬
l.sort([](int &u, int &v) {    // compare 함수를 사용하여 절대값 기준으로 정렬
    return abs(u) < abs(v);
});
l.reverse();            // 현재 상태를 거꾸로 뒤집는다
```

### 연관 컨테이너 (Associative Containers)
- 순서가 없으나 Binary Search Tree로 구현이 되어 있는 자료구조들로 set과 map이 존재한다.

#### Set
- 집합을 나타낼 때 효과적인 자료구조이다. 
- 선언: <set> 헤더파일을 포함시킨 후에 set<자료> s를 통해 선언한다.
- 삽입: `insert`를 이용한다.
    - 내부가 정렬된 상태로 유지되며 중복된 값은 허용되지 않는다.
- 크기: `size`를 이용한다.
```c++
#include <set>
set<int> s;
set<int> s = {1, 1, 2, 3} // 중복된 값을 인정하지 않기에 {1, 2, 3}으로만 구성
s.insert(4);
```

#### Map
- 
```c++

```

#### Stack
#### Queue
#### Priority Queue
#### Bitset