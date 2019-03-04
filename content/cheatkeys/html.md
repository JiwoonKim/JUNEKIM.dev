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
- __DOM (Document Object Model)__: 페이지의 __구조__ 를 만드는 것이 HTML의 중요 포인트
- <html> 내의 내용을 <head>와 <body>로 페이지 나누어 구성

#### 자주 사용되는 tag 종류 
- `<head></head>`: content 보다는 data 및 __특정정보__ 를 담는다
  - `<title></title>`
  - `<meta charset=”utf-8”>`  
  - __css style 정의__: `<style></style>`
  - __javascript 정의__: `<script></script>`
  - 따로 파일을 링크 걸 때 (예: external style sheet 사용): `<link></link>`

- `<body></body>`: 페이지의 __content__ 를 담는다
  - __텍스트__: `<h{숫자}></h{숫자}>`, `<p></p>`, `<div></div>`, `<span></span>`, `<br>` 
  - __그룹화__: `<div></div>`, `<span></span>`
    - __semantic HTML 사용하기__
  - __도표__: `<table></table>`, `<th></th>`, `<tr></tr>`, `<td></td>` 
  - __리스트__: `<ul></ul>`, `<ol></ol>`, `<li></li>`  
  - __이미지__: `<img src=”{이미지.파일}”>`
  - __하이퍼링크__: `<a ref=”{링크}”>`  
  - __그외__: `<form></form>`, `<input></input>`, `<button></button>`  

#### 의미론적 HTML (semantic HTML)
- HTML5 새 tag: https://www.w3schools.com/html/html5_new_elements.asp 
- 의미가 없는 <div>나 <span> 대신 의미를 부여하여 새로운 tag들 사용하기

### 참고자료
- https://opentutorials.org/course/3084 (생활코딩 html)
- https://www.w3schools.com/html/ (w3schools html)