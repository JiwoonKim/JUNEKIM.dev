---
path: "/cheatkeys/css"
date: '2018-01-31'
title: "[CSS] 치트키 정리"
description: CSS 치트키 정리
image: ''
tags: ['css', '치트키']
---
> CSS 언어로 프로그래밍할 때 필요한 치트키들을 정리.
> 개인적인 자주 사용하는 문법을 반영하여 만든 치트키입니다.

### CSS
- Cascading Style Sheet의 약자
- HTML 태그에 스타일 입히기

#### CSS 적용 방법
- 3가지 방법 (점점 코드를 분리해나가면서 불필요한 중복을 피하고 수정 시 더 효율적임)
1. `In-line style`
  - html 태그 내에 일일히 스타일 명시
```html
<p style=”color: red;”></p> <!-- 텍스트의 글씨를 빨간색으로-->
```

2. `Internal style sheet`
  - <head> 부분에 따로 <style></style> 태그를 만들어서 그 안에 모든 스타일 명시
  - body에서는 페이지 구조만 정의하고 스타일은 명시하지 않는 방법
  - 여러 tag에 같은 스타일을 적용하기도 편함 (다른 방법: class와 id를 적용하기)
```html
<style>
	p { color: red; }
    h1, h2, p { color: red; }
</style>
```
3. `External style sheet`
  - 따로 아예 파일을 빼놓기
  - 다른 html 파일에서 같은 스타일 사용할 때 사용하기 용이
  - 스타일을 수정할 때 html 파일은 건드리지 않고 css 파일만 바꾸면 되어 편함
  - 사용시 적용하는 html 파일의 <head> 부분에 link 추가하고 css
```html
<link rel=”stylesheet” type=”text/css” href=”{스타일파일}.css”>
```
  - 만든 css 파일 내에는 2번 방법과 동일하게 정의 (단, style 태그는 제외)
```css
h1, h2, p { color: red; }
```

#### Selector 사용하기
- 일부분만 스타일 적용하기 (위의 2번 또는 3번 방법과 같이 사용)
- Selector란 특정 tag를 가르키는 것들: tag자체, #id, .class, etc.
- `#Id`: 오직 한 특정 태그에만 적용하면서 동일한 종류의 태그에는 적용하지 않는 방법
  - ex) <p> 태그가 세 개나 있는데 어떤 특정한 <p> 태그에만 스타일 적용하고 싶을 때
해당 태그에다가 <p id=”red_color”> id를 정의한 후, 
stylesheet에서는 #red_color { color: red; } 정의하면 (#중요!)
id가 있는 태그에만 스타일 적용됨.

	.Class: 한 번에 특정한 여러 태그에만 스타일을 적용하는 방법
	태그의 종류와 상관없이 class로 정의된 모든 태그에 스타일 적용가능
   		  ex) <p> 태그가 세 개 중 두 개와 <div> 태그에도 스타일 적용하고 싶을 때
태그들에다가 <p class=” red_color”> 또는 <div class=” red_color”> 한 후,
stylesheet에서는 . red_color { color: red; } 정의하면 (.중요!)
class가 있는 태그에만 스타일 적용됨.
	한 태그 내에 여러 class가 정의될 수 있음
ex) <p class=” red_color  myfont”>

※ Specificity: 태그 자체, id, class 등 여러 스타일이 정의된 상태에서 스타일이 충돌 시 우선순위가 높은 selector가 최종적으로 적용됨. 즉, 더 자세히 정의된 selector의 스타일이 적용됨.

#### 자주 사용되는 스타일 종류 (+예시)
- fonts
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
- background color
```css
{ background-color: alice-blue; }, { background-color: #845EC2; }, { background-color: rgba(250, 235, 215, 0.5);
```
- background image
```css
{ background-image: url(dog.jpeg); }
```
- background size
```css
{ background-size: cover; }
```
- width & height: 
```css
{ width: 200px; }, { height: 50px; }
```
- max-width
```css
{ max-width: 500px; } /* 해당 tag내의 내용물이 width보다 더 길면 height가 자동으로 늘어남 */
```
- box
```css
{ border-width: 1px; border-style: solid; border-color: red; }, 
{ border: 1px solid red; } 
```
- margin
```css
{ margin: 25px; }, { margin-top: 50px; }, { margin-left: 30px; },
{ margin: 50px 25px 25px 30px; } /* 시계방향으로: top-right-bottom-left 정의 */
```
  - margin-top과 margin-bottom은 다른 element의 margin과 overlap 될 수 있기에 주의! (block display 특징)
  - margin-right과 margin-left는 다른 element의 margin과 overlap 되지 않음.
