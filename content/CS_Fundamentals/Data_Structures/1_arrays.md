---
path: "/cs/datastructure/arrays"
date: '2019-06-07'
title: "Data Structures 01 - Arrays"
description: Data Structures in C++ - Array 정리
image: ''
tags: ['자료구조', 'Cpp']
---
> educative.io의 Data Structures in C++ 정리

### Arrays
sequence of same data type
- stored in __contiguous memory space__
- constant time access (a.k.a. __random access__)
- fixed array: static array, dynamically-allocated array
- flexible array: dynamic array

### Static Arrays (정적 배열)
fixed-sized arrays
- size must be determined at __compile time (before 실행)__
- __stored in stack__
- constraint: cannot use input as size
```cpp
// one-dimension
int nums1[5]; 
int nums2[] = {1, 2, 3};
// two-dimension
int grid[row][col];
```

### Dynamically-allocated Arrays (배열을 동적으로 할당)
fixed-sized arrays but can use input as size
- size determined at __run-time (while 실행)__
- __stored in heap__
- constraint: must predefine max size; cannot resize dynamically
```cpp
    // one-dimension
    int* nums3 = new int[5];
    delete[] nums3;
    // two-dimension
    int** grid = new int * [row];
    for (int i = 0; i < row; i++) {
        grid[i] = new int[col];
    }
```

#### Dynamic Array (동적 배열)
resizable array
- store pointer to dynamically-allocated array and replace it w/ newly allocated array as needed
- only possible if it is a dynamicically-allocated array
```cpp
class DynamicArr {
private:
    int* arr;
    int num_elements;
    int capacity;
public:
    void resize() {
        // increase capacity of new array
        int* tempArr = new int[capacity * 2];
        // copy old elements to new array
        for (int i = 0; i < num_elements; i++) {
            tempArr[i] = arr[i];
        }
        // delete the allocated space for old array
        delete[] arr;
        // point to new allocated memory
        arr = tempArr;
    }
}
```

#### which is dynamic array?
- generally, means resizable array
- ask if it means 'dynamically allocated' or 'dynamic as in resizable' for clarification

### Vectors
dynamically resizable arrays 
- implemented version of dynamic array
```cpp
#include <vector>
using namespace std;
// declare one-dimensional vectors
vector<int> v;
vector<int> v(10);    // size of 10
vector<int> v(10, 0); // size of 10, all values 0
// declare two-dimensional vectors
vector<int> v[10];                  // 10 vectors (= vector of vectors) 
vector<vector<int> v(10, 0)> v[10]; // 10 rows & 10 columns of 0
```