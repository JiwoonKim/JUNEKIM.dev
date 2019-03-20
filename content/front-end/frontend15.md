---
path: "/frontend/15"
date: '2019-03-20'
title: "Frontend Focus 15 - JavaScript Data Types"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'JavaScript', '자바스크립트'
]
---
> Understanding JavaScript
> - objects, primitive data types
> - based on [tutorial](http://javascript.info/)

### Objects
store __keyed collections__ of __various data__ and more complex entities
- __create empty objects__
```js
let obj = new Object(); // object constructor
let obj = {}; // object literal syntax
```
- __define properties__: `key: value` pairs
```js
let obj = {
        name: "Oh",
        age: 15,
};
```
```js
// if key == value, can use shorthand
let obj = { name, age, };
// { name: name, age: age,}
```
- __access properties__: use `.` or `[]`
```js
obj.isAlphabet = true;    // dot notation
alert( obj[isAlphabet] ); // bracket notation
```
```js
/* bracket notation is more powerful: 
 can use variables as properties and can create computed properties */
let input = prompt("Insert an input", "default");
let o = {
        [input]: 1,
};
alert( o.default ) // access by inputted key
```
    - if property name is __simple__, use __dot__
    - for more __complex__, use __brackets__
- __check property exists__: use `!== undefined` or `in` operator
```js
// true means that property does not exist
alert ( o.noProperty === undefined );
// true means property exists
alert( "noProperty" in o );
```
    - `in` __works better__ since a property's value could be set to undefined
- __delete properties__: use `delete` operator
```js
delete o.age;
```
