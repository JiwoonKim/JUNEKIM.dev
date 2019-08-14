---
date: '2019-06-07'
title: "[자료구조] 01. 배열"
description: Data Structures in C++ - Array 정리
tags: ['자료구조', 'Cpp']
---
> 자료구조 기본 중 가장 기초적인 배열 소개

### 배열 (Arrays)
동일한 데이터 타입이 연속적으로 저장되는 자료구조 (sequence of same data type)
- 메모리에 연속적으로 저장된다 (stored in __contiguous memory space__)
- 인덱스 바탕의 임의 접근이 최대 장점이다 (constant time access; __random access__)
    - 시간복잡도 O(1)만에 접근 가능

### 배열의 종류
| 크기가 변하지 않는 배열 ( fixed array ) | 크기가 변할 수 있는 배열 ( resizable array )  |
|:----------|:-----|
| (1) 정적 배열 (static array) | (3) 동적 배열 (dynamic array) |
| (2) 동적으로 할당된 배열 (dynamically-allocated array) |  |

#### (1) 정적 배열 (Static Arrays)
크기가 사전에 결정되어 변수로 선언이 불가능한 배열 (fixed array)
```cpp
// 1차원 배열
int nums1[5]; 
int nums2[] = {1, 2, 3};
```
```cpp
// 2차원 배열
int grid[5][5];
```
- __컴파일 타임__ 때 __크기가 결정__ 된다 (__before 실행__)
    - 그러므로 변수로 크기를 정의할 수 없음 (ex. `int arr[num]` X)
- 정적으로 메모리가 할당되어 __스택(stack) 공간에 저장__ 된다

#### (2) 동적으로 할당된 배열 (Dynamically-allocated Arrays)
정적 배열과 마찬가지로 사전에 크기가 결정되지만, 변수로도 선언 가능한 배열 (also fixed array)
```cpp
// 1차원 배열
int* nums3 = new int[5];
delete[] nums3;
```
```cpp
// 2차원 배열
int** grid = new int * [row];
for (int i = 0; i < row; i++) {
    grid[i] = new int[col];
}
```
- __런 타임__ 때 __크기가 결정__ 된다 (__while 실행__)
    - 변수로 크기 정의가 가능 (ex. `int arr[num]`)
- 단, 크기가 결정되어 있으므로 상황에 따라 공간이 남거나 모자랄 수 있다
    - 최대 크기를 예측하여 __크기를 사전에 정의해야__ 하며, 상황에 따라 크기를 늘리거나 줄일 수 없는 단점이 있다 (__dynamically resize X__)
- __힙(heap) 공간에 저장__ 된다

#### (3) 동적 배열 (Dynamic Array)
사전에 크기가 결정될 필요가 없고, 상황에 따라 늘어나거나 줄어들 수 있는 배열 (resizable array)
```cpp
class DynamicArr {
    private:
        int* arr; // 포인터
        int size; // 현재 사용 중인 크기
        int capacity; // 전체 사용가능한 공간
    public:
        // 배열 크기 늘리기
        void resize() {
            // 크기가 2배인 새 배열을 만들기
            int* tempArr = new int[capacity * 2];
            // 이전 배열의 원소를 새 배열로 모두 옮기기
            for (int i = 0; i < num_elements; i++) {
                tempArr[i] = arr[i];
            }
            // 이전 배열 삭제
            delete[] arr;
            // 새 배열로 포인터 업데이트
            arr = tempArr;
        }
}
```
- __동적으로 할당한 배열을 베이스로 사용__ 하되, 다 찼을 경우에 __새롭게 동적으로 할당한 배열로 대체하기__
- 즉, 상황에 따라 __크기가 변할 수 있는 배열__ (__resizable array__)
- only possible if it is a dynamicically-allocated array

#### 그래서 동적 배열이란 정확히 무엇인가?
동적으로 할당된 배열 또는 동적 배열, 둘 중 어느 것?
- 일반적으로, 동적 배열이란 __크기가 변할 수 있는 배열 (resizable array)를 의미__ 한다
    - 그래도 혹시 모르니까 인터뷰에서 동적 배열이 '동적으로 할당되었음(dynamically allocated)'을 의미하는지 또는 '크기가 변할 수 있다는 의미에서의 동적(dynamic as in resizable)'을 의미하는 것인지를 제대로 확인하고 넘어가는 것이 좋다.
- 덧, '동적'이란 일반적으로 동적으로 메모리가 할당되어 힙 공간에 저장됨을 의미 (반대로 
'정적'이란 정적으로 메모리가 할당되어 스택 공간에 저장됨을 의미)

### 백터 (Vectors)
C++ 언어에서 구현된 동적 배열 자료구조
```cpp
#include <vector>
using namespace std;
// 1차원 배열
vector<int> v;
vector<int> v(10);    // size of 10
vector<int> v(10, 0); // size of 10, all values 0
```
```cpp
// 2차원 배열
vector<int> v[10];                  // 10 vectors (= vector of vectors) 
vector<vector<int> v(10, 0)> v[10]; // 10 rows & 10 columns of 0
```

#### 백터 메소드
| 연산 | 사용방법 | 설명 |
|:----:|:---|:---|
| __삽입__ | v.insert(`it`, `값`) | 이터레이터 자리에 삽입|
| | v.insert(`it`, `개수`, `값`) | 이터레이터 자리에 값 개수만큼 삽입 |
| | v.insert(`it`, `other.begin()`, `other.end()` | 이터레이터 자리에 `other` 백터 삽입 |
| __삭제__ | v.erase(`it`) | 이터레이터 자리 값 삭제 |
| | v.erase(`v.begin() + index`) | index 값 삭제 |
| | v.erase(`v.begin() + index`, `v.begin() + endNext`) | index 부터 endNext 전까지 삭제 |
| | v.clear() | 전체 비우기 |
| __푸시__ | v.push_back(`n`) | 맨뒤에 n 삽입 |
| __팝__ | v.pop() | 맨 뒤 값 삭제 |
| __크기__ | v.size() | |
| __비었나?__ | v.empty() | 비었는지 안 비었는지 확인 |

#### 레퍼런스로 전달하기 (Pass by Reference)
함수 내에서 백터의 값들을 변화시켜야 할 경우
```cpp
// 1차원 배열을 레퍼런스로 전달
void function(vector<int> &v) // & 포함하여 정의
function(v) // 실제 호출 시에는 v만 전달하면 알아서 &v가 전달됨
```
```cpp
vector<int> va[10];
// 2차원 배열을 레퍼런스로 전달
void function(vector<int> va[]) // [] 포함하여 정의
function(va)    // 실제 호출 시에는 va만 전달하면 알아서 전체가 레퍼런스로 전달됨
```