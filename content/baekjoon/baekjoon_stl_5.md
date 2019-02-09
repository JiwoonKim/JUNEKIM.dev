---
path: "/algorithm/baekjoon_STL/STL_algorithm"
date: '2018-01-28'
title: "[백준] 프로그래밍 대회에서 사용하는 C++ STL 알고리즘"
description: 백준 알고리즘 강의 STL 6강 정리
image: ''
tags: ['백준', 'C++', '강의노트', 'STL']
---
> Standard Template Library (STL)는 알고리즘, 컨테이너, 함수, 이터레이터로 이루어져 있으며 그 중 알고리즘을 정리.

### 알고리즘 (Algorithm)
- Count, Find, Fill, Reverse, Rotate, Swap, Unique, Sort, Stable_sort, Binary_search, Lower_bound, Upper_bound, Min, Max, Min_element, Max_element, Next_permutation

#### Count
- `count(begin, end, value)`: [begin, end)에 포함되어 있는 원소 중에서 value의 개수를 찾는다.
- `count_if(begin, end, p)`: [begin, end)에 포함되어 있는 원소 중에서 조건 p에 해당하는 것에 개수를 찾는다.
- 시간복잡도: O(N)
```cpp
#include <vector>
#include <algorithm>
vector<int> v = {1, 2, 2, 3, 4, 5};
for (int i = 1; i <= 5; i++) { 
    cout << i << "의 개수: " << count(v.begin(), b.end(), i);
}
int even = count_if(v.begin(), b.end(), [](int x) {
    return x % 2 == 0;
});
cout << "짝수의 개수: " << even;
```

#### Find
- `find(begin, end, value)`: [begin, end)에 포함되어 있는 원소 중에서 첫번째 value의 이터레이터를 반환한다.
- `find_if(begin, end, value)`: [begin, end)에 포함되어 있는 원소 중에서 조건 p에 해당하는 것의 첫번째 이터레이터를 반환한다.
- 찾는 것이 없는 경우에는 end를 반환한다.
- 시간복잡도: O(N)
```cpp
#include <vector>
#include <algorithm>
// find 함수 예시
vector<int> v = {1, 2, 2, 3, 4, 5};
auto it = find(v.begin(), v.end(), 2);
if (auto == v.end()) {
    cout << "찾을 수 없음\n"; // end()값과 같으면 벡터에 원소가 없음
}
else {
    cout << (it - v.begin()); // 인덱스는 begin()값을 빼야지 계산 가능
}
// find_if 함수 예시 ()
auto even = find_if(v.begin(), v.end() [](int x ) {
    return x % 2 == 0;
})
cout << "첫 번째 짝수: " << (even - v.begin()) << "\n";
```

#### Fill
- `fill(begin, end, value)`: [begin, end)를 value의 값으로 채운다.
- 시간복잡도: O(N)
```cpp
#include <vector>
#include <algorithm>
vector<int> v = {1, 2, 3, 4, 5};
fill(v.begin(), v.end(), 0); // {0, 0, 0, 0, 0}으로 설정
```

#### Reverse
- `reverse(begin, end)`: [begin, end)의 순서를 역순으로 만든다.
- 시간복잡도: O(N)
```cpp
#include <vector>
#include <algorithm>
vector<int> v = {1, 2, 3, 4, 5};
reverse(v.begin(), v.end()); // {5, 4, 3, 2, 1}으로 바뀜
```

#### Rotate
- `rotate(begin, mid, end)`: [begin, end)를 min를 기준으로 왼쪽으로 회전시킨다 (a.k.a shift: _mid 값이 begin에 들어가고_, 순서대로 end-1 값까지 들어간다)
- 시간복잡도: O(N)
```cpp
#include <vector>
#include <algorithm>
vector<int> v = {1, 2, 3, 4, 5};
int n = v.size();
for (int i = 0; i < n; i++) {
    // 차례대로 {2, 3, 4, 5, 1}부터 다시 {1, 2, 3, 4, 5}까지 회전
    rotate(v.begin(), v.begin()+1, v.end());
}
```

#### Swap
- `swap(a, b)`: a와 b에 들어있던 값을 바꾼다.
```cpp
#include <algorithm>
int a = 10;
int b = 20;
swap(a, b); // a = 20, b = 10으로 바뀜
```

#### Unique
- `unique(begin, end)`: [begin, end) 구간에서 연속되는 중복 값들은 하나만 남기고 삭제한다.
- 좌표압축(범위 내에서 값들이 중구난방일 때 1부터 n까지 정렬할 때) 유용하게 쓰인다.
```cpp
#include <vector>
#include <algorithm>
vector<int> v = {1, 1, 1, 2, 3, 1, 1, 2};
auto last = unique(v.begin(), v.end()); // {1, 2, 3, 1, 2, 1, 1, 2}
cout << last; // last는 {1, 2, 3, 1, 2} 다음의 이터레이터 반환
```
- 실제로는 연속된 값들이 삭제되는 것이 아니라 중복된 값들을 덮어씌우거나 시프트하는 방식으로 값들을 하나씩만 정렬하고 나머지는 뒤에 그대로 갖다 붙이기 때문에 __사용 후 erase를 통해 뒤에 값들을 삭제하는 추가적인 과정을 거쳐야 한다__.
- 범위에서 각 값들을 하나씩만 남기고 싶다면 __정렬된 상태로 사용__ 하는 것이 좋다. 
- 이 때, unique의 return 값 (= 중복이 끝나는 부분의 이터레이터)를 사용한다.
```cpp
// 중복이 끝나는 시점부터 끝까지 삭제
v.erase(last, v.end()); // {1, 2, 3, 1, 2}만 남는다
```

