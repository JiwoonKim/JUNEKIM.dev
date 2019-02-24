---
path: "/cheatkeys/setup"
date: '2018-02-24'
title: "개발 환경 셋업 매뉴얼"
description: 개발 환경 셋업 매뉴얼 정리
image: ''
tags: ['setup', '매뉴얼']
---
> HTML 언어로 프로그래밍할 때 필요한 치트키들을 정리.
> 개인적인 자주 사용하는 문법을 반영하여 만든 치트키입니다.

### GIT 설치

### VS Code 설치

#### 터미널 설정: git bash를 기본 터미널로 설정하기
1. preference user setting (ctrl + shift + p)에서 terminal 검색
2. terminal > external: windows exec에서 C:\Program Files\Git\bin\bash.exe로 바꾸기 (만일 git 저장 directory가 다르면 그거에 알맞게 바꿔주기)
3. {} 버튼 클릭하여 user setting에서 다음을 추가
```json
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
"terminal.external.windowsExec": "C:\\Program Files\\Git\\bin\\bash.exe",
```
4. terminal (ctrl + `) 열면 git bash로 설정이 되어 있음을 확인할 수 있음

### 파일 인코딩을 utf 로 변경하기 (change the encoding for task output to utf)
- (참고) https://github.com/Microsoft/vscode-docs/blob/vnext/docs/editor/tasks.md#changing-the-encoding-for-a-task-output
- user setting에서 "files.autoGuessEncoding": true, 추가하여 file encoding 오류 방지

### g++ compiler 설치 (c++ 언어 파일 컴파일을 위해)
1. mingw exe의 basic setup에서 다음의 4개 선택 후 installation -> apply changes 실행하기
    - mingw-developer-toolkit
    - mingw32-base
    - mingw32-gcc-g++
    - msys-base (이거는 리눅스와 유사한 환경으로 프로그래밍 하고 싶으면)
2. 시스템 속성의 고급 탭에서 환경 변수 Path에 C:\MinGW\bin 추가 ( ; 로 다른 것과 구분)
3. vs code에서 c/c++ extension install/reload 하기
4. cpp 파일 컴파일 시 `g++ -o name name.cpp` 사용하기

### Python 설치
1. add python to PATH 체크
2. customize install location에서 C:\Python\Python37 설정
    - c 드라이브 아래에 python 폴더를 하나 만들고 그 안에서 파이썬 버전들을 관리하는 것이 용이
    - (bcuz 파이썬 2가지 버전 사용: python 2.x, python 3.x)

3. virtual env 설치: `pip install virtualenv`

### Docker 설치
- windows 버전 (hv가 있는지에 따라) docker 또는 docker toolbox 설치
- docker toolbox
    = uses docker-machine to create virtual machine on virtualbox
    -> automatically creates a Linux VM on Virtualbox that hosts Docker on your windows system

    -> 설치 후, docker quickstart terminal 실행

    -> docker compose 설치 (자동으로 깔림)