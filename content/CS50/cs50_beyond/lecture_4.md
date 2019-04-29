---
path: "/cs50/beyond/4"
date: '2019-04-12'
title: "CS50 Beyond lecture 4 - React"
description: CS50 Beyond lecture 4 정리
image: ''
tags: ['CS50', '강의노트', '웹개발', 'React', '리액트']
---
> Harvard's CS50 Beyond lecture 4 정리

### React
component-based framework for front-end development
- need `react`, `reactDOM`, `babel` libraries
- uses the JSX language and syntax

### Components
- each component is defined by `class __name__ extends React.component`
- each component has a `render` method within its class to define what it should look like (composed of)
- `ReactDOM.render` is used when placing the components on the page (_usually the largest component is rendered since the components are nested)
```html
<!DOCTYPE html>
<html>
    <head>
        <!-- link library sources -->
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
    <body>
        <!-- where react component is placed -->
        <div id="app" />
        <!-- script where react component is defined -->
        <script type="text/babel">
            // create component
            class App extends React.Component {
                render() {
                    return (
                        <div>Hello, world!</div>
                    );
                }
            }
            // render component on html page
            ReactDOM.render(<App />, document.querySelector("#app"));
        </script>
    </body>
</html>
```

#### Props
- __attributes__ given to a component
```jsx
class Hello extends React.Component {
    render() {
        return (
            // define where props are used
            <h1>Hello {this.props.name}!</h1>
        );
    }
}
//
class App extends React.Component {
    render() {
        return (
            <div>
                // pass attribute values as props
                <Hello name="Alice" />
                <Hello name="Bob" />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector("#app"));
```

#### State
- state defines __the data which the component needs to keep track of__
- defined in the `constructor` of the component (must use `super`)
- can only be modified by `setState` function
    - good practice to __use w/ arrow function__ to modify state than using direcly changing {this.state.stateName} for security issues (avoid race conditions)
- using states __makes sure data and user interface are in sync__
```jsx
class Counter extends React.Component {
    constructor(props) {
        super(props);
        // the state of this component
        this.state = {
            count: 0;
        }
    }
    render() {
        return {
            <div>
                <h1> {this.state.count} </h1>
                <button onclick={this.increment}>Increment</button> 
            </div>
        };
    }
    increment = () => {
        // use setState and arrow function to modify state
        this.setState(state => {
            count: state.count + 1
            // the other states remain the same
        });
    }
}
```

#### Props vs. States
- __Props__: component itself never changes props
- __States__: component might change states

### Flash Card Game (in React)
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 1,
            num2: 1,
            score: 0,
            response: "",
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.num1} + {this.state.num2}</h1>
                <input value={this.state.response} onChange={this.updateResponse} onKeyPress={this.inputKeyPressed} />
                <div>Score: {this.state.score}</div>
            </div>
        )
    }
    updateResponse = (event) => {
        this.setState({
            response: event.target.value
        });
    }
    inputKeyPressed = (event) => {
        if (event.key === "Enter") {
            const answer = parseInt(this.state.response);
            // if answer is right,
            if (answer === this.state.answer) {
                this.setState(state => {
                    score: state.score + 1,
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    response: ""
                });
            // if answer is wrong
            } else {
                this.setState(state => {
                    response: "",
                });
            }
        }
    }
}
ReactDOM.render(<App />, document.querySelector("#app"));
```

#### Conditional Rendering
- can render different things on the page depending on certain conditions
```jsx
// within component class
...
render() {
    if (this.state.score >= 10) {
        return this.renderWin();
    } else {
        return this.renderProblem();
    }
}
renderProblem() {
    return (
        // same as above code's render function
    )
}
renderWin() {
    return (
        <h1>You won!</h1>
    )
}
```

#### Adding Class Styles
```html
<!-- define a style for the class -->
<style>
    .incorrect {
        color: red;
    }
</style>
<script>
    // add a new state within constructor class
    ...
        incorrect: false,
    ...
    // add className to h1 tag within renderProblem()
    ...
    <h1 className={this.state.incorrect ? "incorrect": ""}>...</h1>
    ...
    // add to inputKeyPressed() function
    // if right ... in setState()
    incorrect: false,
    // if wrong ... in setState()
    incorrect: true,
</script>
```

### Some Useful JS Tools
when you have a state, you should never change the state directly, however, you can manipulate a copy of a state
- use `[...list]` to fill in list into this new list
```js
// make a copy of the list
const list1 = [1, 2, 3, 4, 5];
const copy = [...list1];
const list2 = [...list1, 6];
```
- use `splice()` to make a copy with some removal
```js
// make a copy with some removal
list1.splice(3, 1); // splice off one at 3rd index
```