- padding
```css
{ padding: 25px; }, { padding -top: 50px; }, { padding -left: 30px; },
{ padding: 50px 25px 25px 30px; } /* 시계방향으로: top-right-bottom-left 정의 */
```
  - padding은 어떤 경우에도 overlap 되지 않음.
- box shadow
```css
{ box-shadow: 0 6px #bbb; }
```
- unordered list
```css
{ list-style-type: circle; }, {list-style-type: square; }
```
- ordered list
```css
{ list-style-type: upper-roman; }, {list-style-type: lower-alpha; }
```
- table: box 스타일들 적용가능. 
```css
{ box-collapse: collapse; }
```
  - row를 tr:nth-child(even) 방법으로 selector 지정도 가능.
- links: box 스타일 적용하여 button처럼 표현도 가능
  - selector를 특별하게 설정할 수 있음: a: link, a: visited, a:hover, a:active
```css
a:link { color: red; }
```
- opacity/transparency
```css
{ opacity: 1.0; }, { opacity: 0.5; }
```

#### Grouping
- 페이지의 section을 나눌 때 <div>나 <span> 태그를 사용하여 태그들을 group으로 묶음.
  - DOM 구조를 만드는 것. 묶으면 구조의 hierarchy에 따라 스타일들이 적용됨.
```css
<div>
    <p> abcd </p>
	<p> efgh</p>
</div> 
```

#### Display mode 
- block vs. inline vs. inline-block

##### Block
- 한 element 당 한 row 전체를 사용함 (그 다음 element는 줄 바꿔서 사용)
- 크기가 있음.
- Default가 block display인 태그:
<div>  <h{숫자}>  <p>  <ul>  <ol>  <li>  <table>  <hr>  
<form>  <header>  <footer>  <main>  <section>  <nav>
- Display를 따로 지정하는 방법: { display: block; }

##### Inline
- 여러 element가 row를 나눠 사용 (줄 바꿈 없음; 그 다음 element 바로 옆에 붙음)
- 선을 삐죽 튀어나와 다른 element와 overlap 될 수도 있는 문제.
- 자체적인 크기 지정 불가능: 자신이 포함하고 있는 내용물의 크기에 자동으로 맞춤.
- Default가 inline display인 태그:
<a>  <img>  <button>  <input>  <span>  <textarea>  <br>
- Display를 따로 지정하는 방법: { display: inline; }

#####Inline-block
- 한 줄 (block) 내에 inline element들을 나열할 수 있는 방법
- 한 줄에 한 element만 표현할 수 있는 block display와 element들이 위아래로 overlap될 수 있는 inline display의 문제점들을 보완한 방법
- 따로 지정 by: { display: inline-block; }
- ※ 개인적으로 block과 inline-block가 유용한 것 같음.

#### Layout ( Grid 또는 Flexbox 사용하기 )
- Layout을 더 간편하게 만들 수 있는 방법들.
- Grid: (그리드 가든 게임으로 연습하기) https://cssgridgarden.com/#ko 
- Flexbox: (개구리 게임으로 연습하기) https://flexboxfroggy.com/#ko 

#### Responsive Design 만들기 (@media query 사용하기)
- 웹 페이지의 폭의 길이에 따라 화면의 배치가 반응하여 알아서 조정
- 브라우저 width에 따라 style이 달라지게끔 만들기
- @media를 사용하여 길이 condition을 적용하여 조정
```css
div { width: 300px; }
@media(min-width: 600px) {
	div { width: 650px; }
}
/* 브라우저 width가 600보다 큰 경우 -> div의 width 650px 고정
	                       작은 경우 -> div의 width 300px 고정 
*/
```

#### 그외: CSS transform, transition, perspective, animation, position 등

#### 참고자료
https://opentutorials.org/course/3086 (생활코딩 css)
https://www.w3schools.com/css/default.asp (w3schools html)