---
date: '2019-06-07'
title: "[자료구조] 02. 링크드 리스트"
description: Data Structures in C++ - Linked Lists 정리
tags: ['자료구조', 'Cpp']
---
> educative.io의 Data Structures in C++ 정리

### Linked Lists
sequence of nodes linked together like a chain

#### Array vs. Linked List
| operation | Array | Linked List  |
|:----------:|:-----:|:-------------:|
| 선언 (메모리 할당) | fixed size \n (fixed block of memory based on size declared) | resizable \n (can access or release memory based on addition and deletion of elements) |
| access | O(1) | O(n) |
| append / prepend | O(n) | O(1) |
| delete (front/back) | O(n) |O(1) |

### Singly Linked List
list points in one direction (cannot point backward)

#### Node Class
- data: value stored in node
- pointer: refers to the next node in the list
```cpp
    class Node {
    private:
        int data;
        Node* next;
    public: 
        Node(int value) {
            data = value;
            next = nullptr;
        }
    }
```

#### LinkedList Class
collection of node objects
- head pointer: points to beginning of list
```cpp
    class LinkedList {
    private:
        Node* head;
    public:
        LinkedList() {
            head = nullptr;
        }
    }
```

### Doubly Linked List