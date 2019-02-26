---
path: "/frontend/2"
date: '2018-02-25'
title: "Frontend Focus 02 - what a web browser is"
description: 
image: ''
tags: ['웹개발', '프론트엔드']
---
> what is a web browser

[reference](https://frontendmasters.com/books/front-end-handbook/2018/learning/browsers.html)

[great explanation on rendering](https://hacks.mozilla.org/2017/05/quantum-up-close-what-is-a-browser-engine/)

### Web Browser
- a software application for retrieving, presenting, and traversing information resources on the World Wide Web.

### how browsers work

#### request for web page
- the browser requests web resource (ex. HTML document, PDF, image, etc.) from web server
- the location of the resource (or the web server) is specified by a URI (Uniform Resource Identifier), particularly the URL (Uniform Resource Locator)
- ex. `http://www.google.com/search/`: use the web (http://) to find a host server named 'www' in the 'google.com' network and look in the 'search' folder to pull out a particular file.
    - `http://`: hyper-text transfer protocol; rules for communication and a common language between clients and servers
    - `www.`: the host name (world wide web)
    - `google`: the domain name hosted on a particular network
    - `.com/`: top-level domain
    - `search/`: a subpage, the path to a particular file or webpage of the domain
- [infographic](https://www.helloitsliam.com/2014/12/20/how-the-internet-works-infographic/)

#### render web page
- after receiving resources, the browser interprets and displays the resource according to the specifications by the W3C (World Wide Web Consortium) organization
- [image](https://hacks.mozilla.org/2017/05/quantum-up-close-what-is-a-browser-engine/)
- overview of browser rendering a page:
    1. the __DOM (Document Object Model)__ is formed from the HTML
    2. styles are loaded and parsed to form the __CSSOM (CSS Object Model)__
    3. a __render tree__ (ex. render object or frame) is created on top of the DOM and CSSOM
    4. __the layout (coordinates)__ is calculated for each render tree element
    5. the layout actually gets displayed in the browser (a.k.a __painting__)
- if users interact with the page or scripts modify it, some of these operations have to be repeated to implement the changes
    - reflow: changing element styles affecting elements' positions, document contents or structure
        - [collection of properties and methods calling for reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
    - repaint: changing element styles not affecting elements' positions
    
### Optimizing Browser Rendering

#### HTML
- do not forget to specify document encoding (ex. utf-8)
- styles should be included into `<head>` tag
- scripts should be appended to the end of the `<body>` tag

#### CSS
- simplify and optimize CSS selectors (ignore if using CSS preprocessors ???)
- keep nesting levels at minimum (ex. .list li: not good)

#### JavaScript
- minimize DOM manipulation whenever possible
- cache everything, including properties and objects (if they are to be reused again)
- when changing element's styles, modify the class attribute
- the deeper in the DOM tree change is made, the better

#### more
[udacity course](https://www.udacity.com/course/website-performance-optimization--ud884)
[another udacity course](https://www.udacity.com/course/browser-rendering-optimization--ud860)