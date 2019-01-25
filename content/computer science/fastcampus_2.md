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

### 클래스 (class)
- 객체 지향 프로그래밍 (Object-oriented programming)을 가능하도록 해주는 기본적인 단위.
- 클래스를 통해 틀을 정의하고 이 틀을 바탕으로 각 인스턴스인 객체를 만들어 사용한다.
- 기본적으로, private 영역에서 멤버(member)를 정의하고 public 영역에서 메소드(method)를 정의한다. 
- 추상화(abstraction), 캡슐화(encapsulation), 정보 은닉(data hiding)
- 클래스를 활용해 인스턴스(instance)를 만든다.

#### 상속 (inheritance)

#### 다항성 (polymorphism)