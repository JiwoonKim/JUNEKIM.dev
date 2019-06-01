---
path: "/cs50/beyond/0"
date: '2019-03-12'
title: "CS50 Beyond lecture 0 - HTML & CSS"
description: CS50 Beyond lecture 0 정리
image: ''
tags: ['CS50', 'HTML', 'CSS', 'Regex']
---
> Harvard's CS50 Beyond lecture 0 정리

### HTML 5

#### New Features
- `<header>`, `<nav>`, `<section>`, `<footer>`
- `<audio>`, `<video>`
- `<datalist>`: to be used w/ < input>
- `contenteditable` attribute: to make the text content editable
- `pattern` attribute: check matching pattern w/ _regular expressions_ in an < input>

### Regular Expressions
defines a _regular language_ (sequence of characters that define a search pattern)
- used in __string searching algorithms__
- __basic operations__: _concatenation, alternation, kleene star_
    - hi = hi
    - hi|hello = hi, hello
    - hi? = h, hi
    - hi* = hi, hii, hiii ...
    - hi+ = hii, hiii ...
    - hi{3} = hiii
    - . = anything char (. = \. for escape)
    - [ a-z] = a, b, c, ... z
    - [ 0-9] = 0, 1, 2, ... 9
```regex
[0-9]{3}-[0-9]{4}-[0-9]{4} // for phone number
.+@.+\..+ // for email address
```

### CSS

#### Specificity
- the _more specific_, it _takes precedent_ (overrides)
- id > class > element