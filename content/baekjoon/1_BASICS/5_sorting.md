---
path: "/baekjoon/basic/sort"
date: '2019-04-21'
title: "[백준] 기초 05. 정렬"
description: 백준 알고리즘 강의 기초 5강 정리
image: ''
tags: ['백준', '백준 기초', '알고리즘', 'Cpp', '정렬']
---

### 정렬
__어떤 자료를 순서대로 배열하는 것__
- 다양한 방식이 존재: 선택 정렬, 버블 정렬, 삽입 정렬, 퀵 정렬, 힙 정렬, 병합 정렬, etc.
    - O(n^2)과 O(nlogn)으로 크게 나누어진다.
- 빠를수록 좋기에 __O(nlogn)인 퀵 정렬, 힙 정렬, 병합 정렬을 주로 사용__ 한다.
- __직접 구현하기보다는 STL에 있는 `sort` 함수를 사용__ 하는 것이 좋다.
    - `sort(begin, end)`: begin부터 end 바로 전까지를 정렬

### 퀵 정렬 (Quick Sort) 구현
- __O(N*logN)__ 의 시간복잡도를 가지는 __분할정복 알고리즘__ 이다.
- __기준 값을 중심으로 계속 배열을 나누어나가는 방법__ 이다.
    - 기준 값을 중심으로 나누기 때문에 합치는 부분은 필요 X
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
            // pivot 값은 그대로 냅두고 이를 제외한 두 부분을 정렬 (재귀)
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

### 병합 정렬 (Merge Sort) 구현
- __O(N*logN)__ 의 시간복잡도를 가지는 __분할정복 알고리즘__ 이다.
- __배열을 무조건 반으로 계속 나눈 후 합치면서 정렬해나가는 방법__ 이다.
- 크게 두 부분으로 나누어 구현:
    1. __Divide__:  원소가 하나 남은 상태일 때까지 __계속 배열을 반으로 나누기__
    2. __Merge__: 나누어진 두 배열의 원소들을 __차례대로 비교하면서 하나의 배열로 합치기__; __합치는 과정에서 정렬__
        - 두 배열을 합치는 과정에서만 원소 간 비교가 필요하며, 합친 결과는 임시 배열에 저장
        - 비교 후 한 쪽 배열에 원소가 남아있다면, 그대로 원소들을 차례대로 옮기기
        - 마지막으로 임시적으로 합친 배열을 __다시 원래 배열으로 옮겨 저장__
- __값들을 합치는 과정을 일시적으로 저장할 temporary 배열을 사용하기__ 
```cpp
// a 배열에 있는 값들을 나누어나가고 
// 합치면서 정렬한 결과를 b 배열에 저장
    vector<int> a;
    vector<int> merged;
    void mergeSort(int start, int end) {
        //  원소가 하나일 경우, 그대로 냅두기
        if (start == end) {
            return;
        }
        // 원소가 하나만 있을 때까지, 배열을 반으로 나누기
        int mid = (start + end) / 2;
        mergeSort(start, mid);
        mergeSort(mid + 1, end);
        // 두 배열을 합치기 (이 과정에서 정렬이 됨)
        merge(start, end);
    }
    void merge(int start, int end) {
        // 배열 merged의 인덱스를 track해 나갈 변수 정의
        int index = 0;
        // 나누어진 두 배열 각각의 시작점부터 차례대로 원소들 비교해나가기
        int mid = (start + end) / 2;
        int leftTurn = start;
        int rightTurn = mid + 1;
        while (leftTurn <= mid && rightTurn <= end) {
            // 비교 결과 더 작은 값을 merged 배열에 저장
            if (a[leftTurn] <= a[rightTurn]) {
                merged[index++] = a[leftTurn++];
            } else {
                merged[index++] = a[rightTurn++];
            }
        }
        // 비교하는 두 배열 중 merged로 옮겨지지 않은 원소가 있을 경우, 차례대로 옮기기 
        while (leftTurn <= mid) {
            merged[index++] = a[leftTurn++];
        }
        while (rightTurn <= end) {
            merged[index++] = a[rightTurn++];
        }
        // 마지막으로, merged 된 배열의 값들을 다시 a 배열로 옮긴다 (overwrite)
        for (int i = start; i <= end; i++) {
            a[i] = merged[i - start];
        }
    }
```

