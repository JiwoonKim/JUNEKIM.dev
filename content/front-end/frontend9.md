---
path: "/frontend/9"
date: '2019-03-08'
title: "Frontend Focus 09 - Images on the Web"
description: 
image: ''
tags: ['웹개발', '프론트엔드', '디자인', 'Responsivedesign']
---
> Understanding Images on the Web

### Images (`<img>`)
- Image Formats
    1. __JPG__: _photos and images_ w/ a lot of gradients in them
        - designed for handling large color palettes w/o exorbitantly increasing file size, doesn't allow transparent pixels.
    2. __GIF__: _simple animations_
    3. __PNG__: _icons, technical diagrams, logos_, etc.
        - great for anything else than photos or animations
    4. __SVG__: same use cases as PNG, especially great for _responsive design_
        - _vector-based graphics format_; can scale up or down to any dimension w/o losing quality
        - potential issues: __need to convert any text fields__ to outlines using an image editor
- `alt` attribute: defines __text alternative__ to image being displayed
    - impact on search engines
    - impace on users with text-only browser (text-to-speech)

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

### Make Images Responsive
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