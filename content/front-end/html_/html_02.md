---
path: "/html/2"
date: '2019-03-04'
title: "HTML 02 - Forms"
description: 
image: ''
tags: ['프론트엔드', 'HTML']
---
> understanding general front-end development and HTML
> - [reference](https://internetingishard.com/)

### HTML forms
- `<form>` lets you __collect input from users__
    - ex. mailing lists, contact forms, blog post comments
- they are the __money pages__: 
    - how e-commerce sites _sell their products_, how SaaS companies _collect payment for their service_, how non-profit groups _raise money online_
- can __measure success of website__ by effectiveness of its forms
    - how many _leads_ did our website send to our sales team? how many people _signed up_ for our product last week?
- __frontend and backend__ of functional HTML form:
    - _frontend user interface_: HTML & CSS
    - _backend server_: code to process forms for storing data in a database, sending an email, etc.

### Make a Form:
1. define __action__: the _URL_ to which the input collected by the form is sent when the user clicks the _Submit_ button
2. define __method__: 
    - __get__: for only _getting_ data
    - __post__: for _changing_ data
3. define __inputs__ w/ __labels__
    - various types of inputs
        - `<input>`: text, email, radio, checkbox
        - `<select>` and `<option>`
        - `<textarea>`
        - `<button>`
    - match label's `for` attribute with the input's `id` for semantic HTML
4. set __submit button__
    - _validates inputs_
    - _submits to action URL_
```html
<form action='' method='get'>
    <!-- define inputs here -->
    <button>Submit</button>
</form>
```

### Input Types
- `<input/>`:
    - define `name`, `type`, `placeholder`, `id` 
    - `type` _attribute_:
        - __text__, __email__, __color__
```html
<!-- text input -->
<div class='form-row'> <!-- for styling -->
                <label for='name'>Name</label>
                <input id='name' name='name' type='text' />
</div>
```
        - __radio__ : set `value`, _wrap group w/_ `fieldset` and _label w/_ `legend`
```html
<!-- radio button input -->
<fieldset class='form-row'> <!-- for grouping -->
                <legend>Type</legend>
                <input id='1' name='type' type='radio' value='1' />
                <label for='1' class='radio-label'>1</label>
                <input id='2' name='type' type='radio' value='2' checked />
                <label for='2' class='radio-label'>2</label>
</fieldset>
```
can style to check right/wrong of input value: `invalid` and `:valid`
can style to select input being filled out: `:focus`
        - __checkbox__: _wrap w/_ `<label>`
```html
<div class='form-row'>
                <label class='checkbox-label' for='available'>
                <input id='available' name='available' type='checkbox' value='is-available'/>
                <span>Available</span>
                </label>
</div>
```
- `<select>` for __dropdown__:
    - set `name` attribute
    - set `<option>` for __items__ w/ `value` attribute
    - _hard to style_ since behavior varies accross devices
```html
<!-- dropdown input -->
<div class='form-row'> <!-- for styling -->
            <label for='size'>Size</label>
            <select id='size' name='size'>
                <option value='l'>Large</option>
                <option value='s'>Small</option>
            </select>
</div>
```
- `<textarea>` for __multi-line text__ input:
    - use w/ < label>
```html
    <div class='form-row'>
        <label for='essay'>Essay</label>
        <textarea id='essay' name='essay'></textarea>
        <div class='instruction'>Describe in 500 words</div>
     </div>
</form>
```