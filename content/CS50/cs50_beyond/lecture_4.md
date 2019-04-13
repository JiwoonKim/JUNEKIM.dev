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
syntax for react
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```

#### Props
- __attributes__ given to a component
```jsx

```

#### State
- state defines __the data which the component needs to keep track of__
    - defined in the constructor of the component
- state can only be modified by `setState` function
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
        })
    }
}
```

#### Props vs. States
- __Props__: component itself never changes props
- __States__: component might change states

