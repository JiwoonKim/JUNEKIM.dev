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
- __type selector__: specify the tag
- __class__: use `.class` attribute
    - by far the __most versatile__ and come w/ the least amount of drawbacks
    - standard naming convention to use _all lowercase and hyphens_
- __id__: use `#id` attribute
    - __can't reuse the styles at all__ so generally the use of it is frowned upon; use classes instead
- __pseudo-class__: use stateful information
    - ex. `:link`, `:visited`, `:hover`, `:active`, `:last-of-type`

#### CSS Specificity
not all CSS selectors are created equal
- __specificity order__ (the higher, it overrides others)
    - id
    - pseudo-class
    - class
    - type selector (tag)
- [__BEM__](http://getbem.com/introduction/): attempts to make CSS rules more resuable by making _everything a class selector_, which _eliminates potential for specificity issues_

#### Box Model (every element)
set of rules that determine the dimensions of every element (__both inline and block__) in a web page
- margin collapses: tip is to _stick to a bottom-only or top-only margin convention_
- alignment: __auto-margin__ for center alignment, __floats__ for left/right alignment, __flexbox__ for complete control over alignment
- it's good practice to __override browser's default__ styles
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

#### Layouts (Block & Inline elements)
- __Block__:
    - width: automatically set to width of parent container
    - height: based on the content it contains
- __Inline__:
    - width: based on the content it contains
    - height: don't affect vertical spacing
- __Overriding default display__: set `display` property

#### Floats

#### Flexbox

#### Advanced Positioning