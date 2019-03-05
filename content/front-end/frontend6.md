---
path: "/frontend/6"
date: '2018-03-04'
title: "Frontend Focus 06 - HTML"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'html']
---

> understanding general front-end development and HTML

- [reference](https://internetingishard.com/)

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

#### language and encoding
- `html lang='en'`: to define the __language of the document's content__
- `meta charset='UTF-8'`: defines __how the character letters are rendered__

#### Images (`<img>`)
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

#### HTML entity
special character that can't be represented as plain text in an HTML document
- __reserved character__: <, >, and &
    - represented by `&lt;`, `&gt;`, `&amp;` respectively
- __characters not on the keyboard__: begin w/ `&` and end with `;` to interpret as a symbol of something
    - [more information](https://dev.w3.org/html5/html-author/charref)

#### HTML forms (`<form>`)
- let you __collect input from users__
    - ex. mailing lists, contact forms, blog post comments
- they are the __money pages__: 
    - how e-commerce sites sell their products
    - how SaaS companies collect payment for their service
    - how non-profit groups raise money online
- can __measure success of website__ by effectiveness of its forms
    - how many leads did our website send to our sales team?
    - how many people signed up for our product last week?
- __frontend and backend__ of functional HTML form:
    - frontend user interface: HTML & CSS
    - backend server: code to process forms
        - storing data in a database
        - sending an email, etc.
- Using the `<form>` tag:
    1. define __action__: the _URL_ to which the input collected by the form is sent when the user clicks the _Submit_ button
    2. define __method__: 
        - __get__: for only _getting_ data
        - __post__: for _changing_ data
    3. use `<input />` element
    4. use `<label>`: match its `for` attribute with the input tag's id for semantic HTML
```html
<form action='' method='get'>
    <label for='full-name'>Name</label>
    <input id='full-name' name='full-name' type='text' />
</form>
```



#### Semantic HTML