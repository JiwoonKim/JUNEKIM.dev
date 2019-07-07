---
date: '2018-09-05'
title: "Web50 lecture 6 - Front-end Development"
description: CS50 Web Programming with Javascript and Python lecture 6 정리
image: ''
tags: ['CS50', 'Web50', '프론트엔드']
---
> Harvard's Web Programming with Python and Javascript lecture 6 정리

- Single Page Apps
- HTML5 History API
- Window & Document
- JavaScript Templating
- CSS Animation
- SVG Animation

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
# Server
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
- _장점_ : __reload 필요 X__ (page refresh 필요 X)
- _단점_ : __url이 바뀌지 X__ (eliminates URL's functionality)
    - user may __not know which page they are on__
    - so __use HTML5 History API__ to show url & not need to reload

### HTML5 History API
enables manipulation a a __browser's history and URL__ even if the page is still being implemented __w/ single-page design__
- implemented by the client __pushing__ a new URL state whenever a new page is accessed
- implement w/ __Stack behavior__ (use history like stack)
- use `pushState` and `onpopstate`
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
- 그림 of 위에 관계
```js
window.onscroll = () => {
        // 전체 페이지의 크기 끝에 다다르면, 화면을 초록색으로 변환
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            document.querySelector('body').style.background = 'green';
        }
        // 아직 페이지 끝까지 도달하지 않았다면, 화면을 하얀색으로 설정
        else {
            document.querySelector('body').style.background = 'white'
        }
};
```

#### Dynamic Loading of Content (w/ server)
- load posts according to scroll
```js
let counter = 1;
const quantity = 20;
// initially load the posts when DOM loads
document.addEventListener('DOMContentLoaded', load);
/* if scrolled to bottom, load the next 20 posts
(the document's entire height dynamically updates everytime posts are loaded) */
window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            load();
        }
};
// add a post to page
const add_post = (contents) => {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = contents;
        document.querySelector('#posts').append(post);
}
// load 20 posts from server (via ajax)
const load = () => {
        // count posts (20 for each load)
        const start = counter;
        const end = start + quantity - 1;
        counter = end + 1;
        // request posts from server (POST request)
        const request = new XMLHttpRequest();
        request.open('POST', '/posts');
        // when response received, add number of posts to page
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            data.forEach(add_post);
        };
        // set the form of data to send to server
        const data = new Formdata();
        data.append('start', start);
        data.append('end', end);
        // send as POST request to server
        request.send(data);
};
```
```python
from flask import Flask, jsonify, render_template, request
app = Flask(__name__)
@app route("/posts", methods=["POST"])
def posts():
        start = int(request.form.get("start") or 0)
        end = int(request.form.get("end") or (start + 9))
        # simply return string of post numbers as json
        data = []
        for i in range(start, end + 1)
            data.append(f"post #{i}")
        return jsonify(data)
```
- can also add a hide button to hide uninteresting parts
```js
// change the add_post function
... // create post element (same code)
const hid = document.createElement('button');
hide.className = 'hide';
post.textContent = 'Hide';
hide.onclick = () => {
        this.parentElement.remove();
};
... // append post element (same code)
```

### JavaScript Templating
libraries like template literals (__str_replace__: ``${}``)
- since code gets messier using JS to build more complicated __user interfaces__
- (_adding items to the DOM every time_ : create element, assign class name, set text content, etc.)
- instead, __use template to create elements__ while plugging in custom contents

#### Templates vs. Frameworks
- __templates__: more like advanced str_replace (__more of pluggin__)
    - _mustache, underscore, handlebar, lodash_, etc.
- __frameworks__: does __core functionality__
    - taking page requests, forwarding responses, etc.

#### Example of Handlebars Templates
- _use_: 
    - add script source to html
    - __create a template__: `const template = Handlebars.compile("<tag>{{value}}</tag>")`
        - __define an HTML element__ & content within argument
        - can use `{{ }}` for templating language
    - __use template__: `template({'value':  value})`
- ex. roll dice simulation
```js
// define template
const template = Handlebars.compile("<li>You rolled a {{value}}</li>");
// use template
const content = template({'value': 6});
document.querySelector('#content').textContent += content;
```
- if template becomes _complicated_, __define template in a separate script__ (defined above the script source of where it is used)
    - __define a template__ (.html or .js)
```html
// specify id and type
<script id="result" type="text/x-handlebars-template">
            <li> You rolled:
                <img alt="{{value}}" title="{{value}}" src="img/{{value}}.png"></img>
            </li>
</script>
```
    - __create template__ in another script (.html or .js)
```js
// change only this part from previous example
const template = Handlebars.compile(document.querySelector('#result').innerHTML);
```
- can also use loops: `each` and `this` keyword
```html
<script id="result" type="text/x-handlebars-template">
    <li> You rolled:
        {{each values}}
            <img alt="{{this}}" title="{{this}}" src="img/{{this}}.png"></img>
        {{ /each }}
    </li>
</script>
```

### CSS Animation
- useful for creating __user interfaces__
    - ex. fade away effect (for posts to hide)
- runs __as soon as page is loaded__
- _use_:
    - define animation behavior: `@keyframe`
        - use w/ `from` and `to`
        - or just define statuses by certain names
    - apply to certain elements: `animation-name`
    - define the duration: `animation-duration`
```css
@keyframes grow {
            from { font-size: 20px; }
            to { font-size: 100px; }
}
hi {
            animation-name: grow;
            animation-duration: 2s;
            animation-fill-mode: forwards;
}
```
```css
@keyframe move {
            from { left: 0%; }
            to { left: 50%; }
}
hi {
            position: relative;
            animation-name: move;
            animation-duration: 3s;
            animation-fill-mode: forwards
        }
```
```css
@keyframes move {
            0% {
                left: 0%;
            }
            50% {
                left: 50%;
            }
            100% {
                left: 0%;
            }
}
```
- for more control, use JavaScript
    - `__.style.animationPlayState`
```js
if (__.style.animationPlayState === 'paused') { ... };
__.style.animationPlayState = 'running';
```

### SVG Animation
scalable vector graphic
- __graphical element__ determined by lines, angles, and shapes
```html
<body>
    <svg style="width: 100%; height: 800px;">
        <circle cx="200" cy="200" r="50" style="fill:blue;" />
    </svg>
</body>
```
- can also __programmatically create__ such element by JavaScript by using libraries
    - __D3__