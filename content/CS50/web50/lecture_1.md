---
path: "/web50/lecture_1"
date: '2018-07-19'
title: "Web50 lecture 1 - HTML & CSS"
description: CS50 Web Programming with Javascript and Python lecture 1 정리
image: ''
tags: ['CS50', 'Web50', '강의노트', '웹개발', 'html', 'css']
---
> Harvard's Web Programming with Python and Javascript lecture 1 정리

### HTML
- laying out the structure of the website: __DOM (Document Object Model)__
- links: can direct to different file, to a different webpage, to a different place on the same webpage(specific #id)

#### HTML5 new features (very useful!)
- new elements: `<header>`, `<nav>`, `<section>`, `<footer>`, `<audio>`, `<video>`, `<datalist>` (use w/ < input>)
- new attributes: `contentedible`
- but, browsers must support newer features to use (_older browsers may not support them_)

### CSS
- __CSS Selectors__: tags, ids, classes 사용가능.
- specific ways of selecting:
    - selecting __descendants__ (all): 
        - `ul li { color: red; }`: selects all descendants according to DOM
    - selecting __immediate children__: 
        - `ul > li { color: red; }`
    - selecting __by attributes__: 
        - `input[type=text] { color: red; }`: selects input types of text
- select __pseudo-wise__:
    - __pseudo class__ (to select a _certain state_): `button: hover { color: red; }`
    - __pseudo element__ (to affect _certain parts of an HTML element_): 
        - `p::selection { color: red; }`: when highlighted (select and drag), the text color turns red
        - `a::before { content: "\21d2 Click here"; }`: prepend => before contents of links

### Responsive Design
the idea that a website should look good regardless of the platform it is viewed from

__ways to make responsive design__
1. __media query__(`@media`): assigning CSS to a particular HTML element on a particular type of media
```css
@media print {
    #paragraph { display: none; }
}
// if printing, render that selector invisible
```
```css
@media (min-width: 400px) {
    body { background-color: blue; }
}
@media (max-width: 399px) {
    body { background-color: red; }
}
// if display device larger than 400px, blue
// else smaller, red
```

2. __view port__: visiable area of the device
    - commonly used in combination with media query!
    - w/o the viewport tag, the contents simply shrink by device size (text might be too small)
    - with the viewport tag, the contents match the device with consideration to user experience
```html
<meta name="viewport" content="width=device width, initial-scale=1.0">
// the content matches the device size by setting the zoom level
```

3. __flexbox__: allows for the reorganization of content based on the size of the viewport
    - 화면 크기에 따라 배치를 다르게 하는 방법, not changing the scale
```css
#box { 
    display: flex; 
    flex-wrap: wrap;
}
// contents will be reorganized so that no contents are lost when screen is shrunk
```
4. __grid__:
```css
#grid {
    display: grid;
    grid-template-columns: 200px 200px auto;
}
```

__But__, these get complicated since every instances' style must be set

__So__ make use of __CSS Libraries__!

### Bootstrap
CSS library written to help make clean, responsive, and nice-looking website w/o having to remember the gritty details everytime a layout needs to be setup
- Use: include link to Boostrap's CSS stylesheet
- it's real power is in its __layout system__
    - Boostrap uses a column based model (where every row in a website is divided into 12 columns)
    - use reference to special classes in Bootstrap: `class="row"` or `class="col-#`
- documentation: https://v4-alpha.getbootstrap.com/

### Sass
an entirely new language built on top of CSS to give more power and flexibility when designing CSS stylesheets and allows generating stylesheets in a programmatic way.
- install: must install Sass to use it ore rely on GitHub to do it for you
- compile: `sass style.scss style.css` (compile sass file to css file)
    - automate compile by `sass --watch style.scss : style.css` (when modified, compiles automatically)
- syntax:
    - define variables for styles
```scss
$color: red;
p { color: $color; }
```
    - enables nested selectors: more concise way to style elements
```scss
div {
    font-size: 18px;
    p { 
        color: blue; 
    }
    ul {
        color: green;
    }
}
```
    - enables inheritance: general style + tweaking
```scss
%message {
    font-family: sans-serif;
    font-size: 18px;
}
p {
    @extend %message;
    background-color: green;
}
```