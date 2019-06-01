---
path: "/css/4"
date: '2019-03-05'
title: "CSS 04 - Practice Simple Layout"
description: 
image: ''
tags: ['프론트엔드', 'CSS']
---
> understanding CSS
> - [reference](https://internetingishard.com/)

### Practice making a Menu

#### Navigation Menu
- should almost always be __marked up as a < ul> list__
    - these semantics make the site's navigation much _more accessible to search engine_
```html
<ul class='menu'>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Subscribe</a></li>
</ul>
```
- set the __< li> items as inline boxes__: `display: inline`
    - use child selectors `>` to only select the direct < li> items under the menu
```css
.menu > li {
            display: inline;
            margin-right: 0;
}
.menu > li:last-of-type {
            margin-right: 0;
}
/* common technique for creating margins between items */
/* (tweak margins when you can't use flexbox) */
```

#### Drop Menu
- __create a nested list__
    - _within a navigation menu_, drop menu lives
    - this way Google can see the drop menu items associated w/ the < span> label
- __add a `class` attribute and `< span>` for the dropdown < li>__ to _differentiate the label from the submenu_ (dropdowns) it reveals
```html
<ul class='menu'>
    <!-- where other menu items are (part of navigation menu)-->
        <li class='dropdown'><span>Categories ▾</span>
            <ul class='categories-menu'>
                <li><a href='#'>Travel</a></li>
                <li><a href='#'>Lifestyle</a></li>
                <li><a href='#'>Quotes</a></li>
            </ul>
        </li>
    <!-- where other menu items are (part of navigation menu)-->
</ul>
```
```css
/* use hover pseudo-class to hide and show dropdown menu*/
.categories-menu {
    display: none;
}
.dropdown:hover .categories-menu {
    display: flex;
    flex-direction: column;
}
/* border to draw lines between items */
.categories-menu li {
    list-style: none;
    border-bottom: 1px solid black;
}
.categories-menu li:last-of-type {
    border-bottom: none;
}
```