---
path: "/interviewprep/pramp/mock/0"
date: '2019-05-15'
title: "Pramp Mock Interview - Q 01"
description: Pramp Mock Interview
image: ''
tags: ['인터뷰']
---
> 2019년 5월 10일 Pramp 인터뷰 Question (Q I asked)

### Shifted Array Search
Given a sorted array shiftArr (that is shifted to the left by an unknown offset) and a num, find the index of the number within the array. (if number doesn't exist within array, return -1)

### 문제 분석
1번보다 2번이 더 효율적이기 때문에 2번 방식으로 문제를 풀어야 함
1. shiftArr의 원소를 차례대로 체크하여 num의 index 반환 (shiftArr의 끝에 도달해도 없으면 -1 반환)
    - O(N): Brute-force Method
2. __정렬되었다는 성질을 이용하여 Binary Search를 이용하여 index 찾기__
    - O(logN): Binary Search Method
    - 단, 단순히 sorted된 상태가 아니라, __shifted to the left일 수 있다는 점에서 변형된 문제__

### 풀이

#### 1. Offset 찾기
- Shifted된 array의 성질:
    1. 한 부분을 제외하고는 항상 오름차순으로 정렬되어 있음
    2. 한 부분에서만 (shiftArr[i - 1] > shiftArr[i])가 충족됨 (i가 array에서 가장 작은 숫자)
    3. (shiftArr[first] > shiftArray[last])가 충족됨: offset부터 오름차순, 마지막
        - 그림 추가
- __이진탐색으로 offset된 pivot 값 찾기__ (__재귀__)
    - if mid값이 (shiftArr[mid - 1] > shiftArr[mid]) 충족하면, mid 값 반환
    - 아니라면, shiftArr[mid]과 shiftArray[last] 비교하여 어느쪽에 pivot 값이 있는지 찾아서 재귀적으로 탐색
        - (shiftArr[mid] > shiftArray[last]): __정렬에 역행 -> pivot값은 mid의 오른편에 존재__
        - (shiftArr[mid] < shiftArray[last]): __오른차순 정렬된 상태 -> pivot값은 mid의 왼편에 존재__

#### 2. Offset을 기준으로 shiftArr에서 num 인덱스 찾기 (__binary search__)
1. __offset을 기준으로 완벽히 정렬된 두 array로 나누기__: (pivot == offset; 가장 작은 숫자의 인덱스)
    - [0, pivot - 1] 배열, [pivot, last] 배열로 자르기
2. last 값과 num를 비교하여
    - (num > shiftArray[last]): num은 왼쪽 배열에 존재
    - (num < shiftArray[last]): num은 오른쪽 배열에 존재
3. 2번에서 구한 배열을 대상으로 binary search하여 num의 인덱스 값 구하기 (없으면 -1 반환)

### 코드
```cpp
#include <iostream>
#include <vector>
using namespace std;

int findPivot( const vector<int>& shiftArr, int startIndex, int lastIndex ) {
  int mid = (startIndex + lastIndex) / 2;
  
  // if only one element, return as pivot
  if (startIndex == lastIndex) {
    return mid;
  }
  
  // if more than one element, check if mid point is pivot
  if (shiftArr[mid] > shiftArr[mid + 1]) {
    return mid + 1;
  }
  // if not pivot
  else {
    // if mid's value is larger than last value,  
    if (shiftArr[mid] > shiftArr[lastIndex]) {
      // pivot is located on the right side of mid value
      return findPivot(shiftArr, mid + 1, lastIndex);
    }
    // pivot is located on the left side of mid value
    else {
      return findPivot(shiftArr, startIndex, mid - 1);
    }
  }
}

int binarySearch( const vector<int>& shiftArr, int startIndex, int lastIndex, int num) {
  int mid = (startIndex + lastIndex) / 2;
  
  // if last element, determine whether num exists in shiftArr
  if (startIndex == lastIndex) {
    if (shiftArr[mid] == num) {
      return mid;
    } else {
      return -1;
    }
  }
  
  // if more than one elemnt, use binary search to find index
  if (num == shiftArr[mid]) {
    return mid;
  } else if (num < shiftArr[mid]) {
    return binarySearch( shiftArr, startIndex, mid - 1, num);
  } else {
    return binarySearch( shiftArr, mid + 1, lastIndex, num);
  }
}

// return index of num within shiftArr
int shiftedArrSearch( const vector<int>& shiftArr, int num ) {  
  
  // find the pivot point using binary search
  int pivot = findPivot(shiftArr, 0, shiftArr.size() - 1);
  int lastIndex = shiftArr.size() - 1;
  
  // if num is the pivot (smallest number in shiftArr)
  if (num == shiftArr[pivot]) {
    return pivot;
  } 
  else {
    // if num is larger than the last number,
    if (num > shiftArr[lastIndex]) {
      // it is on the left side of the pivot
      return binarySearch(shiftArr, 0, pivot - 1, num);
    }
    // else it is on the right side of the pivot
    else {
      return binarySearch(shiftArr, pivot, lastIndex, num);
    }
  }
}

int main() {
  vector<int> v = {9, 12, 17, 2, 4, 5};
  int num = 8;
  int result = shiftedArrSearch(v, num);
  cout << result << "\n";
  return 0;
}

```