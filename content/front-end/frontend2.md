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

### Web Browser
- a software application for retrieving, presenting, and traversing information resources on the World Wide Web.

#### how browsers work
1. requests web resource (ex. HTML document, PDF, image, etc.) from web server
    - the location of the resource (or the web server) is specified by a URI (Uniform Resource Identifier), particularly the URL (Uniform Resource Locator)
    - ex. `http://www.google.com/search/`: use the web (http://) to find a host server named 'www' in the 'google.com' network and look in the 'search' folder to pull out a particular file.
        - `http://`: hyper-text transfer protocol; rules for communication and a common language between clients and servers
        - `www.`: the host name (world wide web)
        - `google`: the domain name hosted on a particular network
        - `.com/`: top-level domain
        - `search/`: a subpage, the path to a particular file or webpage of the domain
    - [infographic](https://www.helloitsliam.com/2014/12/20/how-the-internet-works-infographic/)
2. when receives resources, interprets and displays the resource according to the specifications by the W3C (World Wide Web Consortium) organization
    - the browser's rendering engine parses the HTML and CSS file in order to create a DOM tree and render tree to display the content
    -[reading about webpage rendering](http://frontendbabel.info/articles/webpage-rendering-101/)