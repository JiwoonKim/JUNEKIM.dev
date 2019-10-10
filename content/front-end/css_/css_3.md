---
path: "/css/3"
date: '2019-03-05'
title: "CSS 03 - 레이아웃 (Layouts)"
description: 
image: ''
tags: ['프론트엔드', 'CSS']
---
> understanding CSS
> - [reference](https://internetingishard.com/)

### Layouts
the fundamental task of laying out a page is just __moving a bunch of nested boxes around__
- __box model__ (all elements)
- __block__ vs __inline__ elements
- __floats__ (horizontal layout)
- __flexbox__ (full control)
- __grid__
- __advanced positioning__

(when given a design mockup to implement, first __draw a bunch of boxes__, __determine how they're supposed to stack, stretch, and shrink__ to achieve the desired design
, and __then code__)

### Box Model
set of rules that determine the dimensions of __every element__ (_both inline and block_) in a web page
- all elements have _border, margin, and padding_
- margin collapses: tip is to __stick to a bottom-only or top-only margin convention__
- alignment: __auto-margin__ for _center alignment_, __floats__ for _left/right alignment_, __flexbox__ for _complete control over alignment_
- it's good practice to __override browser's default__ styles
```css
/* good practice for default styles*/
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
}
/* sets box sizes to include the border size*/
```

### Block & Inline elements
- `Block`:
    - __width__: automatically set to _width of parent container_
    - __height__: _based on the content_ it contains
    - __align__: __floats__ _for left/right_, __auto-margins__ _for center_
    - Default가 block display인 태그: `<div>`, `<h{숫자}>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<hr>`,  
`<form>`, `<header>`, `<footer>`, `<main>`, `<section>`, `<nav>`
- `Inline`:
    - __width__: _based on the content_ it contains
    - height: __don't affect vertical spacing__ (may vertically overlap)
    - __align__: use __text-align__
    - Default가 inline display인 태그: `<a>`, `<img>`, `<button>`, `<input>`, `<span>`, `<textarea>`, `<br>`
- `Inline-block`:
    - like inline but w/o vertically overlapping problem

### Floats
`float` gives control over the __horizontal position__ of an element 

#### Float Element :
- __aligns__ the element `left` or `right` of their parent element
- __stack things horizontally__
- if not enough room, it __automatically pops down to next line__

#### Surrounding Elements: 
- __flow around__ float
- __no contribution to the height__ of their container element
    - bcuz floated boxes are removed from normal flow of the page
- vertical layout might not be as expected

#### incorporate floats into the height of their container
- `clear`: forcing elements to ignore floats
    - used for __elements after floats__ within the same container 
- `overflow`: make it recognize the height of any floated element it contains
    - used for the __container containing floats__

그림 추가하기 from link below of (clear and overflow image)
- [example & detailed explanation](https://internetingishard.com/html-and-css/floats/)
```css
/* use overflow to recognize heights of floats */
.middle {
        overflow: hidden;
}
/* use floats to align horizontally */
.sidebar {
        float: left;
        width: 20%;
}
.content {
        float: left;
        width: 80%;
}
/* use clear to align back vertically*/
.footer {
        clear: both;
}
```
float-based layouts have mostly been __replaced w/ Flexbox in modern websites__

### Flexbox
__flexbox__ is an alternative to Floats for defining the layout
- gives __complete control__ over _alignment, direction, order, and size of the boxes_
- __use flexbox to layout as much as possible__, __reserving floats for__ when you need text to flow around a box (like a __magazine__)
- [개구리 게임으로 연습하기](https://flexboxfroggy.com/#ko)

#### Flex Container:
- set `display: flex` __to container__
- __align items horizontally__: `justify-content` property to container
    - `center`, `flex-start`, `flex-end`
    - `space-around`, `space-between`
- __align items vertically__:  `align-items` property to container
    - `center`, `flex-start`, `flex-end`
    - `stretch`(create equal-height columns), `baseline`
- __wrap flex items__: `flex-wrap`
    - w/o wrap, flex-items 컨테이너 밖으로 튀어나올 수 있음
- __render items direction__: `flex-direction`
    - default horizontal: `row`, `row-reverse`
    - vertical: `column`, `column-reverse`
    - beware that the direction changes:
    - flex direction alignment 관련 이미지 추가 from [here](https://internetingishard.com/html-and-css/flexbox/)
    - very __useful for responsive design__

```css
/* flexbox containing grid centers grid on page */
.grid-container {
    display: flex;
    justify-content: center;
}
/* flexbox for grid: centers and wraps items */
.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
```

#### Flex Items:
- __set order of an item__: `order`
    - default value: `0`
    - __increase__ to move item to the _right_
    - __decrease__ to move item to the _left_
- __change the vertical alignment of an item__: `align-self`
    - __overrides__ the align-item value from its container
    - `center`, `flex-start`, `flex-end`, `stretch`, `baseline`
- __flex individual items__: `flex: #` or `flex: initial`
    - gives full control over __how flex items fit into their containers__
    - justify-content merely distributes space _between_ items
- __dividing flex items in a container__: `margin: auto`
    - alternative to an extra < div> when aligning a group of items to left/right of a container

### Grid
- 
- [그리드 가든 게임으로 연습하기](https://cssgridgarden.com/#ko)

#### Grid Container
- set `display: grid` __to container__
- __make columns__: `grid-template-columns` to container
    - units: pixels, percentage, auto
    - use `fr` unit to __specify ratio while making it responsive__
        - ex. `grid-template-columns: 1fr 1fr 2fr`
        - ex. `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
    - use `repeat()` to simplify specification
        - ex. `grid-template-columns: repeat(3, 1fr)`
- __make rows__: `grid-template-rows` to container
- __set gap__: `grid gap`
- __align items horizonally__: `jusitfy-items`
- __align items vertically__: `align-items`
- __push items to one side__: `grid-column-start` & `grid-column-end` (`grid-column`)
```css
.container {
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 30% 30% auto;
    /* min 200 보다 작으면 그냥 1 item으로 가로채우고
    1 item보다 크기가 크면 화면 크기 맞추어서 flexbox처럼 다른 item들 나열 */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* 균일한 grid가 아닌 둘쑥날쑥한 layout 원할 시에 */
    grid-column-start: 1/3;
    grid-column: span 2; /* 같은 효과 */
}
```

### Advanced Positioning
to _gently tweak element positions_ or _animate a UI component w/o messing up the rest of the page_
- __static positioning__: _normal flow_ of page
    - box model, floats, and flexbox
- __other positioning schemes__: use `position` property
    - _relative_
    - _absolute_
    - _fixed_

#### Relative positioning 
- `relative`: _relative to an element's own normal position_
    - useful to _nudge boxes_ around when the default flow is just a little bit off
    - also used as an _anchor for absolutely positioned elements_
- use:
    - implement `position: relative` to element
    - __define offset__: `top`, `bottom`, `left`, `right` or use _negative values_

#### Absolute positioning
- `absolute`: _relative to entire browser window_
    - if __closest container is relatively positioned__, the absolute positioned element is relative to that instead of the browser window
- use:
    - implement `position: absolute` to element
    - no need for defining offsets

#### Fixed positioning
- `fixed`: _relative to the entire browser window_ but __doesn't change position even when scrolled__
    - useful for navigation bars or pop-up banners to always stay on the screen
- use:
    - implement `position: fixed` to element
    - __define offset__: `top`, `bottom`, `left`, `right` or use _negative values_

#### Z-index
- `z-index`: can control the __depth of elements__ on the page (__overlapping__)
- must __set a position__(_relative, absolute, fixed_) __other than static__ to acknowledge z-index property
- set value for z-index
    - default value is 0
    - __positive__ z-index: _pops out of the page_
    - __negative__ z-index: _farther back into the page_

#### Positioned elements for Animation
- animation is one of the primary use cases for relative and absolute positioning
- combine css positioning and javascript