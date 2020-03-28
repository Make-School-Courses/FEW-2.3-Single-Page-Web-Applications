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

### `const [count, setCount] = useState(0);`

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




## After Class

- [Assignment 8](../Assignments/Assignment-08.md)

## Additional Resources

1. https://reactjs.org/docs/hooks-intro.html
