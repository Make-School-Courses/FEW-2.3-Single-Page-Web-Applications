# FEW 2.3 - Lesson 10

# Redux Part 2

Redux has many parts the best way to own them is review! 

## Learning Objectives

1. Describe the Flux Pattern
1. Describe Application State
1. Describe Actions, Actions Creators, and Reducers

## React Redux Review 

Read the first part of this article it is a very nice and succinct explanation of React and Redux. 

https://medium.com/weekly-webtips/2020-redux-tutorial-with-hooks-and-thunk-8a6a4be6f9de

## React Router Review 

Import your dependencies: 

```
npm install react-router-dom
```

In App.js import: 

```JS
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
```

Wrap your components with a Router: 

```js
function App() {
  return (
    <div className="App">
      <Router>
        ... other components here ...
      </Router>
    </div>
  );
}
```

Define a page and add that to your Router. Use a Link to navigate to a Route. Be careful not to confuse Router and Route!

Notice the Link uses to to indicate which path it should navigate to. 

The component property in a Route is the Component that should be displayed when we navigate to that Route:

```JS
<Router>
  <Link to="/">Shop</Link>
  <Link to="/cart">Cart</Link>
  
  <Route path="/cart" component={ShoppingCartPage} />
  <Route path="/" exact component={ShoppingPage} />
</Router>
```

## Tutorial concepts Review 

Quick let's review everything. Identify the following in the tutorial projects. 

1. Review and identify all of the parts of Redux
  - Actions 
  - Action Creators 
  - Reducers 
  - Combined Reducers 
  - The Store
2. Review and identify all of the parts used by React Redux
  - Provider component 
  - connect()
    - mapStateToProps()
    - mapDispatchToProps()
3. Identify and describe the parts of Redux and React Redux
  - Actions 
  - Store 
  - Reducers
  - Immutable State 
  - connected components
4. Identify and described Application State

## Challenges 

Using the sample Redux project try these challenges:

- Create a component that resets all counters
- Create a component that increments all timers
- Create a component that decrements all timers
- Create a component that displays an average of all counters
- Create a component that display the min and max counter values

Sample Redux Project: https://github.com/Make-School-Labs/react-redux-counter

## Redux Review 

Discuss issues and questions with tutorial projects. Write any questions you have abput the tutorial project down on the board. 

## After Class 

Find an issue and push a solution. Explore the issues in the projects below and find one that you are confortable working on. Develop a solution and submit a pull request. 

- [Tetris Redux App](https://github.com/soggybag/tetris-redux-app)
    - [issues](https://github.com/soggybag/tetris-redux-app/issues)
- [Simple Journal](https://github.com/soggybag/simple-journal)
    - [issues](https://github.com/soggybag/simple-journal/issues)
- [Course Book React](https://github.com/soggybag/course-book-react)
    - [issues](https://github.com/soggybag/course-book-react/issues)
- [SF Public Spaces](https://github.com/soggybag/sf-public-spaces)
    - [issues](https://github.com/soggybag/sf-public-spaces/issues)