#### Sort
- `sort(begin, end)`: [begin, end)를 __오름차순__('<' 기준)으로 정렬한다.
```cpp
#include <vector>
#include <algorithm>
// default 오름차순으로 정렬하기
vector<int> v = { 5, 3, 2, 1, 4};
sort(v.begin(), v.end()); // {1, 2, 3, 4, 5}의 오름차순으로 정렬됨
```
- `sort(begin, end, cmp)`: [begin, end)를 __cmp__ 비교함수를 만들어 그 기준으로 정렬한다.
```cpp
#include <vector>
#include <algorithm>
vector<int> v = { 5, 3, 2, 1, 4};
// 내림차순으로 정렬하는 다양한 방법: {5, 4, 3, 2, 1}
sort(v.begin(), v, end(), greater<int>()); 
// 비교함수를 만들어 정렬하기
bool cmp(const int &u, const int &v) { // u가 앞에 v 앞에 있는 것이
    return u > v;                      // u가 v보다 클 때만 허용이 됨을 의미
}
sort(v.begin(), v.end(), cmp);
// 비교함수를 람다함수로 정의하여 정렬하기
sort(v.begin(), v.end(), [](int u, int v) {
    return u > v;
});
```
- 백준 문제: 단어정렬, 좌료정렬하기 ... 
- pair 또는 tuple로 만들어서 비교하는 것도 좋은 방법 (그러면 한번에 비교하여 정렬 가능)! (위 두 문제 참고)

#### Stable_sort
- `stable_sort(begin, end)`: sort와 동일하나, 같은 것이 있는 경우에 정렬하기 전의 순서를 유지한다 (sort는 유지를 보장할 수 없음)
- `stable_sort(begin, end, cmp)`: 마찬가지.
- _버블 정렬(bubble sort)_ 와 _머지 소트(merge sort)_ 가 대표적인 stable sort에 해당한다.

#### Binary_search
- `binary_search(begin, end, value)`: [begin, end) 범위 내에서 value의 값을 _이분탐색_ 하여, 찾으면 true, 못 찾으면 false를 반환한다.
- 주의:
    - _정렬된 상태_ 로 사용했을 때 효과가 있다.
    - 찾는 value의 인덱스 값은 알 수 없으며, _단순히 value가 존재하는지 안 하는지의 여부만 알 수 있다_. (위치는 lower_bound나 upper_bound를 사용하면 된다)
```cpp
#include <vector>
#include <algorithm>
vector<int> v = {1, 2, 5};
for (int i = 1; i <= 5; i++) {
    // 있으면 true, 없으면 false 반환
    cout << i << " : " << binary_search(v.begin, v.end(), i); 
} 
```
- `binary_search(begin, end, value, cmp)`: [begin, end) 범위 내에서 value의 값을 cmp의 기준으로, 찾으면 true, 못 찾으면 false를 반환한다.

#### Lower_bound & Upper_bound
- `lower_bound(begin, end, value)`: [begin, end) 범위 내에서 value 보다 작지 않은 첫번째 이터레이터를 반환한다.
- `upper_bound(begin, end, value)`: [begin, end) 범위 내에서 value 보다 큰 첫번째 이터레이터를 반환한다.
- binary_search를 통해 구현이 되어 있어, 어떤 값의 _위치_ 를 알고 싶을 때 사용한다.
```cpp
#include <vector>
#include <algorithm>
vector<int> v = {1, 2, 3, 3, 4};
// value의 값이 하나만 존재하면, lower_bound는 그 자리를, upper_bound는 그 다음 인덱스를 가르킴 
auto l = lower_bound(v.begin(), v.end(), 1); // 1자리 (0 인덱스)
auto r = upper_bound(v.begin(), v.end(), 1); // 2 자리 (1 인덱스)
// value의 값이 중복되면, lower_bound는 처음 자리를, upper_bound는 그 다음 큰 숫자의 인덱스를 가르킴 
auto l = lower_bound(v.begin(), v.end(), 3); // 3자리 (2 인덱스)
auto r = upper_bound(v.begin(), v.end(), 3); // 4 자리 (4 인덱스)
```
- 정렬된 상태에서 _value의 개수_ 를 찾는데 사용할 수도 있다 (`equal_range`를 사용하면 더 쉽게 한 번에 구할 수 있다!)
```cpp
#include <vector>
#include <algorithm>
vector<int> v = {1, 2, 3, 3, 4};
auto l = lower_bound(v.begin(), v.end(), 3); // 3자리 (2 인덱스)
auto r = upper_bound(v.begin(), v.end(), 3); // 4 자리 (4 인덱스)
int n = l - r; // 4 - 2 = 2개
equal_range(v.begin(), v.end(), 3); // 
```

#### Min & Max
- `min(a, b)`
```cpp
#include <vector>
#include <algorithm>

``

#### Min_element & Max_element
- 
```cpp
#include <vector>
#include <algorithm>

``
#### Next_permutation
- 
```cpp
#include <vector>
#include <algorithm>

``