### 퀵 정렬과 병합 정렬 비교
- __공통점__: __O(N * logN)의 시간복잡도__, __분할정복 알고리즘__ 에 기반한다.
- __차이점__:
    - 퀵 정렬: 기준값을 가지고 배열을 나누어나가기 때문에, __나누어나가는 과정에서 정렬__ 이 된다. (따로 병합 과정이 필요 X; 있는 그대로 이어붙이면 정렬된 상태)
    - 병합 정렬: 무조건 반으로 배열을 나누어나가기 때문에, 나누어진 두 배열의 값들을 하나하나 비교하면서 정렬해야 한다. 결국, __병합하는 과정에서 정렬__ 이 된다.

### 버블 정렬 (Bubble Sort) 구현하기
- __O(N^2)__ 의 시간복잡도를 가지는 알고리즘이다.
- 완전히 정렬된 상태일 때까지 인접한 두 원소를 비교해나가면 swap를 진행하는 방법이다 (N * N).
- 구현:
    - 배열의 원소 개수만큼 루프 (N 패스)를 돌며 인접한 두 원소를 비교해가며 swap를 실행
    - 그 결과, 한 패스마다 __차례대로 가장 큰 숫자가 끝으로 옮겨지고 나머지는 그 차례 그대로 유지됨__
    - 그렇기 때문에 __각 패스는 0 ~ (n - 패스차례) 만큼만 swap를 실행하면 됨__
- __swap 함수를 별도로 정의하여 사용하면 편리__
```cpp
    vector<int> v;
    // 배열의 각 원소 개수만큼 루프를 돌며 (N 패스 돌기)
    for (int i = 0; i < n; i++) {
        bool change = false;
        // 인접한 두 원소를 비교하여 swap (정렬)
        for (int j = 0; j < n - i; j++) {
            if (v[j] > v[j + 1]) {
                change = true;
                swap(v[j], v[j + 1]);
            }
        }
        // 배열이 모두 정렬된 상태이면, 루프 종료시키기
        if (change == false) {
            break;
        }
    }
```

### 특별한 조건으로 정렬

#### 특수한 자료를 정렬해야 할 때 
기본자료형 (정수, 문자열, etc.)가 아닌 자료를 정렬해야 할 때
1. STL 자료형을 변형하여 사용 가능하다.
2. __구조체(struct)로 정의하여 사용할 수 있다__ (cmp 함수를 연산자 오버로딩을 할 수도 있음)
```cpp
    struct Point {
        int x, y;
        // 연산자 오버로딩하여 구현
        bool operator < (const Point &v) const {
            return x < v.x;
        }
    };
```

#### 특별한 조건을 기반으로 정렬해야 할 때: 
- __cmp 함수__ 를 조건에 맞춰 따로 정의한 후 `sort(start, end, cmp)`을 사용한다.
```cpp
    sort(v.begin(), v.end(), cmp);
    bool cmp(const int &u, const int &v) {
        return u < v;
    }
    // u < v가 true인 경우, u가 v보다 앞에 옴
    // false인 경우 (u > v), u가 v보다 뒤에 옴
```
- 람다함수를 정의하여 바로 사용도 가능하다.
```cpp
    sort(v.begin(), v.end(), [](int &u, int &v) {
        return u < v;
    });
```

