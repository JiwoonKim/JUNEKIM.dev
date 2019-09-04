---
date: '2019-09-03'
title: "Mobile50 lecture 2 - React, Props, State"
description: 
tags: ['CS50', 'Mobile50', 'React']
---
> Understanding React, Props, and State

### React
javascript library that allows us to __write declarative views__ that __react to the changes in data__
- write what you want and the library will take care of the DOM manipulation
    - reconcillation = process by which React syncs changes in app state to the DOM
    - reconstructs the virtual DOM and compares with the actual DOM for changes
- allows us to abstract problems into smaller components

#### Declarative Programming
easier to read and easier to maintain
```js
// example of adding title to slide
const SLIDE = {
    title: 'React is declarative',
    bullets: [
        'Imperative vs. Declarative',
        'The browser APIs are not fun to work with',
        'React allows us to write what we want, and takes care of the rest'
    ]
}
// imperative                                       // declarative
function createSlide(slide) {                    |  function createSlide(slide) {
    const slide = document.createElement('div')  |      return (
    const title = document.createElement('h1')   |        <Slide>
    title.innerHTML = SLIDE.title                |            <h1>{SLIDE.title} </h1>
    return slide                                 |            <ul>
}                                                |              {SLIDE.bullets.map(bullet => <li>{bullet}</li>)}
                                                 |            </ul>
                                                 |        </Slide>
                                                 |      )
                                                 |  }
```
- imperative language: outlines the specific series of steps to get what you want
- declarative language: just delcares what you want

#### Componentized
breaking a complex problem into discrete components
- components are __just functions returning a node for React to render__ (ex. < div />)
- __can reuse__ these componenets: great for consistency, iteration speed, easy to customize components

### Props
short for __properties__, objects passed to a component
- changes in these props cause recomputation of the node (a.k.a re-render)

### State
internally-managed configuration for a component
```jsx
class App extends React.Component {
    // create state for component
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    /** update state of component
     *  (remember to bind method to component)
     */
    increaseCount() {
        this.setState(prevState => {count: prevState + 1})
    }
    // render the component
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={() => this.increaseCount()}>Increase</button>
            </div>
        )
    }
}
let count = 0
render(<App count={count}/>)
```
- `this.state` = class property on the component instance
- can only be updated by invoking `this.setState()` implemented by React.component
    - the calls are batched and run aynchronously
    - changes in state also cause re-renders

### TODO App Development Process
process of development from vanilla javascript to React
- how javascript can be used __declartively__ to see how React came into being

#### 1. use of declarative functions
still vanilla javascript, but more in a declarative way 
- focusing on 'how' the component should look
- equivalent to creating componenets in React
```js
// declarative way to create todo element
function createTodo(text) {
    const li = document.createElement('li')
    li.innerHTML = `
        <input type="checkbox">
        <label>${text}</label>
        <button>delete</button>
    `
    return li;
}
// factored out createTodo
function addTodo() {
    const li = createTodo(document.querySelector("input").value)
    list.appendChild(li);
}
```

#### 2. store declarative data
instead of simply adding todos into DOM, store the todos list in memory and use that
- focusing turning todos list into a full-rendered page (by declaring todos data and how to render single todo)
- this makes delete function more easier
- equivalent to using states in React
```js
// store todos in memory
let todos = []
/** render a single todo
 *  (turn data into actual html)
 */
function renderTodo(todo) {...}
/** render each of the todos in memory
 *  and append those to the page
 */
function render() {
    list.innerHTML = ''
    let todosInHTML = todos.map(renderTodo)
    todosInHTML.forEach(todo => list.appendChild(todo))
    return false
}
/** add todos 
 *   by updating todos list data and rendering
 */
function addTodo() {
    const todo = new Todo(document.querySelector('input').value)
    todos.push(todo)
    return render()
}
/** delete todos 
 * by updating todos list data and rendering
 */
function removeTodo() {
    const todo = this.todoRef
    todos = todoes.filter(t => t !== todo)
    return render()
}
```

#### 3. use React
use React to simplify the previous steps
- define todo component
- create app component
    - w/ __state__ to track todos list
    - add/remove todo by __updating state__
    - render page by declaring components based upon states
- remove todo efficienty by using id state
    - __include__ ids in todos state
    - filter out todo w/ id
```js
import React from 'react'
import { render } from 'react-dom'
// define todo component
let id = 0
const Todo = props => (
    <li >
        <input type="checkbox" />
        <label>{props.todo.text}</label>
        <button onClick={props.onDelete}>delete</button>
    </li>
)
// define app component
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            input = '',
            todos = [],
        }
    }
    // add todo by updating state
    addTodo() {
        const text = this.state.input
        this.setState({
            todos: [
                ...this.state.todos, 
                {id: id++, text: text}],
        })
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    // render all the todos
    render() {
        return (
            <div>
                <input onChange={() => this.updateInput()}>
                <button onClick={() => this.addTodo()}>add</button>
                <ul>
                    {this.state.todos.map(todo => 
                        <Todo 
                            onDelete={() => this.removeTodo(todo.id)}
                            todo={todo} 
                        />)}
                </ul>
            </div>
        )
    }
}
```

### How to use React (summary)
1. __define components__ declaratively: how they should look or be structured using html tags
    - define other __sub-components__
    - (large component == rendered result, so go to step 4)
2. __define states__ declaratively: define states which store the data rendering relies on
    - states defined in larger component; so that it can trickle-down to sub-components
3. __define functions to modify states__: functions defined to make changes to states
    - functions should be __attached to components as props__
4. __define the rendered result__: let the rendering be taken care of by React while only focusing on declaring what the final result should be