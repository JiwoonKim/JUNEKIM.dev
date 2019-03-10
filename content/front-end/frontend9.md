---
path: "/frontend/9"
date: '2018-03-08'
title: "Frontend Focus 09 - Responsive Design & Web Typography"
description: 
image: ''
tags: ['웹개발', '프론트엔드', '디자인'
, 'responsive design', '타이포그라피']
---

> understanding Responsive Design

- [reference](https://internetingishard.com/)
- [responsive web design patters](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns?hl=en)

### Responsive Design
the idea that your website should display equally well in everything from widescreen monitors to mobile phones
- accomplished via css `@media` (__media queries__)
    - way to conditionally apply CSS rules
- __media type__: `only screen`, `print`
- __media features__: `min-width`, `max-width`

#### Layout Concepts
generally, _mobile and tablet versions are fluid_ while the _desktop version is fixed-width_
- __Fluid Layout__: stretches and shrinks to fill the width of the screen
    - can __target a range__ of screen widths; not a company's device
    - so __the exact pixel values (breakpoints) don't actually matter__
- __Fixed-width Layout__: same width regardless of screen dimensions

#### Mobile-first Development
it's always a good idea to __start w/ the mobile layout and work the way up to desktop version__ so that you can maximize the amount of css you can reuse across layours
- __define base styles outsite media queries__ (and above them)
    - override them when implementing other specific layouts
- use `flex-wrap` property for container to easily implement other layouts

#### Tablet Layout
again, it doesn't matter what the exact width of the screen is (the layout will fluidly respond to any width in the range)
- use `@media` with `min-width` and `max-width`
    - generally _(min-width: 401px) and (max-width 960px)_ work
- __adjust widths of the items within flex container__
    - percentage works well
    - flex-wrap will take care of the rest
- __adjust the orders of the items__: flexbox's `order` property

#### Desktop Layout
- use `@media` with `min-width`
    - generally (min-width: 961px) works well
- give it a __fixed width__ and center it with __auto-margins__ so that the web page doesn't expand endlessly
- __adjust widths of the items within flex container__
    - percentage works well
    - flex-wrap will take care of the rest
- __adjust the orders of the items__: flexbox's `order` property

#### Disabling Viewport Zooming
```html
<meta name='viewport'
    content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
```
- bcuz mobile devices zoom out to fit the entire desktop layout into the small screen by default (prevents mobile layouts to be implemented)

### Responsive Images
__display different images__ based on the __user's device__
- __problem__: 
    - images have inherent dimensions, therefore __cannot stretch__ beyond the width or length
    - __retina screen__ displays require __high resolution/large images__
    - sending high-resolution images to __standard displays and smaller devices__ is __unnecessary data__ and a __bad user experience__
- __things to consider__:
    1. the __device's dimension__
    2. the __image's dimension__
    3. device's __screen resolution__

#### Make Images Responsive
- __use SVG__ (vector-based images)
    - can _avoid the screen resolution problem_
        - bcuz browsers _automatically scale up SVGs for retina devices_
    - make it __fluid__:
        - set `width: 100%`
        - and set max-width inline
```html
 <img class='image' src='image.svg' style='max-width: 500px'/>
```
- __Raster Images__ (PNG, GIF, JPG) __w/ Image Optimization__
    1. list alternative image files via `srcset`
        - use if image is __smaller than 600px wide__
        - 1x: display for standard screens
        - 2x: display retina screens
        - older browser resort to `src`
```html
<img src='illustration-small.png'
       srcset='images/illustration-small.png 1x,
               images/illustration-big.png 2x'
       style='max-width: 500px'/>
```
    2. specify a series of `sizes` of which images should be rendered
        - use if image is __larger than 600px wide__
        - use `media queries` and`w` to define inherent widths of the images
        - this way, _can optimize data_ to _even mobile retina screens_ (which may only need standard images, rather than the retina images)
```html
<img src='photo-small.jpg'
         srcset='photo-big.jpg 2000w,
                 photo-small.jpg 1000w'
         sizes='(min-width: 960px) 960px,
                100vw'/>
<!-- when the screen is larger than 960px wide, image is 960px -->
<!-- otherwise, image is 100vw (100% of viewport width) -->
```
    3. change art direction w/ `<picture>` and `<source>`
        - use if __feeling fancy__ w/ the designer
        - use `<picture>` as a wrapper
        - use `<source>` to conditionally load _differently cropped images_ based on _media queries_
        - < img/> is only specified for older browsers to use
        - but _loses retina optimization_
```html
<picture>
      <source media='(min-width: 401px)' srcset='photo-big.jpg'/>
      <source media='(max-width: 400px)' srcset='photo-tall.jpg'/>
      <img src='photo-small.jpg'/>
</picture>
```

### Web Typography
appearance of all the text on a website

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