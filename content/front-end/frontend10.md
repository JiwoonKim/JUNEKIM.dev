---
path: "/frontend/10"
date: '2019-03-10'
title: "Frontend Focus 10 - Web Typography"
description: 
image: ''
tags: ['웹개발', '프론트엔드', '디자인', '타이포그라피']
---
> Understanding Web Typography

### Web Typography
appearance of all the text on a website
- [Professional Font Recommendations](https://practicaltypography.com/font-recommendations.html)

#### Web Fonts
- __Web Safe Fonts__: pre-installed fonts on most computers
- __Custom Web Fonts__: each browser/device required different file formats (4 different web font files)
    - browsers began supporting custom web fonts since 2010
    - _.svg, .eot, .ttf, .woff_
    - resulted in `@font-face` syntax to _source for all 4 type_s of font file formats
- __WOFF Fonts__: Web Open Font Format (WOFF) _as industry standard_
    - woff and woff2

#### Font Families and Font Faces
- a single __font family__ is made up of multiple __font faces__
    - difference in _weight_ or _style_ (roman, italic, condensed, extended, etc.)
    - if multiple faces are not offered or supported, the browser tries to _fake it_ by __auto-conversion__
        - results in __low-quality typography__
- __weights__:
    - boldness: _100 ~ 900_ (not all weights are supported in a single family)
    - standard weights:
        - _regular = 400_
        - _bold = 700_
        - _black = 900_

#### Adding Fonts to a Website
externally hosted web fonts are a quick and easy solution, but professional sites should typically use locally hosted web fonts (for flexibility, performance, and reliability)
1. adding a __locally hosted web font__
    1. download web font (in __.woff__) and add it to project file
    2. embed the web font w/ `@font-face` at the _top of the stylesheet_
    3. use font
```css
/* define multiple faces under the same family */
@font-face {
  font-family: 'Roboto';
  src: url('Roboto-Light-webfont.woff') format('woff');
  font-style: normal;
  font-weight: 300;
}
@font-face {
  font-family: 'Roboto';
  src: url('Roboto-LightItalic-webfont.woff') format('woff');
  font-style: italic;
  font-weight: 300;
}
```
2. adding an __externally hosted web font__
    - `<link>` the stylesheet (which defines the font family via @font-face within it)

### Basic Typographic Principles
simple guidelines that often make the __difference btw a professional web page and an amateur one__

#### Paragraph Indents
_separating paragraphs_ from one another by using either of the two solutions (but _never both_)
1. __First-line Indents__: `text-indent`
    - first paragraph should never be indented: `:first-of-type`
2. __Margin btw Paragraphs__

#### Text Alignment
_making it easier_ for users _to read_ content _by giving ppl's eyes an anchor to jump to_ when they move from line to line
- __Left Alignment__:
    - __most of the text__, especially _long texts_, should be left-aligned bcuz it gives the reader a _vertical anchor_ to jump back to on every line
- Center Alignment:
    - _short line lengths, poems, lyrics, and headings_
- Right Alignment:
    - only for specific reasons (ex. caption or layout)
- Justified Text:
    - subtly adjusting the space between words/letters so that each line is same width
    - _must have a high-quality hyphenation engine_ or else akwardly spaced and hard to read
    - _better off avoiding_ in HTML documents

#### Vertical Text Spacing
space between text using _margin, padding, and line-length_
to control the vertical rhythm of a web page
- _general principles_:
    - give things __enough space__ to breath
    - use __consistent spacing__ throughout the page
- _use_: 
    - `margin-top` or `padding-top`
    - `margin-bottom` or `padding-bottom`
    - `line-height`: space btw lines in the same paragraph

#### Line Length
the horizontal length of the text (measure)
- _general principles_:
    - __limit the characters__ on a single line to __around 80__
        - reason for _fixed-width layouts_ or _multiple columns_ on wider screens
- _use_:
    - `width`
    - `margin-left` or `padding-left`
    - `margin-right` or `padding-right`

#### Other Basic Typography Guidelines
- body should have __font-size btw 14px and 20px__
- don't use text-decoration: underline except for hover states
- use real italic fonts over synthesized ones if not too much of a burden
- use __HTML entities__ when needed:
    - _curly quotes:`&rsquo;`, `&lsquo;`
    - apostrophes: `&rdquo;`, `&ldquo;`
    - dashes: `&ndash;`, `&mdash;`
    - other symbols: `&copy;`
- more [practical typography rules](https://practicaltypography.com/summary-of-key-rules.html)

#### History of Typography
[reference](https://internetingishard.com/html-and-css/web-typography/example/final/history.html)