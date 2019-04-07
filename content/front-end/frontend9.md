---
path: "/frontend/9"
date: '2019-03-08'
title: "Frontend Focus 09 - Responsive Design"
description: 
image: ''
tags: ['웹개발', '프론트엔드', '디자인'
, 'responsive design']
---
> understanding Responsive Design and how to implement it

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
- __use `flex-wrap` property for container__ to easily implement other layouts

#### Tablet Layout
again, it doesn't matter what the exact width of the screen is (the layout will fluidly respond to any width in the range)
- use `@media` with `min-width` and `max-width`
    - generally __(min-width: 401px) and (max-width 960px)__ work
- __adjust widths of the items within flex container__
    - percentage works well
    - flex-wrap will take care of the rest
- __adjust the orders of the items__: flexbox's `order` property

#### Desktop Layout
- use `@media` with `min-width`
    - generally __(min-width: 961px)__ works well
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

### Summary
- __start from mobile sizes__ and then __use `@media` for larger screens__
    - mobile: default
    - tablet: __(min-width: 401px) and (max-width 960px)__
    - larger: __(min-width: 961px)__
- use `<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />`
- utilize units:
    - `vh`

