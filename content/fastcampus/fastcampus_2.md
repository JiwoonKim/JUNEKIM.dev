---
path: "/cs/fastcampus/cpp"
date: '2019-01-25'
title: "[패캠] 강의노트 02. C++"
description: 패스트캠퍼스 컴퓨터공학 기초 C++ 정리
image: ''
tags: ['Cpp', '컴퓨터공학', '객체지향프로그래밍', '패스트캠퍼스']
---
> C++ 언어 중 몰랐던 부분 또는 부족했던 부분만 위주로 정리.
> 주로 객체지향 프로그래밍 (OOP)를 위주로 정리

- [Namespace](#namespace)
- [Class](#클래스_class)
- [Template](#템플릿_template)
- [Container](#컨테이너_container)
- [Exception Handling](#예외처리_exception_handling)

### namespace
- __특정한 범위__ 또는 __영역__에 이름을 설정할 수 있게 한다.
- 서로 다른 개발자가 공동으로 프로젝트를 진행할 때 __각자 개발한 모듈을 정리해서 하나로 합칠 때 유용__ 하다.
```cpp
#include <iostream>
using namespace std;
// 같은 이름의 print이지만 다른 함수가 실행된다
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
```

### 클래스 (class)
- __객체 지향 프로그래밍 (Object-oriented programming)__ 을 가능하도록 해주는 __기본적인 단위__.
- 클래스를 사용함으로써 __추상화(abstraction)__ 와 __캡슐화(encapsulation)__ 를 이루고, 접근 한정자를 통해 __정보 은닉(data hiding)__ 을 이룬다.
- __클래스(class)__ 를 통해 __객체(object)의 틀을 정의__ 하고, 이 틀을 바탕으로 인스턴스(instance)를 만들 수 있다. 
- 기본적으로, __private 영역에서 멤버(member)를 정의__ 하고 __public 영역에서 메소드(method)를 정의__ 한다. 
```cpp
// 클래스 정의
class Character {
    private:    // private 접근 한정자를 사용함으로써 정보 은닉
        string name:
        int hp;
    public:
        Character(string name, int hp) { // 생성자를 통해 초기화를 할 수 있도록 정의
            this->name = name;          // this 포인터를 사용하여 
            this.hp = hp;               // 현재 instance의 멤버와 동일한 이름의 변수를 구분
        }
        Character(const Character& other) { // 복사 생성자를 사용할 수 있도록 정의
            name = other.name;
            hp = other.hp;
        }
        void show() { cout << name << " : " << hp << "\n"; }
        ~Character() {      // 소멸자를 정의
            cout << "[객체가 소멸됩니다]"; 
        }
}
```
```cpp
// 클래스의 객체 선언
Character char1("드래곤", 10); // 생성자를 사용하여 객체 선언
Character char2(char1); // 복제 생성자를 사용하여 객체 선언
// 동적 할당으로 객체 선언 및 소멸
Character* char3 = new Character("슬라임", 10); // (포인터 변수 선언 필수)
delete char3; // 동적 할당이 아니면 오류가 남
```

#### 상속 (inheritance)
- 부모 클래스(Parent class)와 자식 클래스(Child class)의 상속 관계를 통해 __소스코드의 재사용성을 증대__ 할 수 있다.
- 자식 클래스는 `:`을 통해 부모 클래스의 속성들을 상속받는다.
- 자식 클래스의 인스턴스를 __생성 시__, _부모 클래스의 생성자를 먼저 호출한 후 자식 클래스의 생성자가 호출되는 순서_ 를 따른다. 
- 반대로, 자식 클래스의 인스턴스를 __소멸 시__, _자식 클래스부터 소멸자가 호출된 후에 부모 클래스의 소멸자가 호출_ 된다.
- _자식 클래스의 메소드가 부모 클래스의 메소드와 이름이 같고 매개 변수(argument)의 형태가 동일할 때_, 부모 클래스의 정의를 무시하고 그 함수를 재정의하는 __오버라이딩(overriding)__ 이 가능하다.
```cpp
class SuperCharacter : Character {
    private:
        string superpower; // 기존의 Character 클래스의 멤버도 상속
    public: 
        SuperCharacter(string superpower, string name, int hp) : Character(name, hp) {
            this -> superpower = superpower;
        }
        // 오버라이딩을 통해 메소드 재정의
        void show() { 
            cout << name << " : " << superpower << "\n"; 
        }
}
```

#### 오버로딩 (overloading)
- __함수 오버로딩__: 동일한 이름의 메소드에 __매개변수의 형태를 다르게 정의__ 함으로써 다양한 방식으로 사용할 수 있다.
```cpp
show() { cout << name << " : " << superpower << "\n"; }
show(hp) { cout << name << " : " << hp << "\n"; }
```
- __연산자 오버로딩__: 기존에 존재하는 연산자를 원하는 방식으로 수정하여 사용할 수 있다.
```cpp
class Character {
    ...
    public {
        Character operator +(const Character& other) { // 연산자 + 오버라이딩
            return Character(name + " & " + other.name);
        }
    }
}
```

#### 캡슐화 (encapsulation)
- 캡슐화는 __서로 관련된 멤버 및 메소드__ 를 __하나의 클래스로 묶어 관리__하는 원리이다.
- 서로 다른 클래스가 서로 private 멤버에 접근해야 할 때, __프렌드 클래스(Friend class)__ 로 선언함으로써 모든 멤버를 프렌드로 접근할 수가 있다. 
    - 다만, 프렌드 클래스를 너무 남용하면 객체지향 프로그래밍의 정보 은닉 효과가 떨어지기 때문에 필요한 경우에 한해서만 사용하는 것이 좋다.
```cpp
class Weapons {
    friend class Attack; // Attack 클래스가 Weapons 클래스를 사용할 수 있도록 선언
    private:
        string name;   // Attack 클래스 내에서도 접근가능
}
class Attack {
    public:
        void attack(const Weapons &w) {
            // Attack 클래스 내에서 직접적으로 Weapons 클래스 멤버 접근
            cout << w.name << "으로 공격!";
        }
}
```
- __정적 멤버(Static member)__ 를 사용함으로써 __모든 객체가 멤버를 공유__ 할 수도 있다.
```cpp
class Character {
    private: string name;
    public:
        static int count;   // 정적 멤버 선언
        Character(string name) {
            this.name = name;
            count++;
        }
}
Character::count = 0; // 클래스 밖에서 정적 멤버 count의 값 초기화
```
- __상수 멤버(Constant member)__ 를 사용하면 클래스 내에서도 __변경되지 않는 상수__ 를 선언하여 사용할 수도 있다.

#### 다형성 (polymorphism)
- __여러 개의 서로 다른 객체가 동일한 기능을 서로 다른 방법으로 처리__ 할 수 있게 하는 기능이다.
- __오버로딩__과 __오버라이딩__을 통해 다형성이 이루어진다.
  1. __compile time에는 오버로딩__(함수와 연산자 오버로딩 포함)을 통해 다형성이 이루어진다.
  2. __runtime에는 오버라이딩__을 통해 다형성이 이루어진다.
     - 단, 
- __추상 클래스 (Abstract class)__ 를 사용함으로써 효과적으로 다형성을 구현할 수 있다 (동적 바인딩을 사용함으로써 정적 바인딩의 문제를 해결)
- __가상 함수(Virtual function)__ 를 사용하여 자식 클래스에서 함수를 재정의할 수 있게 한다. (동적 바인딩 사용)
```cpp
```

### 템플릿 (Template)
- 템플릿을 통해 data type과 상관없이 함수 및 클래스를 사용하는 __일반화 프로그래밍(Generic Programming)__을 구현할 수가 있다.
- __함수 템플릿(Function Template)__이 처음 호출되면 해당 자료형에 맞춰 특수화된 instance를 생성하고 이후에 해당 자료형이 사용될 때마다 instance가 호출된다.
- 이러한 템플릿의 자료형을 명시적으로 정의하여 함수 템플릿을 오버라이딩할 수도 있다 (__명시적 특수화__)
```cpp
template <typename T> // 특정 함수나 클래스 위에 template을 선언함으로써 템플릿 사용가능
void change(T& a, T& b) {
    T temp;
    temp = a;
    a = b;
    b = temp;
}
```
- __클래스 템플릿(Class Template)__ 을 사용하면 자료형에 따라 다르게 동작하는 클래스 집합을 만들 수가 있다.
```cpp
template <typename T>
class Data {
    private T data;
    public:
    Data(T data) : data(data) { }
    void setData(T data) { this.data = data;
    T getData() { return data; }
}
```

#### 스마트 포인터 (Smart Pointer)
- 포인터처럼 동작하는 클래스 템플릿으로 프로그래머의 실수로 __메모리 누수(memory leak)을 방지__ 하기 위한 사용된다.
- 기본적으로 힙 영역에 동적 할당되는 메모리(new 키워드를 사용)를 해제하기 위해서는 delete 키워드를 사용해야 하는데, 까먹을 수 있기 때문에 __스마트 포인터를 사용__ 함으로써 __자동으로 메모리를 해제__ 하여 메모리 누수를 더 효과적으로 방지하고 컴퓨터 __시스템의 안전성을 높인다__.
- `unique_ptr`: 하나의 스마트 포인터가 특정한 객체를 처리할 수 있게 한다.
- `shared_ptr`: 특정한 객체를 참조하는 스마트 포인터의 총 개수를 참조한다.
- `weak_ptr`: 하나 이상의 shared_ptr 인스턴스가 소유하는 객체에 대한 접근을 제공한다 (부가적인 역할)
```cpp
int a = new int(10);
unique_ptr<int> p(a); // 이제 p가 해당 객체의 메모리 해제 가능
```

### 컨테이너 (Container)
- __STL 컨테이너 어댑터 라이브러리__: 매우 활용도가 높은 자료구조를 제공한다.
- `stack`: push, pop, top, empty, size 연산이 가능하다.
- `queue`: push, pop, front, back, empty, size 연산이 가능하다.
- `priority_queue`: 큐 자료구조를 자동으로 정렬한다 (<queue> 헤더파일에 포함시켜야 함)

#### 시퀀스 컨테이너 (sequence container)
- 시퀀스 컨테이너는 __선형구조__로 vector, deque, list, forward_list이 존재한다.
- __iterator__를 통해 각 원소에 접근이 가능하다 (.begin과 .end 활용)
- `vector`: 뒤쪽에서만 데이터를 삽입과 삭제가 가능하며 배열처럼 사용하기 적합하다.
- `deque`: 양쪽에서 데이터를 삽입과 삭제가 가능하다.

#### 연관 컨테이너 
- 연관 컨테이너는 __key와 value 형태__ 의 데이터를 쌍으로 저장하는 자료구조로 set, multi_set, map, multi_map이 존재한다.
- `set (집합)`: 저장하려는 데이터를 key값으로 사용함으로써 __정렬된 위치__에 데이터를 삽입할 수 있고 __검색이 빠르다__. (단, __key 중복 X__)
```cpp
#include <set>
set<int> s
```
- `map`: 저장하려는 데이터를 __key와 value 쌍__ 의 형태로 정렬된 위치에 삽입할 수 있고 __검색이 빠르다__. (단, key의 중복은 허용하지 않음); __해시구조를 대신하여 자주 사용__ 된다.
```cpp
#include <map>
map<string, int> m;
m["슬라임"] = 1;
m["드래곤"] = 2;
```

### 예외처리 (Exception Handling)
- __예외__ 란 프로그램이 동작하는 과정에서 발생한 __예상치 못한 오류(error)__ 이다.
- 이렇게 발생할 가능성이 높은 오류를 `try ~ catch` 구문을 통해 __예외 처리__ 를 수행할 수 있다.
- `try`: 특정한 코드 블록에서 __예외가 발생할 수 있음을 명시__ 한다.
- `throw`: try 구문에서 오류가 발생시 __던지듯이 오류를 전달__ 한다.
    -한 try 구문 내에서 여러 예외 상황에 대해 throw를 하여 catch가 각 오류를 처리할 수 있게 할 수도 있다 (ex. throw 1)
- `catch`: 던져진 예외에 대해서 __핸들러가 처리__ 한다.

```cpp
int a = 1, b = 0;
try {                                   // try 내에서 예외를 체크
    if (b == 0) {
        throw "0으로 나눌 수 없습니다";  // 예외를 던지고 try 영역을 빠져나옴 (예외처리)
    }
    cout << a / b;                      // 예외가 아닐 경우, 실행
}
catch (const char* str) {               // catch를 통해 던져진 예외를 잡아 실행
    cout << str;
}
```