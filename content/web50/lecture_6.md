---
path: "/web50/lecture_6"
date: '2018-09-05'
title: "Web50 lecture 6 - Front-end Development"
description: CS50 Web Programming with Javascript and Python lecture 6 정리
image: ''
tags: ['CS50', 'Web50', '강의노트', '웹개발', '프론트엔드']
---
> Harvard's Web Programming with Python and Javascript lecture 6 정리

### Single Page Apps
an application which pulls information from the server whenever needed (via Ajax, etc.) onto a __single page__
- instead of rendering multiple pages,
- server sends information(data) on a single page
```js
// if link is clicked, call load_page function
document.addEventListener('DOMContentLoaded', () => {
    load_page('first');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = () => {
            load_page(link.dataset.page);
            return false;
        };
    });
});

// define function for sending an Ajax call
function load_page(name) {
    const request = new XMLHttpRequest();
    request.open('GET', `/${name}`);
    request.onload = () => {
        const response = request.responseText;
        document.querySelector('#body').textContent = response;
    };
    request.send();
}
```
```python
texts = ["text 1", "text 2", "text3"]

@app.route("/first")
def first():
    return texts[0]

@app.route("/second")
def second():
    return texts[1]

@app.route("/third")
def third():
    return texts[2]
```
- _장점_: __reload 필요 X__ (page refresh 필요 X)
- _단점_: __url이 바뀌지 X__ (eliminates URL's functionality)
    - user may __not know which page they are on__
    - so __use HTML5 History API__ to show url & not need to reload

### HTML5 History API
enables manipulation a a __browser's history and URL__ even if the page is still being implemented __w/ single-page design__
- implemented by the client __pushing__ a new URL state whenever a new page is accessed
- implement w/ __Stack behavior__ (use history like stack)
```js
// just an aesthetic property to reflect the current page
document.title = name;
// use with stack behavior (data / title of page / url)
history.pushState({'title': name, 'text': response}, name, name);
...
// 뒤로가기했을 때, content과 url 다시 뒤로가기
window.onpopstate = e => {
    // pushed된 data (popped 된 layer의 data)
    const data = e.state;
    document.title = data.title;
    document.querySelector('#body').textContent = data.text;
}
```

### Window & Document 
JavaScript objects used to __scroll & dynamically load content__
- useful properties:
    - `window.innerWidth`
    - `window.innerHeight`
    - `window.scrollY`: how far down page has been scrolled (px)
    - `document.body.offsetHeight`: entire height of HTML body's document

#### Dynamic Loading of Content


### JavaScript Templating

### CSS Animation

### SVG Animation