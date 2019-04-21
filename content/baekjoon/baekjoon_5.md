---
path: "/algorithm/baekjoon_basic/sort"
date: '2019-04-21'
title: "[백준] 강의노트 05. 정렬"
description: 백준 알고리즘 강의 기초 5강 정리
image: ''
tags: ['백준', '알고리즘', 'C++', '강의노트', '정렬']
---

### 정렬
__어떤 자료를 순서대로 배열하는 것__
- 다양한 방식이 존재: 선택 정렬, 버블 정렬, 삽입 정렬, 퀵 정렬, 힙 정렬, 병합 정렬, etc.
    - O(n^2)과 O(nlogn)으로 크게 나누어진다.
- 빠를수록 좋기에 __O(nlogn)인 퀵 정렬, 힙 정렬, 병합 정렬을 주로 사용__ 한다.
- __직접 구현하기보다는 STL에 있는 `sort` 함수를 사용__ 하는 것이 좋다.
    - `sort(begin, end)`: begin부터 end 바로 전까지를 정렬

#### 퀵 정렬 (Quick Sort) 구현
__O(N*logN)__ 의 시간복잡도를 가지는 __분할정복 알고리즘__ 이다.
- 크게 두 부분으로 나누어 구현:
    1. __Partition__: pivot을 기준으로 __두 부분으로 나누기__
        - pivot 값을 정한 후, __배열의 끝으로 위치__ 시킴으로써 그 전값들과 값 비교가 용이하게 하기
        - 모든 값 비교 후, pivot보다 __작은 값들 다음 인덱스로 다시 pivot 값 위치시키기__
        - 왼쪽은 pivot보다 작은 값들, 오른쪽은 더 큰 값들의 결과가 나온다 (__단, 각각 부분이 정렬된 상태 X__)
    2. __Quicksort Recursion__: 나누어진 두 부분을 각각 다시 partition한 후 quicksort
        - 배열의 원소가 하나일 때까지 partition하여 quicksort 실행
- __swap 함수를 별도로 정의하여 사용하면 편리__
```cpp
vector<int> a;
void quicksort(int lowIndex, int highIndex) {
    // 값이 두 개 이상인 배열만 partition하여 quicksort 실행
    if (highIndex > lowIndex) {
        // partition하기
        int pivotIndex = partition(lowIndex, highIndex);
        // 나누어진 두 부분에 대해 각각 quicksort 다시 실행
        // pivot 값은 그대로 냅두고 이를 제외한 두 부분을 퀵 정렬
        quicksort(lowIndex, pivotIndex - 1);
        quicksort(pivotIndex + 1, highIndex);
    }
}
int partition(int lowIndex, int highIndex) {
    // Pivot을 정하여 그 값을 배열 끝자리(highIndex)로 옮기기
    // 그래야 lowIndex ~ highIndex 전까지의 값들과 pivot 값 비교가 쉬움
    int pivotIndex = low + (highIndex - lowIndex)/2;
    swap(a[pivotIndex], a[highIndex]);
    // 다른 값들과 pivot값 (@highIndex) 비교함으로써 배열을 둘로 나누기
    int leftEndIndex = lowIndex;
    for (int i = lowIndex; i < highIndex; i++) {
        if (a[i] < a[highIndex]) {
            swap(a[i], a[leftEndIndex]);
            leftEndIndex += 1;
        }
    }
    // 마지막으로 왼쪽 배열 다음 값으로 pivot 값 옮기기
    swap(a[highIndex], a[leftEndIndex]);
    // pivot 값이 위치한 인덱스 반환
    return leftEndIndex;
}
/* 직접적으로 함수에 배열을 전달하는 방법은 함수 호출할 때마다 
배열의 형태를 고려해야하는 번거로움이 있기 때문에 swap이 편리함 */
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}
```

#### 병합 정렬 (Merge Sort) 구현