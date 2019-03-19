---
path: "/cs/fastcampus/c"
date: '2019-01-16'
title: "[패캠] 강의노트 01. C"
description: 패스트캠퍼스 컴퓨터공학 기초 C 정리
image: ''
tags: ['C', '컴퓨터공학', '강의노트', '패스트캠퍼스']
---
> C 언어 중 몰랐던 부분만 위주로 정리.

#### 입출력
- visual studio에서는 scanf가 보안에 취약하기 때문에 (접근이 위험한 메모리 영역을 건들 수도 있음) 사용이 제한된다. (#define _CRT_SECURE_NO_WARNINGS으로 무시하고 사용 가능)
- 시스템 함수 system("pause")를 사용함으로써 콘솔창이 자동으로 끝나지 않게끔 할 수 있다.

#### 변수와 상수
- 컴퓨터는 정수를 2의 보수 방식으로 표현한다.
- INT_MIN 상수를 통해 가장 낮은 정수 값을 사용할 수 있다 (최댓값 찾기할 때 유용)

#### 문자열
- gets 대신 gets_s(c, sizeof(c))를 사용하여 버퍼의 크기를 벗어나지 않게끔 체크하면서 문자열을 읽고 저장할 수 있다.
- 문자열 처리를 위한 함수: strlen(), strcmp(), strcpy(), strcat(), strstr().
- memset()을 사용하여 동적으로 문자열을 위한 메모리를 할당할 수도 있다.
```c
#include <string.h>
char *a = malloc(100);
memeset(a, 'A', 100); // A 100개인 string
```

#### 함수 포인터
- 함수 이름은 메모리 주소를 반환한다.
- 함수 포인터는 특정한 함수의 반환 자료형을 지정하는 방식으로 선언할 수 있다.
```c
void func1() { 
    printf("1");
}
void(*fp)() = func1;
fp();
```
- 함수 포인터가 함수의 리턴 타입으로 선언할 수도 있다.
```c
int add(int a, int b) {
    return a + b;
}
int(*fp(char* a))(int, int) {
    printf("%s\n", a);
    return add;
}
```

#### 전처리기
- `#include`: 외부파일을 라이브러리로 포함시킨다.
```c
#include <파일이름> // 시스템 디렉토리에서 파일을 검색하여 가져옴
#include "파일이름" // 현재 폴더에서 파일을 검색하여 가져옴 (없으면 시스템 디렉토리에서 검색)
```
- `#define`: 상수나 함수를 매크로로 정의한다.
```c
#define PI 3.14159265
#define ll longlong
#define POW(x) (x * x)
```
- `#ifndef`과 `#endif`: 헤더파일의 내용이 중복되지 않도록 조건부 컴파일을 실행한다.
```c
#ifndef _TEMP_H
#define _TEMP_H
int add(int a, int b) {
    return a + b;
}
#endif
```
- 라이브러리를 만들 때는 소스파일(.c)과 헤더파일(.h)을 분리하여 정의한다.