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

### 나 홀로 프로젝트

#### 레포 만들기
- 로컬 컴퓨터에서 시작: `git init`으로 현재 디렉토리(폴더)에 빈 레포 만들기
- 리모트 서버로부터 다운: `git clone {url}`으로 레포 복사하여 로컬 컴퓨터에서 사용하기

#### 커밋: 코드 변화 기록
1. `git add {filenames}`
2. `git commit -m "{message}"`
    - `git commit`: 메세지 헤더 + 바디로 구성 가능
    - 1 + 2 : `git commit -am {filenames} "{message}"`
3. `git push origin {branchname}`

#### 브랜치 합치기
1. `git checkout master`
2. `git merge {branchname}`

### 협업하기

#### 1. 로컬 컴퓨터에 프로젝트 셋업
fork & pull 모델 사용
1. 레포 `fork`
2. 로컬 컴퓨터에 `clone`
3. 로컬에서 본래 레포 링크 설정: `git remote add upstream {original_repo_url}`

#### 2. 브랜치 만들어 작업
반드시 다른 branch의 작업이 해당 branch에도 저장되지 않게끔 조심할 것!
- 새 브랜치를 만들어서 작업하기: `git branch {name}` + `git checkout {branchname}`
- fork된 레포에서 브랜치 가져오기: `git checkout --track origin/{branch}`

#### 3. 코드 추가와 커밋
Don’t push your work until you’re happy with it
- 해당 브랜치에서 코드 추가 및 변경 + 커밋

#### 4. 오리지널 레포에 수정사항 반영
don't do a pull request w/o fully checking the bottom part of which code changes should be applied
1. 먼저 오리지널 레포의 변화 가져오기: `git fetch upstream` + `git rebase upstream/master`
2. github 레포에서 `pull request` 버튼 누르기

#### 5. 브랜치 삭제
- 로컬 컴퓨터에서 삭제 후 반영하기
    - `git branch -d {branchname}` + `git push origin -d {branchname}`
- github 레포에서 바로 삭제하기

### 커밋 관리

#### 커밋 삭제
- `git rebase -i HEAD`

#### 가장 최근 커밋 상태로 돌아가기
- `git reset --hard HEAD`