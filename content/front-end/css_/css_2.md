---
path: "/css/2"
date: '2019-01-31'
title: "CSS 02 - 자주 사용하는 스타일 종류"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'CSS']
---
> 개인적인 자주 사용하는 스타일들을 정리

### 글자
- font basics
```css
{ font-family: Arial, Helvectica, sans-serif; }
{ font-size: 12px; }, { font-size: 250%; }
{ font-weight: bold; }
{ font-style: italic; }
```
- text-align
```css
{ text-align: center; }, { text-align: left; }, { text-align: justify; }
```
- text shadow
```css
{ text-shadow: 1px 1px red; }, { text-shadow: 2px 2px 5px red; }
```
- color
```css
{ color: blue; }, { color: #845EC2; }
```

### Background
- background color
```css
{ background-color: alice-blue; }, { background-color: #845EC2; }, 
{ background-color: rgba(250, 235, 215, 0.5);
```
- background image
```css
{ background-image: url(dog.jpeg); }
```
- background size
```css
{ background-size: cover; }
```

### Size
- width & height: 
```css
{ width: 200px; }, { height: 50px; }
```
- max-width
```css
{ max-width: 500px; } 
/* 해당 tag내의 내용물이 width보다 더 길면 height가 자동으로 늘어남 */
```

### 테두리 & 여백

#### box
```css
{ border-width: 1px; border-style: solid; border-color: red; }, 
{ border: 1px solid red; } 
```
- box shadow
```css
{ box-shadow: 0 6px #bbb; }
```

#### margin
```css
{ margin: 25px; }, { margin-top: 50px; }, { margin-left: 30px; },
{ margin: 50px 25px 25px 30px; } /* 시계방향으로: top-right-bottom-left 정의 */
```
  - margin-top과 margin-bottom은 다른 element의 margin과 overlap 될 수 있기에 주의! (block display 특징)
  - margin-right과 margin-left는 다른 element의 margin과 overlap 되지 않음.

#### padding
```css
{ padding: 25px; }, { padding -top: 50px; }, { padding -left: 30px; },
{ padding: 50px 25px 25px 30px; } /* 시계방향으로: top-right-bottom-left 정의 */
```
- padding은 어떤 경우에도 overlap 되지 않음.

### List
- unordered list
```css
{ list-style-type: circle; }, {list-style-type: square; }
```
- ordered list
```css
{ list-style-type: upper-roman; }, {list-style-type: lower-alpha; }
```

### Table (표)
- table: box 스타일들 적용가능. 
```css
{ box-collapse: collapse; }
```
- row를 tr:nth-child(even) 방법으로 selector 지정도 가능.

### 그외

#### Links
- box 스타일 적용하여 button처럼 표현도 가능
- pseudo-selector와 함께 사용: a: link, a: visited, a:hover, a:active
```css
a:link { color: red; }
```

#### Opacity / Transparency
```css
{ opacity: 1.0; }, { opacity: 0.5; }
```

#### 참고자료
https://opentutorials.org/course/3086 (생활코딩 css)
https://www.w3schools.com/css/default.asp (w3schools html)