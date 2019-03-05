---
path: "/frontend/6"
date: '2018-03-04'
title: "Frontend Focus 06 - HTML, CSS, & Responsive Design"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'html', 'css']
---

> understanding general front-end development

> how HTML, CSS, and JavaScript interact with each other

[reference](https://internetingishard.com/)

### the Languages that run the Web
- __HTML__: adding __meaning__ to raw content by marking it up
- __CSS__: __formatting__ that marked up content
- __JavaScript__: making that content and formatting __interactive__

#### Web Development
- mastering HTML, CSS, and JavaScript is only a __prerequisite__ for becoming a professional web developer
- there are a bunch of other practical skills that you need to run a website (__setting up environments to build and deploy a website__):
    - organizing HTML into reusable templates
    - standing up a web server
    - moving files from your local computer to your web server
    - version control
    - setting a domain name to point to your server

### HTML
- HTML markup should provide __semantic__ information about your content (not presentational information)
- it should define the __structure__ of your document, leaving its appearance to CSS
    - `<em>` > < i > & `<strong>` > < b >: bcuz emphasized text can be displayed in all sorts of ways (not just italicized but maybe in different font, color, size, etc.)
    - < br/> should not be abused; each one should convey __meaning__; not to add a bunch of space (CSS should do this)
- HTML5 attempted to create a __clear separation between a document's structure and appearance__

#### Images (`img`)
- Image Formats
    1. __JPG__: _photos and images_ w/ a lot of gradients in them
        - designed for handling large color palettes w/o exorbitantly increasing file size, doesn't allow transparent pixels.
    2. __GIF__: _simple animations_
    3. __PNG__: _icons, technical diagrams, logos_, etc.
        - great for anything else than photos or animations
    4. __SVG__: same use cases as PNG, especially great for responsive design
        - _vector-based graphics format_; can scale up or down to any dimension w/o losing quality
        - potential issues: __need to convert any text fields__ to outlines using an image editor
- Text Alternatives: alt attribute to <img/> elements is best practice
    - defines text

### CSS