---
path: "/algorithm/baekjoon_STL/STL_container"
date: '2018-01-25'
title: "[백준] 프로그래밍 대회에서 사용하는 C++ STL 컨테이너"
description: 백준 알고리즘 강의 STL 3강 정리
image: ''
tags: ['백준', 'C++', '강의노트']
---
> Standard Template Library (STL)는 알고리즘, 컨테이너, 함수, 이터레이터로 이루어져 있으며 그 중 컨테이너를 정리.

### 컨테이너 (Container)
- Pair, Tuple, Vector, Deque, List, Set, Map, Stack, Queue, Priority Queue, Bitset

#### Pair
- 두 자료 T1과 T2를 묶어서 사용한다.
- Pair는 <utility> 헤더파일에 정의되지만, <algorithm>이나 <vector> 헤더파일에도 포함되어 있기 때문에 일반적으로 이 둘을 사용한다.
- 선언은 `make_pair` 또는 생성자를 이용하여 만들고 `pair.first`와 `pair.second`를 통해 자료에 각각 접근한다.
```c++
#include <vector>

pair<int,int> p1; // 선언이 따로 없으면 0과 0으로 초기화된다
p1 = make_pair(1, 2); // make_pair를 통해 선언과 값 설정
p1 = pair<int,int>(1, 2); // 생성자를 통해 선언과 값 설정
pair<int,int> p1(1, 2); // 

p1.first = 0;
p1.second = 0;
```

#### Tuple
- 둘 이상의 여러 개의 자료를 묶어 사용할 수 있다.
- `make_tuple`으로 선언하고 get을 이용하여 인덱스로 접근한다.
```c++
#include <tuple>
tuple<int, int, int> t1 = make_tuple(1, 2, 3);
cout << get<0>(t1);     // get을 이용하여 접근
```


#### Vector
#### Deque
#### List
#### Set
#### Map
#### Stack
#### Queue
#### Priority Queue
#### Bitset