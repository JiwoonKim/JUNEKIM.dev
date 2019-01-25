---
path: "/cs/fastcampus/cpp"
date: '2018-01-25'
title: "[패캠] 강의노트 02. C++"
description: 패스트캠퍼스 컴퓨터공학 기초 C++ 정리
image: ''
tags: ['C++', '컴퓨터공학', '강의노트', '패스트캠퍼스']
---
> C++ 언어 중 몰랐던 부분만 위주로 정리.

### namespace
- 특정한 범위 또는 영역에 이름을 설정할 수 있게 한다.
- 서로 다른 개발자가 공동으로 프로젝트를 진행할 때 각자 개발한 모듈을 정리해서 하나로 합칠 때 유용하다.
```c++
#include <iostream>
using namespace std;

namespace A{
    void print() {
        cout << "A\n";
    }
}
namespace B{
    void print() {
        cout << "B\n";
    }
}
// 같은 이름이지만 다른 함수가 실행된다
```

### class
- 