---
path: "/frontend/7"
date: '2018-03-05'
title: "Frontend Focus 07 - CSS"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'css']
---

> understanding CSS

- [reference](https://internetingishard.com/)

### CSS
- provides __presentational information__ of how the content is presented to the user
- it defines the __design__ of your page, determining things like font size, margins, colors, etc.

#### CSS Hierarchy 
in rendering order: the lower orders override previous ones
- the browser's default stylesheet
- user-defined stylesheets
- external stylesheets (.css file)
- page-specific styles (< style> within html)
- inline styles

#### Units of Measurement
- __px__: pixel
    - use for __spacing and layout__
    - not for font-size since it is not responsive
- __em__: sizes _relative to parent_'s unit
- __rem__: sizes _relative to root html_ element's unit
    - use for font-size and spacing (margin and padding)

#### Selectors
- 

#### Layouts (Block & Inline elements)
- __Block__:
    - width: automatically set to width of parent container
    - height: based on the content it contains
    - __box model__: set of rules that determine the dimensions of every element (both inline and block) in a web page
        - margin collapses: tip is to _stick to a bottom-only or top-only margin convention_
        - use `box-sizing: border-box;` to automatically include border size into the overall width
        - alignment: __auto-margin__ for center alignment, __floats__ for left/right alignment, __flexbox__ for complete control over alignment
- __Inline__:
    - width: based on the content it contains
    - height: don't affect vertical spacing
- __Overriding default display__: set `display` property


#### Floats

#### Flexbox

#### Advanced Positioning