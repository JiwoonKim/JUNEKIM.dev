---
path: "/cs/datastructure/arrays"
date: '2019-06-07'
title: "Data Structures 01 - Arrays"
description: Data Structures in C++ - Array 정리
image: ''
tags: ['자료구조', 'Cpp']
---
> educative.io의 Data Structures in C++ 정리

### Arrays / Vectors
collection of same data type

### Arrays
fixed-sized arrays
- one-dimensional arrays
```cpp
// static arrays (stored in stack)
int nums1[5]; 
int nums2[] = {1, 2, 3};
// dynamic arrays (stored in heap)
int* nums3 = new int[5];
delete[] nums3;
```
- two-dimensional arrays
```cpp
    // static arrays
    int grid[row][col];
    // dynamic arrays
    int** grid = new int * [row];
    for (int i = 0; i < row; i++) {
        grid[i] = new int[col];
    }
```

#### Resize array
- resize a fixed-sized array
- only possible if it is a dynamic array
```cpp
    int* arr;
    int num_elements;
    int capacity;
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
```

### Vectors
dynamically resizable arrays
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