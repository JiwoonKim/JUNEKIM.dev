---
path: "/css/1"
date: '2019-03-05'
title: "CSS 01 - Basics"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'css']
---
> understanding CSS
> - [reference](https://internetingishard.com/)

### CSS
- Cascading Style Sheet의 약자
- html 태그에 __스타일__ 을 입히는 것이 CSS의 중요 포인트

#### CSS 적용 방법
점점 코드를 분리해나가면서 불필요한 중복을 피하고 수정 시 더 효율적임
1. __In-line style__: html 태그 내에 일일히 스타일 명시
```html
<p style=”color: red;”></p> <!-- 텍스트의 글씨를 빨간색으로-->
```
2. __Internal style sheet__: < head> 부분에 따로 < style></ style> 태그를 만들어서 그 안에 모든 스타일 명시
```html
<style>
	p { color: red; }
    h1, h2, p { color: red; }
</style>
```
3. __External style sheet__: 따로 아예 파일을 빼서 스타일을 정의하여 link로 연결 (재사용성 용이)
```html
<link rel=”stylesheet” type=”text/css” href=”{스타일파일}.css”>
```
```css
h1, h2, p { color: red; }
```

### Selectors
- __type selector__: specify the tag
- __class__: use `.class` attribute
    - by far the __most versatile__ and come w/ the least amount of drawbacks
    - standard naming convention to use _all lowercase and hyphens_
- __id__: use `#id` attribute
    - can't reuse the styles at all so generally the use of it is frowned upon; __use classes instead for styles__
- __pseudo-class__: use stateful information
    - ex. `:link`, `:visited`, `:hover`, `:active`, `:last-of-type`

### CSS Specificity
not all CSS selectors are created equal
- __specificity order__ (the higher, it overrides others)
    - id
    - pseudo-class
    - class
    - type selector (tag)
- [__BEM__](http://getbem.com/introduction/) : attempts to make CSS rules more resuable by making _everything a class selector_, which _eliminates potential for specificity issues_

### Units of Measurement
- __px__(pixel): 
    - for __spacing and layout__; not for font-size since it is not responsive
- __em__: sizes _relative to parent_'s unit
- __rem__: sizes _relative to root html_ element's unit
    - use for font-size and spacing (margin and padding)