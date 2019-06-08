---
path: "/cs50/beyond/5"
date: '2019-06-08'
title: "CS50 Beyond lecture 5 - Thinking in React"
description: CS50 Beyond lecture 5 정리
image: ''
tags: ['CS50', 'React']
---
> Harvard's CS50 Beyond lecture 5 정리

### Thinking in React
__thinking about how it is that we take an application, decompose it into pieces and put it back together__

### Life Cycle Methods
functions that run at a particular point in a component's life
- every component has life cycle methods

#### componentDidMount()
function run every time a component is mounted (= as soon as component is added to DOM; before the content is ultimately rendered)
```jsx
componentDidMount() {
    // update initial state to data in local storage
    const count = localStorage.getItem("count");
    if (count !== null) {
        this.setState({
            count: parseInt(count);
        })
    }
    // store state data into local storage
    window.addEventListener("beforeunload", () => {
        localStorage.setItem("count", this.state.count);
    });
}
```

### Connect with Backend / API


#### Currency App (in React)
```jsx
class App extends Component {
    constructor(props) {
        super(props);
        // define list of currencies available
        this.currencies = ["USD", "KRW", "JPY", "EUR"];
        // define state for component: currency types and values
        this.state = {
            baseCurrency: "USD",
            otherCurrency: "KRW",
            value: 0,
            converted: 0
        };
    }
    render() {
        return (
            <div>
                {/* select menu & input for base currency */}
                <select onChange={this.makeSelection} name="base" value={this.state.baseCurrency}>
                    {this.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
                <input onChange={this.changeValue} value={this.state.value} />

                {/* select menu & input for base currency */}
                <select onChange={this.makeSelection}  name="base" value={this.state.otherCurrency}>
                    {this.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
                <input disabled value={this.state.converted === null ? "Calculating..." : this.state.converted} />
            </div>
        )
    }
    // implement changes in selection in <select>
    makeSelection = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, this.convertCurrency);
    }
    // change value of base currency input tag
    // after state is modified, convert currency
    changeValue = (event) => {
        this.setState({
            value: event.target.value,
            converted: null
        }, this.convertCurrency);

    }
    // convert currency 
    convertCurrency = () => {
        const value = parseFloat(this.setState.value);
        // handle exception: input not a number
        if isNaN(value) {
            return;
        }
        // fetch currency from API and update state
        fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                converted: data.rates[this.state.other] * value
            })
        })
    }
}
```

### Cache

```jsx

```