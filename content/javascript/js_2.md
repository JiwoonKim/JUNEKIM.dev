---
path: "/javascript/2"
date: '2019-03-19'
title: "JavaScript 2 - Code Quality"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'JavaScript']
---
> Understanding JavaScript
> - debugging, coding style, automated testing, polyfills
> - based on [tutorial](http://javascript.info/)

### Debugging
__finding and fixing errors__

#### Breakpoints
1. __set breakpoints__: 
    - click the number line in the source file via developer tools
    - use `debugger` in code to set breakpoint
2. __execute code__: may have to reload page if necessary
    - can make a step to next command (but not enter internal function)
    - can make a step to next command, going into internal function
    - can continue execution until end of current function
    - can enable automatic pause in case of error
    - [버튼 참고](http://javascript.info/debugging-chrome)

#### Logging
- `console.log()`: to log code in the console tab in developer tools

### Coding Style
__clean and easy to read__ as possible

#### Clean Code Recipe
keep the code simple and self-descriptive
- __factor out functions__: __replace a code piece w/ a function__
    - _functions should be self-descriptive_
- __space for readability__:
    - __indentation__: 2 spaces, 4 spaces, or tab
    - space after for/if/while, etc.
    - __empty line between logical blocks__
    - spaces around a nested call (앞뒤로)
    - __avoid nesting code too many levels deep__

### Comments
describe how and why code works
- __describe the architecture__: provide a high-level overview of components
    - how they interact, what the control flow is in various situations, etc.
    - __[UML]__(https://en.wikipedia.org/wiki/Unified_Modeling_Language): special diagram language for high-level architecture diagrams
- __document a function usage__: to understand the purpose of the function and how to use it w/o looking in its code
    - use [JSDoc](https://en.wikipedia.org/wiki/JSDoc) to document a function's usage, parameters, returned value.
- __explain why it coded this way__: provide an explanation of why a task was solved exactly this way and not any other way

_if the code is so unclear that it requires a comment, then maybe it should be rewritten instead_

#### Style Guides
general rule about how to write code
- [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [IdiomaticJS](https://github.com/rwaldron/idiomatic.js)
- [StandardJS](https://standardjs.com/)

#### Linters
tools that automatically check the style of your code and make suggestions for refactoring
- ex. ESLint

### Automated Testing
tests are written separately (in addition to code) to execute easily and check all the main use cases
- instead of manual re-runs (code-run-check-fix)
- _use following libraries for tests_:
    - __Mocha__: the core framework, provides common testing functions (`describe` and `it`) and the main function to run tests
    - __Chai__: library w/ many assertions
    - __Sinon__: library to spy over functions, emulate built-in functions and more

#### Behavior Driven Development (BDD) Approach
- three things in one: __spec = tests + documentation + examples__
- __spec first__ and __followed by implementation__
- using spec: __can safely improve, change, even rewrite function__ from scratch and make sure it still works right
- __better architecture__ bcuz the code is organized by having every function w/ a __clear task__ and __well-defined input/output__

#### Development Flow
1. __write spec__ (_specification_): use `describe`, `it`, and assertions
```js
// one test to check one thing each (it)
describe("pow", function() {
    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
    });
    it("3 raised to power 3 is 27", function() {
        assert.equal(pow(3, 3), 27);
    });
});
```
2. __implement code__
```js
// passes test but is incorrect
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
```
3. __run testing framework__(Mocha) to run the spec and display errors
4. make corrections until everything works
5. __add more use cases to the spec__: 
```js
// improve spec w/ 'for' loop
describe("pow", function() {
    // nested describe to group makeTest and for loop
    describe("raises x to power 3", function () {
        // define function to test
        function makeTest(x) {
            let expected = x * x * x;
            it (`${x} in the power 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }
        // execute tests
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    })
    // more tests to follow (describe + it)
});
```
    - also include __error cases to improve spec__
        - ex. return NaN when n is negative or non-integer (make the spec fail to show errors)
    - __appropriate error cases indicate successful code__
6. __improve code__ till no errors in tests
7. __repeat 5 and 6__

### Polyfills
__scripts that fill in the gap and add missing implementations__
- worthy new proposals to the JavaScript language are appended to the [list](https://tc39.github.io/ecma262/) and progressed to the [specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
- JavaScript engines may decide to implement or postpone things in the spec depending on the team's decision

#### Babel
- __transpiler__ which rewrites modern JavaScript code into the previous standard
    - modern project build system (ex. webpack, brunch) provide means to run transpiler automatically on every code change
- __polyfill__ to fill in missing implementations and modify built-in functions
- __use Babel if you need to use old engines to support modern features__, not if you simply use modern engines (which support features and thus, do not need a tranpiler and polyfill)