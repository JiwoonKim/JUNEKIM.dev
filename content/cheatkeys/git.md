---
path: "/cheatkeys/git"
date: '2019-01-30'
title: "[Git] 치트키 정리"
description: git 치트키 정리
image: ''
tags: ['Git', '치트키']
---
> git와 github 사용에 필요한 치트키들을 정리.
> 개인적인 자주 사용하는 커맨드들을 반영하여 만든 치트키입니다.

#### 유저 설정
- 이름 설정: `git config --global name "{name}"`
- 이메일 설정: `git config --global email {email}`

#### 레포 만들기
- 로컬 컴퓨터에서 시작: `git init`으로 현재 디렉토리(폴더)에 빈 레퍼지토리 만들기.
- 리모트 서버로부터 다운: `git clone {url}`으로 

### 커밋: 코드 변화 저장하기
1. `git add {filenames}`
2. `git commit -m "{message}"`
    - `git commit`: 메세지 헤더 + 바디로 구성 가능
    - 1 + 2 : `git commit -am {filenames} "{message}"`
3. `git push origin {branch}`

### 협업하기
1. 레포 `fork`하여 로컬 컴퓨터에 `clone`하기
2. `git branch {name}`하여 코드 추가 및 변경 + 커밋
3. `pull request`

#### 브랜치: 새 줄기 만들기
1. `git branch {name}`
2. `git checkout {branchname}`
3. 해당 브랜치에서 코드 추가 및 변경 + 커밋
4. `pull request` || `git checkout master` + `git merge {branchname}`
4. `git branch -d {branchname}`로 로컬 컴퓨터에서 삭제
5. `git push origin -d {branchname}`

### 커밋 관리
- 커밋 삭제
```git
git reset --hard HEAD^
git push origin -f
```