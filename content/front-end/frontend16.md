---
path: "/frontend/16"
date: '2019-03-20'
title: "Frontend Focus 16 - JavaScript Objects"
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
        sayOh() {   // method
            alert( this.name ); // use 'this'
        }
};
```
```js
// if key == value, can use shorthand
let obj = { name, age, };
// { name: name, age: age,}
```
    - __keys__: __string__ or __symbol__
- __access properties__: use `.` or `[]`
```js
obj.isAlphabet = true;    // dot notation
alert( obj[isAlphabet] ); // bracket notation
```
```js
/* bracket notation is more powerful: 
 can use variables as properties and can create computed properties */
let input = prompt("Insert an input", "default");
let obj = {
        [input]: 1,
};
alert( obj.default ) // access by inputted key
```
    - if property name is __simple__, use __dot__
    - for more __complex__, use __brackets__
- __delete properties__: use `delete` operator
```js
delete obj.age;
```
- __check property exists__: use `!== undefined` or `in` operator
```js
// true means that property does not exist
alert ( obj.noP === undefined );
// true means property exists
alert( "noP" in obj );
```
    - `in` __works better__ since a property's value could be set to `undefined`
- __iterate over all keys__: use `for` and `in`
```js
for (let key in obj) {
        alert( `${key}: ${obj[key]});
}
```
    - properties are __ordered__: integers are sorted while others are in order of creation
    - symbol properties do not appear in for loops bcuz they are hidden properties

#### This
`this` points to object within the context
- defined at run-time
- arrow functions do not have `this`

#### Copied by Reference
objects are stored and copied by reference
- objects store the __address in memory__
- properties of objects declared as `const` __can be changed__
- __cloning/merging an object__: use `Object.assign`
```js
// clone object
let copied = Object.assign({},  obj);
```
```js
// merge several objects into one
let obj = { name: "oh" };
let add1 = { canAdd: 1 };
let sub1 = { canSub: 2 };
Object.assign(obj, add1, sub1);
// obj = { name: oh, canAdd: 1, canSub: 2}
```
```js
// more simply,
Object.assign(obj, { canAdd: 1, canSub: 2 })
```
    - need more sophisticated algorithm for __deep cloning__ (_to clone objects within objects_)

### Garbage Collector
__monitors all objects__ and __removes unreachable objects__ for memory management in JavaScript
- reachable: values that are accessible or usable somehow
```js
// obj has reference to object (reachable)
let obj = { name: "oh" };
/* value object is overwritten
 reference to object is lost (unreachable) */
obj = null;
```
    - reachable = can be referenced from the root somehow
- garbage collector __junks the data__ and __frees the memory__

think __objects like pointers__:
    - if object variable is overwritten, the actual object value is lost and garbage collector frees the memory
    - if another object variable has reference, the object value is not lost or collected by garbage collector

#### How it works
- it remembers roots, its references, and its references ...
- in the end, those that were unreachable in this process (objects which do not have links) are removed
