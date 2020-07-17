# FEW 2.3 - Lesson 10

## React Hooks

Hooks are a new feature to React. Hooks allow you to use the features available to Class based components in Function based components. 

## Learning Objectives

1. Define React Hooks 
1. Use Hooks to handle state in a Functional components
1. Describe the use cases for hooks

## useState 

```JS
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here the component was creacted from a function but has access to state (`count`). 

To use state with hooks follow these steps

1. When using `useState` you'll need to import it first. 
1. Call `useState(initialValue)` with the initial value. 
1. Deconstruct with the array syntax to get the value, and setter function. 
    - In the axample above the value is `count`
    - The setter us `useCount`
1. To change the value of state call your setter with a new value: `setCount(99)`

It's convention to name your vairable and precede the setter with 'set'. 

### `const [count, setCount] = useState(0);` 🤔

What is this? You should already be familiar with deconstructions with Objects. Desconstruction can also be applied to Arrays. 

```JS 
const numbers = [1, 2, 3]
const [ one, two, three ] = numbers
```

With an object similar code might look like this: 

```JS 
const numbers = { one: 1, two: 2, three: 3 }
const { one, two, three } = numbers
```

With objects you must use the keys to assign the values. So the new variables created on line 2 number have the names `one`, `two`, and `three`. 

In the Array example on line 2 the new variables created can have any name and they are assigned value based of their index!

### Why hooks? 

React is based on **functional** react programming. At it's heart it's built from functional concepts. React isn't an Object Oriented library. The idea of having important parts of the system based on OOP code goes against it's underlying concetps. 

Classes take a extra syntax to generate and more complex to decipher and debug. Functions are more straighforward to troubleshoot. 

If you've ever been confused by `this` if you writing code that is only functions, removing classes, you won't have to workry about `this`.

Hooks don't add a ny breaking changes. Use them if like or not if you don't. 

You should expect to see Hooks in code samples online so it pays to understand them even if you don't use them. 

## Lifecycle methods and Hooks 

```JS
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```



## Review Final Progress

You should be started on your final project. See the syllabus for link to the homework description. 

Take stock of your project and make a list of the things that need to happen for you to complete this assignment. 

Identify the three most important things on this list. 

Identify items in the list that would require instructor help. 

Find something on the list you can work on today in the remaining class time. 

## Additional Resources

1. https://reactjs.org/docs/hooks-intro.html
