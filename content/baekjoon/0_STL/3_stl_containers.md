---
path: "/baekjoon/STL/STL_container"
date: '2019-01-27'
title: "[백준] STL 03. 컨테이너"
description: 백준 알고리즘 강의 STL 3강과 4강 정리
image: ''
tags: ['백준', 'Cpp', 'STL']
---
> Standard Template Library (STL)는 알고리즘, 컨테이너, 함수, 이터레이터로 이루어져 있으며 그 중 컨테이너를 정리

### 컨테이너 (Container)
Pair, Tuple, Vector, Deque, List, Set, Map, Stack, Queue, Priority Queue, Bitset 등
- [순차 컨테이너](#순차-컨테이너-sequential-container): vector, list, deque
- [연관 컨테이너](#연관-컨테이너-associative-containers): set, map
- [컨테이너 어댑터](#컨테이너-어댑터-container-adaptors): stack, queue, priority_queue
- 그외: pair, tuple, bitset

#### # Pair
- 두 자료 T1과 T2를 묶어서 사용한다.
- Pair는 <utility> 헤더파일에 정의되지만, <algorithm>이나 <vector> 헤더파일에도 포함되어 있기 때문에 일반적으로 이 둘을 사용한다.
- __선언__: `make_pair` 또는 생성자를 이용한다.
```cpp
#include <vector>
pair<int,int> p;         // 선언이 따로 없으면 0과 0으로 초기화
p = make_pair(1, 2);     // make_pair를 통해 선언과 값 설정
p = pair<int,int>(1, 2); // 생성자를 통해 선언과 값 설정
pair<int,int> p(1, 2);   // 생성자를 이용한 또 다른 방법
```
- __접근__: `pair.first`와 `pair.second` 또는 `tie`를 이용한다.
```cpp
p.first = 0;
p.second = 0;
tie(x, y) = p;
tie(a, b) = make_pair(b, a) // 순서 바꿈
```

#### # Tuple
- 둘 이상의 여러 개의 자료를 묶어 사용할 수 있다.
- __선언__: `make_tuple`을 이용한다.
```cpp
#include <tuple>
tuple<int, int, int> t1 = make_tuple(1, 2, 3);
```
- __접근__: `get<>` 또는 `tie`를 이용한다.
```cpp
cout << get<0>(t1);     // get을 이용하여 접근
tie(x, y, z) = t1;      // tie를 통해 각 index에 접근
tie(x, y, ignore) = t1  // tie에 ignore를 함께 사용하여 특정 index에 접근
```

### 순차 컨테이너 (Sequential Container)
순서가 있는 컨테이너로 vector, list, deque, array, forward_list가 존재한다. 

#### # Vector
- 길이를 변경할 수 있는 배열이다.
- __선언__: 길이를 직접 지정하거나, 특정 값으로 초기화하는 옵션도 가능하다.
```cpp
#include <vector>
vector<int> v;         // 길이가 0인 벡터 선언
vector<int> v(10);     // 길이가 10인 벡터 선언
vector<int> v(15, 1);  // 길이가 15이고 1로 모두 초기화된 벡터 선언
vector<int> v = {1, 2} // list를 이용한 벡터 선언
```
- __접근__: `front()`와 `back()`, 그리고 `[]` 또는 iterator (`*v.begin()`, `*v.end()`)를 이용한다.
- __삽입__: `push_back()`을 통해 가장 뒤쪽에 삽입, `insert()`를 통해 원하는 자리에 원소를 삽입한다.
```cpp
v.insert(v.begin() + 인덱스, 값)  // 인덱스에 값 추가 (이터레이터 사용)
v.insert(it, 개수, 값)            // 이터레이터 자리에 값 개수만큼 추가
v.insert(it, v.begin(), v.end()) // 이터레이터에 v 벡터의 값들을 모두 삽입
```
- __삭제__: `pop_back()`을 통해 가장 뒤쪽을 삭제, `erase()`를 통해 원하는 자리의 원소를 제거, `clear()`로 모든 원소 삭제한다.
```cpp
v.erase(v.begin() + 인덱스)                    // 인덱스 + 1 자리 제거
v.erase(v.begin() + 인덱스, v.begin() + 끝자리) // 인덱스 + 1부터 끝 바로 전까지 제거
```
- __크기__: `size()`를 통해 벡터의 크기를 알아보고, `empty()`를 통해 벡터가 비었는지 안 비었는지를 알아본다.
- __순회__: 인덱스 (size와 `[]`의 조합) 또는 iterator (`begin` & `end`의 조합)을 이용한 다양한 방식이 있다.
```cpp
// 순회접근
    for (int i = 0; i < v.size(); i++) {
        v[i];
    }
    for (int &x : v) {
        x;  // 인덱스 접근
        *x; // 값 접근
    }
    // 이터레이터 사용하여 순회 접근
    for(vector<int>::iterator it = v.begin(); it != v.end(); it++) {
        cout << *it;
    }
    for (auto it = v.begin(); it != v.end(); it++) {
        it - v.begin(); // 인덱스 번호 접근
        *it;            // 원소 자체의 값에 접근
    }
```
- cf) vector가 pair 자료로 이루어지는 경우, `emplace_back`을 `push_back`과 동일하게 사용할 수 있다.
```cpp
vector<pair<int,int>> a;
a.emplace_back(1, 2);
a.push_back( {3, 4} );
```

#### # Deque
- double-ended queue의 약자로 양쪽으로 삽입과 제거가 가능한 큐이다.
- __선언__: <deque> 헤더파일을 포함시킨 후에 deque<자료> d를 통해 선언한다.
- __삽입__: `push_front`와 `push_back`을 이용한다.
- __삭제__: `pop_front`와 `pop_back`을 이용한다.

#### # List 
- 이중 연결 리스트(Doubly-linked list)를 의미한다.
- 사실 프로그래밍 대회에서는 잘 사용하지 않는 컨테이너에 해당된다.
```cpp
// 리스트 선언과 초기화
list<int> l = {2, 1, -1, 0, -2};
```
- __삽입__: `push_back`과 `insert`을 이용한다: O(1)
- __삭제__: `erase`를  이용한다: O(1)
- __정렬__: list 자체에 내장된 `sort`함수를 사용해야 한다 (< algorithm>에 포함된 sort 함수를 사용하지 못함)
```cpp
l.sort();                      // 오름차순으로 정렬 {-2, -1, 0, 1, 2}
l.sort(greater<int>());        // 알고리즘 greater를 사용하여 내림차순으로 정렬
l.sort([](int &u, int &v) {    // compare 함수를 사용하여 절대값 기준으로 정렬
        return abs(u) < abs(v);
});
l.reverse();            // 현재 상태를 거꾸로 뒤집는다
```

### 연관 컨테이너 (Associative Containers)
__순서가 없는 자료구조__ 들로 set, multiset, map, multimap이 존재한다.
- Binary Search Tree로 구현이 되어 있어 __삽입, 삭제, 탐색이 모두 O(logN)__ 이 걸린다.

#### # Set
- 집합을 나타낼 때 효과적인 자료구조이다. 
- __선언__: <set> 헤더파일을 포함시킨 후에 set<자료> s를 통해 선언한다.
```cpp
#include <set>
set<int> s;
set<int> s = {1, 1, 2, 3} // 중복된 값을 인정하지 않기에 {1, 2, 3}으로만 구성
```
- __접근__: 순서가 없기 때문에 []나 begin() + i와 같은 표현이 불가능하며, 대신 iterator를 이용한다.
- __삽입__: `insert`를 이용하여 내부가 정렬된 상태로 유지된다 (중복된 값은 허용되지 않기에 삽입 성공 실패 여부와 더불어 삽입 위치를 return한다)
```cpp
// 삽입 (정렬된 상태를 유지한다)
pair<set<int>::iterator, bool> result = s.insert(4); // 삽입위치와 성공여부를 return
```
- __삭제__: `erase`를 이용한다.
```cpp
// 삭제 (이터레이터로 접근하여 삭제)
s.erase(s.begin()); // 첫 번째 인덱스 삭제
```
- __크기__: `size`를 이용한다.
- __탐색__: `find`를 사용하여 set에 어떤 값이 들어가있는지 없는지, 있다면 위치가 어디인지를 알 수 있고, `count`를 이용하는 방법도 있다.
```cpp
    auto it = s.find(5); // 없기 때문에 end()를 호출
    // 일일히 find()를 하기보다는 수가 있는지 없는지 (1 or 0) 확인이 효율적
    for (int i = 1; i < 9; i++) {
        s.count(i);      
    }
```
- __순회__: iterator와 begin & end 조합을 사용한다 (순서가 없기 때문에 begin() + i와 같은 표현은 불가능)
```cpp
    // 순회접근 (it++ 연산이 O(logN)으로 총 O(NlogN)이 걸림)
    for (auto it = s.begin(); it != s.end(); it++) { 
        *it;
    }
    for (auto x : s) {
        x;
    }
```

#### # Multiset
- set과 완벽하게 동일하나 같은 수 여러 개를 저장할 수 있는 점이 추가된 자료구조이다.

#### # Map
- key와 value로 이루어진 자료구조이다.
- __선언__: <map> 헤더파일을 포함시킨 후에 map<자료> m를 통해 선언한다.
```cpp
#include <map>
map<int, int> m;
map<int, string> m = { {1, "슬라임"}, {2, "드래곤"}};
```
- __삽입__: `[key값]`을 이용하여 value를 쌍으로 삽입한다.
- __삭제__: `erase(key값)`을 이용한다
- __크기__: `size`를 이용한다.
- __접근__: `[key값]`을 이용하여 접근할 수 있다 (단, 없는 경우에는 key값을 생성하는 문제 조심!) pair형태처럼 first와 second로도 접근 가능하다.
- __탐색__: 자료가 있는지 없는지 확인하는 경우에는 [key값]보다는 `count`를 사용하는 방법이 더 알맞다.
```cpp
    // 접근
    cout << m[1]; // "슬라임"이 출력
                  // 존재하지 않는 경우 0을 반환한다 (트리구조이기에 O(logN)이 걸림)
    // 순회 접근
    for (int i = 1; i <= 10; i++) {
        if (m[i]) {...} // 없는 경우에는 key값을 생성하는 문제가 생김 
    }
    for (int i = 1; i <= 10; i++) {
        if (m.count(i)) {...} // 자료가 있는지 없는지 체크는 이 방법이 더 효율적
    }
```

### 컨테이너 어댑터 (Container Adaptors)
__순차 컨테이너를 변형한 자료구조__ 로 stack, queue, priority_queue가 존재한다.

#### # Stack
- 한쪽으로만 삽입과 삭제가 가능한 자료구조이다. 
- 기본적으로, deque를 형태로 구현되었으나, list 형태를 명시하여 구현도 가능하다.
- __선언__: <stack> 헤더파일을 포함시킨 후에 stack<자료> s를 통해 선언한다.
- __접근__: `top`을 사용하여 O(1)로 연산이 가능하다.
- __삽입__ & __삭제__: `push`와 `pop`를 사용하여 O(1)로 연산이 가능하다.
- __크기__: `size`를 통해 크기를 알아보고, `empty`를 통해 스택이 비었는지 안 비었는지를 알아본다.
```cpp
#include <stack>
stack<int> s;
s.push(1); s.push(2); s.push(3); // 차례대로 쌓이게끔 삽입
cout << s.top();                 // 제일 위의 데이터를 출력
s.pop();                         // 제일 위의 데이터를 삭제 
```
- pair 자료형을 사용시 emplace를 사용할 수도 있다.

#### # Queue
- 한쪽으로 삽입하고 반대쪽으로 삭제가 가능한 자료구조이다. 
- 기본적으로, deque를 형태로 구현되었으나, list 형태를 명시하여 구현도 가능하다.
- __선언__: <queue> 헤더파일을 포함시킨 후에 queue<자료> q를 통해 선언한다.
- __접근__: `front`와 `back`을 사용하여 O(1)로 연산이 가능하다.
- __삽입__ & __삭제__: `push`와 `pop`를 사용하여 O(1)로 연산이 가능하다.
- __크기__: `size`를 통해 크기를 알아보고, `empty`를 통해 스택이 비었는지 안 비었는지를 알아본다.
```cpp
#include <queue>
queue<int> q;
q.push(1); q.push(2); q.push(3);        // 차례대로 쌓이게끔 삽입
cout << s.front() << " : " << s.back(); // 제일 앞과 뒤의 데이터를 출력
s.pop();                                // 제일 앞의 데이터를 삭제 
```
- pair 자료형을 사용시 emplace를 사용할 수도 있다.

#### # Priority Queue
- 큐와 똑같지만 가장 우선순위가 제일 높은 것(ex.숫자가 가장 큰 정수)이 먼저 나오는 자료구조이다.
- 대표적으로 __priority heap (최대힙)의 형태로 구현__ 된다.
- 삽입 & 삭제: `push`와 `pop`을 이용한다.
- 접근: 큐이지만 `top`을 사용하여 가장 큰 수가 위로 올라온다.
- __최대힙__: 내림차순으로 정렬되어 삽입이 되고, 큰 순서대로 나온다.
```cpp
    vector<int> v = {1, 3, 2};
    // 벡터에 있는 원소 우선순위 큐에도 삽입 (최대힙)
    priority_queue<int> q1;
    for (int x : v) { 
        q1.push(x); // {3, 2, 1} 큰 순서대로 정렬이 됨
    } 
```
- __최소힙__: `priority_queue<자료형, vector<자료형>, greater<자료형>>`으로 선언하면 된다.
```cpp
    // 작은 순서대로 정렬이 됨 (최소힙)
    priority_queue<int, vector<int>, greater<int>> q2; 
    for (int x : v) { 
        q2.push(x); 
    }
```

#### # Bitset
- vector<bool>와 같은 형태의 자료구조이다.
```cpp
bitset<8> b1 ; // 0, 0, 0, 0, 0, 0, 0, 0
bitset<10> b2(88); // 0, 0, 0, 1, 0, 1, 1, 0, 0, 0
bitset<8> b3("10110"); // 0, 0, 0, 1, 0, 1, 1, 0
```
- __접근__: `[]` 또는 `test`를 이용한다.
- __값 바꾸기__: 
    - `set`으로 1로 바꾸기
    - `reset`으로 0으로 바꾸기
    - `flip`으로 현재 인덱스의 값을 뒤집기
- __값 확인__: `all`로 모든 bit가 1인지를 확인하고, `any`로 1인 bit가 하나라도 존재하는지를 확인하고, `none`으로 모든 bit가 0인지를 확인할 수 있다.
- __개수 세기__: `count`로 1인 bit의 개수를 센다.
- __bit 연산__: `&`, `|`, `^`, `~`, `<<`, `>>`의 연산이 가능하다.
```cpp
cout << (b1 & b2); // AND 연산
cout << (b1 | b2); // OR 연산
cout << (b1 ^ b2); // XOR 연산
cout << ~(b1);     // NOT 연산
cout << (b1 << 2); // SHIFT LEFT 연산
cout << (b1 >> 2); // SHIFT RIGHT 연산
```