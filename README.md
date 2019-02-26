# 개발 공부 로그
공부한 내용을 정리하는 블로그

## Developed With
- ReactJS (client-side)
- [GatsbyJS](https://github.com/gatsbyjs/gatsby) (Server-side rendering)
- PrismJS (code block syntax highlighting)

## 블로그 포스트 작성
- `content` 폴더 내에 `마크다운 (.md)` 파일 작성
- (폴더 새로 생성 후 파일 작성도 가능)
-  다음과 같은 내용 반드시 포함시키기

```markdown
---
path: "/패스지정" // 파일이 어떤 폴더에 있든 이 패스만 있으면 알아서 블로그에 링크됨
date: '2018-01-14' // 날짜
title: 제목
description: 짧은 설명
image: ''
tags: ['태그1','태그2','태그3'] // 원하는 태그 달아주기
---

여기에 내용 작성

```
## 이미지 추가
- 

## 코드 블록 사용
- 포스트 내에서 코드 블록 사용시 구체적인 언어는 [여기](https://prismjs.com/#languages-list) 참고하여 사용하기

## 블로그 업데이트
- 블로그의 설정 또는 포스트 등에 대한 추가, 수정, 삭제 등의 변화가 있다면 
- 1. 먼저 `master branch로 push`한 후
- 2. `npm run deploy`하여 gh-page branch에 public 폴더의 contents를 업데이트.

## 코드 블록 theme 설정 변경
- `gatsby-browser.js` 파일에서 theme 파일 변경하기.