#### 조건이 여러 개 중첩되는 경우
- if 조건문을 여러번 중첩시킬 경우, 실수할 확률이 커지기 때문에
- 대신, __cmp 함수내에 pair나 tuple을 사용__ 하여 간단하게 정렬한다.
    - `make_tuple() < make_tuple()`을 return 하는 방식 
    - 증가하는 경우를 위해 `<`로 비교
    - 감소하는 경우를 위해 tuple 내의 field 변수에 `-`를 양쪽에 추가
- 이렇게 하면 __한번에 비교를 하기 용이__ 하다.
```cpp
    // age는 감소하는 순서대로, score는 증가하는 순서대로 정렬
    bool cmp(const Person &u, const Person &v) {
        return make_tuple(-u.age, u.score) < make_tuple(-v.age, v.score);
    }
```

### 안정 정렬 (Stable Sorting)
- __같은 것이 있는 경우에 정렬하기 전의 순서가 유지되는 정렬 알고리즘__ 이다.
- __병합정렬(Merge Sort)__ 와 __버블 소트(Bubble Sort)__ 가 정렬 알고리즘에 해당한다.
- STL에는 `stable_sort` 알고리즘을 사용한다.
```cpp
stable_sort(v.begin(), v.end(), cmp);
```

### 정렬 알고리즘 응용하기
정렬 알고리즘을 응용해서 문제를 푸는 방법

#### [카드](https://www.acmicpc.net/problem/11652) (중요!)
- 문제: 여러 정수가 입력되었을 때, 가장 많이 가지고 있는 정수를 구하기 (가장 많이 가지고 있는 정수가 여러개일 경우, 그중 가장 작은 수 구하기)
- 풀이: 정렬된 리스트를 돌며 각 숫자의 연속된 개수를 세기
    - __정렬하면 같은 수는 연속으로 나열__ 이 되기에 하나씩 iterate하며 각 숫자의 개수를 세면 됨
    - 개수를 세는 숫자를 저장해놓거나 이전 숫자와 비교하며,
    - 새로운 숫자가 나올 때까지 count를 세기
- __tip__: 따로 가장 작은 수를 체크할 필요없이, __현재 max_count를 초과하는 개수의 숫자가 나타났을 때만 ans 값을 업데이트__ 하게 하면 됨

#### [k번째 수](https://www.acmicpc.net/problem/11004) (중요!)
- 문제: 숫자를 정렬했을 때, k번째로 작은 수를 구하기
- 풀이: __퀵정렬을 응용하여 partition된 배열의 개수를 통해 k번째 작은 수 찾기__
    - pivot 값을 기준으로 __나누어진 두 배열 각각의 개수를 통해 k번째 작은 수가 어느쪽에 속하는지 찾기__
    - 속하는 부분만 계속 퀵정렬 실행하며 k번째 수 찾고
    - 속하지 않는 부분은 퀵정렬할 필요 없이 그냥 냅둠

#### [버블 소트](https://www.acmicpc.net/problem/1377) (중요!)
- 문제: 주어진 숫자 배열들을 버블 소트했을 때, 총 몇 단계로 이루어지는지 세기
- 풀이: __정렬 전과 후를 비교__ (뒤쪽에 있는 숫자가 앞쪽의 자리로 옮겨오는데 걸리는 단계 세기)
    - 큰 숫자가 뒤로 가는데는 한 패스씩밖에 걸리지 않지만,
    - 작은 숫자가 앞으로 가는데는 한 패스에 한 칸씩만 옮겨갈 수가 있음
    - 그러므로, 뒤에 있는 숫자가 앞으로 오는 가장 큰 칸 수를 구하면 됨
- 주의: 만약 STL pair 자료구조를 사용하지 않고 임의로 custom 자료구조를 만들어서 사용한다면, 
    - 비교 함수 오버로딩을 사용한다면, 한 필드가 같은 경우, 다른 필드까지 비교하게끔 정의
    - STL 정렬 알고리즘을 사용한다면, 가능하면 `stable_sort`를 사용하여 필드가 같은 경우에는 이전의 순서를 유지할 수 있게끔 할 것
