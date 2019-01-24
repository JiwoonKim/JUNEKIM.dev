---
path: "/cs/fastcampus/c"
date: '2018-01-16'
title: "[패캠] 강의노트 01. C"
description: 패스트캠퍼스 컴퓨터공학 기초 C 정리
image: ''
tags: ['C', '컴퓨터공학', '강의노트', '패스트캠퍼스']
---
> c언어 중 몰랐던 부분만 위주로 정리.

#### 입출력
- visual studio에서는 scanf가 보안에 취약하기 때문에 (접근이 위험한 메모리 영역을 건들 수도 있음) 사용이 제한된다. (#define _CRT_SECURE_NO_WARNINGS으로 무시하고 사용 가능)
- 시스템 함수 system("pause")를 사용함으로써 콘솔창이 자동으로 끝나지 않게끔 할 수 있다.

#### 변수와 상수
- 컴퓨터는 정수를 2의 보수 방식으로 표현한다.
- INT_MIN 상수를 통해 가장 낮은 정수 값을 사용할 수 있다 (최댓값 찾기할 때 유용)

#### 문자열
- gets 대신 gets_s(c, sizeof(c))를 사용하여 버퍼의 크기를 벗어나지 않게끔 체크하면서 문자열을 읽고 저장할 수 있다.
- 문자열 처리를 위한 함수: strlen(), strcmp(), strcpy(), strcat(), strstr().

#### 