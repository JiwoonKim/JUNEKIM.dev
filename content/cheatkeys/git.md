---
path: "/cheatkeys/git"
date: '2018-01-30'
title: "[Git] 치트키 정리"
description: git 치트키 정리
image: ''
tags: ['git', '치트키']
---
> git와 github 사용에 필요한 치트키들을 정리.
> 개인적인 자주 사용하는 커맨드들을 반영하여 만든 치트키입니다.

#### user 설정
- 이름 설정: `git config --global name "<name>"`
- 이메일 설정: `git config --global email <email>`

#### repository 시작
- 로컬 컴퓨터에서 시작: `git init`으로 현재 디렉토리(폴더)에 빈 레퍼지토리 만들기.
- 리모트 서버로부터 다운: `git clone <url>`으로 

### 코드 변화 저장 (keep track of changes in code)
1. `git add <filenames>`
2. `git commit -m "<message>"`
- 1 + 2 : `git commit -am <filenames> "<message>"`
3. `git push origin <branch>`

### synchronize 코드 (협업시 유용)
- 