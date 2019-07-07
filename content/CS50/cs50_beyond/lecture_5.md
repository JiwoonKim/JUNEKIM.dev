---
date: '2019-06-08'
title: "CS50 Beyond lecture 5 - Thinking in React"
description: CS50 Beyond lecture 5 정리
image: ''
tags: ['CS50', 'CS50 Beyond', 'React']
---
> Harvard's CS50 Beyond lecture 5 정리

### Thinking in React
__thinking about how it is that we take an application, decompose it into pieces and put it back together__

#### Build React Apps in Real World
- `node.js`: javascript run-time
- `create-react-app`: build a starter app as default
- `npm run start`: dynamic reloading, automatically separates files
- `npm run build`: compile jsx scripts into javascript

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

#### API Call
```jsx
// convert currency using API call
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
```

#### Cache
use __cache invalidation__ (update data upon out-of-date state) __to reduce latency issue__
```jsx
...
// create cache variable in component (not state)
this.cached = {};
...
// within changeCurrency method
// check cache for data less than a minute old
if (this.cached[this.state.base] !-- undefined &&
    Date.now() - this.cached[this.state.base].timestamp < (1000 * 60)) {
        this.setState({
            converted: this.cached[this.state.base].rates[this.state.other] * value
        })
        return;
}
...
.then(data => {
    // update cache data along w/ timestamp
    this.cached[this.state.base] = {
        rates: data.rates,
        timestamp: Data.now()
    }
    ...
})
```
- cache = general term for any way to storing data in a particular place
- local storage = type of cache whose data is stored inside browser, useful to persist data even through refreshing
- cookie = keeping track data for interaction between server and browser

### Currency App (in React)
```jsx
class App extends Component {
    constructor(props) {
        super(props);
        // define list of currencies available
        this.currencies = ["USD", "KRW", "JPY", "EUR"];
        this.cached = {};
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
    changeValue = (event) => {
        this.setState({
            value: event.target.value,
            converted: null // so that value is not constantly changing
        }, this.convertCurrency);
    }
    // convert currency 
    convertCurrency = () => {
        const value = parseFloat(this.setState.value);
        // handle exception: input not a number
        if isNaN(value) {
            return;
        }
        // use cache if data is less than a minute old
        if (this.cached[this.state.base] !=== undefined &&
            Date.now() - this.cached[this.state.base].timestamp < (1000 * 60)) {
                this.setState({
                    converted: this.cached[this.state.base].rates[this.state.other] * value;
                });
            return;
        }
        // fetch currency from API and update state
        fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(response => response.json())
        .then(data => {
            // update cached data
            this.cached[this.state.base] = {
                rates: data.rates,
                timestamp: Data.now()
            };
            // update state
            this.setState({
                converted: data.rates[this.state.other] * value
            });
        });
    }
}
```