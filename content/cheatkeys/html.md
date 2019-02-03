---
path: "/cheatkeys/html"
date: '2018-01-30'
title: "[HTML] 치트키 정리"
description: HTML 치트키 정리
image: ''
tags: ['html', '치트키']
---
> HTML 언어로 프로그래밍할 때 필요한 치트키들을 정리.
> 개인적인 자주 사용하는 문법을 반영하여 만든 치트키입니다.

### HTML
- Hyper-text Markup Language의 약자
- __DOM (Document Object Model)__: 페이지의 __구조__를 만드는 것이 HTML의 중요 포인트
- <html> 내의 내용을 <head>와 <body>로 페이지 나누어 구성

#### 자주 사용되는 tag 종류 
- `<head></head>`: content 보다는 data 및 특정정보를 담는다
  - `<title></title>`
  - `<meta charset=”utf-8”>`  
  - css style 정의: `<style></style>`  
  - javascript 정의: `<script></script>`
  - 따로 파일을 링크 걸 때 (예: external style sheet 사용): `<link></link>`

- `<body></body>`: 페이지의 content를 담는다
  - 텍스트: `<h{숫자}></h{숫자}>`, `<p></p>`, `<div></div>`, `<span></span>`, `<br>` 
  - 그룹화: `<div></div>`, `<span></span>`
  - 도표: `<table></table>`, `<th></th>`, `<tr></tr>`, `<td></td>` 
  - 리스트: `<ul></ul>`, `<ol></ol>`, `<li></li>`  
  - 이미지: `<img src=”{이미지.파일}”>`
  - 하이퍼링크: `<a ref=”{링크}”>`  
  - 그외: `<form></form>`, `<input></input>`, `<button></button>`  

#### 의미론적 HTML (semantic HTML)
- HTML5 새 tag: https://www.w3schools.com/html/html5_new_elements.asp 
- 이 부분 포함해서 전체 다시 정리

#### 참고자료
- https://opentutorials.org/course/3084 (생활코딩 html)
- https://www.w3schools.com/html/ (w3schools html)