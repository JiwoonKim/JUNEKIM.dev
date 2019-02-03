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
```c++
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
- `find(begin, end, value)`: [begin, end)에 포함되어 있는 원소 중에서 value의 이터레이터를 반환한다.
- `find_if(begin, end, value)`: [begin, end)에 포함되어 있는 원소 중에서 조건 p에 해당하는 것의 이터레이터를 반환한다.
- 찾는 것이 없는 경우에는 end를 반환한다.
- 시간복잡도: O(N)
```c++

```