# FEW 2.3 - Lesson 2

<!-- > -->

## Props, State, and Profesional Best Practice

This class you will work on improving the codebase you've developed in the previous classes.

<!-- > -->

## Learning Objectives

1. Describe Props and State
1. Compare Props and State
1. Use Props and State
1. Apply Profesional best practice with ESLint

<!-- > -->

## Review

1. What is a Single Page Application?
1. Name some pros and cons of Single Page Applications?
1. Create a new react project
1. Where were props used in the tutorial?
1. What are props? Descibe in as much detail as you can
1. Where is state used in the tutorial?
1. What is state? Describe in as much detail as you can

<!-- > -->

## Props and State

Props are values passed to a component from outside. State is values stored internally by a component. 

<!-- > -->

A component renders when it receives props or state changes.

<!-- > -->

### Counter Component

Consider this component: 

```JS
import { Component } from 'react'

class Counter extends Component {
	constructor(props) {
		super(props)

		this.state = { count: 0 }
	}

	render() {
		return (
			<div className="Counter">
				<small>{this.props.title}</small>
				<h1>{this.state.count}</h1>
				<button
					onClick={() => this.setState({ count: this.state.count + 1})}
				>+</button>
				<button
					onClick={() => this.setState({ count: this.state.count - 1})}
				>-</button>
			</div>
		)
	}
}

export default Counter
```

<!-- > -->

What happens in the Counter component?

- What is state for this component?
  - How many properties does it have?
  - What type is it? 
- What is props for this component?
  - How are props used here? 
- What does this component do?

<!-- > -->

Impplement this component in your App: 

```JS
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <Counter title="Apples" />
      <Counter title="Oranges" />
      <Counter title="Limes" />
    </div>
  );
}
```

<!-- > -->

## Props, State, and rendering components

<!-- > -->

In Reactive programming changing a value cause the program to react to these changes by rendering (redrawing). 

For example, changing props on a component means you called the function that is the component and passed new props. 

<!-- > -->

In the Counter component the title changes when you pass a new prop value. 

The component also updates the value displayed when the count changes on state. 

The component is able to render again when you change because you are calling a method/function.

<!-- > -->

When state changes you aren't changing state directly: 

```JS
// Always change state with setState()
this.setState({ count: this.state.count + 1 })
```

Here you're calling the setState method. When you do this the component know that it should render again.

<!-- > -->

Why doesn't this work?

```JS
this.state.count += 1 // Doesn't work!
```

Here the component is unware that render itself when you change a value on state.

<!-- > -->

You can change multiple values on state at the same time: 

```JS
this.setState({ a: 1, b 22, : 333 })
```

<!-- > -->

Communication between components is best handled by passing values down from parent to child. 

Sometimes you'll want to Pass a value from a child to a parent. The best strategy here is to use a function. Pass a function from the parent and have the child execute that function and pass values as arguments. 

<!-- > -->

## Lifting State

What is lifting state? THis is the process of moving values from a child component to a parent component.

<!-- > -->

Consider the counter example. What if you needed to show the total of all Counters? How would you do that?

The easiest way to handle this will be to pass the count down to the counter. The parent component would own and track state. While child component simply displays the value.

<!-- > -->

The solution is to "lift" state from each of the Counters and store the state in the parent. You can then pass the value of each counter down as a prop to be displayed. 

<!-- > -->

State in your parent component should be an array of integers: 

```JS
this.state = { count: [0,0,0] }
```

<!-- > -->

For each value in the array make a counter: 

```JS
this.state.count.map((value, index) => <Counter value={value} index={index} />)
```

Be sure to include the index since each button will need the index to set it's value.

<!-- > -->

Next you need a method to increment and decrement the count. This will live in the parent component where state is defined. 

```JS
increment(index) {
  // copy state since its a reference
  const newCount = [...this.state.count]
  // Increment the value at index
  newCount[index] += 1
  // Update state 
  this.setState({ count: newCount })
}
```

<!-- > -->

You write a decrement method in your parent component: 

```JS 
decrement(index) {
  ???
}
```

This method should subtract 1 from the value of count at the index. 

<!-- > -->

The last step is to pass the increment and decrement methods to your Counter component and call the methods when the buttons are clicked. 

<!-- > -->

Methods called from another object will lose their reference to `this`. 

The same is true when you use arrow functions.

<!-- > -->

This happens when you pass a function to a component through props: 



```JS
class Counter extends Component {

  increment(index) {
    ...
  }

  render() {
    return <Counter increment={this.increment} />
  }
}
```

This has a problem! `TypeError: undefined is not an object (evaluating 'this.state')`

<!-- > -->

Solution 1: bind this with 

```js
<Counter increment={ this.increment.bind(this) } />
```

<!-- > -->

Solution 2: Wrap the function call in a function: 

```JS
<Counter increment={ index => this.decrement(index) } />
```

<!-- > -->

## Break

Take a 10 minute break! 

<!-- > -->

## Progress Check in

You should be working the React tutorial. What is your progress? 

1. Haven't started
2. Less than half complete
3. More than half complete (You're in the section "Completing the Game")
4. More than 3/4 complete (You're in the section "Adding Time Travel")
5. 100% Complete
6. 100% complete and the stretch challenges!

<!-- > -->

**If you're in category 1 - Haven't started**

Get started now! 

https://reactjs.org/tutorial/tutorial.html

<!-- > -->

**If you're in category 2 - Less that 50% complete**

Continue working on the tutorial.

<!-- > -->

**If you're in category 3 - more than 50% complete**

Continue working on the tutorial. Look at the code you've written so far for these things: 

- Move each component to it's own folder export and import these where they are needed.
- Install ESLint and check your code for linter suggestions

<!-- > -->

**If you're in category 4 - 75% complete**

Continue working, try these ideas: 

- Move components to their own files. 
- Install ESLint follow up any linter suggestions. 
- Move your CSS code to .css files for each component. 

<!-- > -->

**If you're in category 5 - 100% complete**

Try these: 

- Move components to their own files. 
- Install ESLint follow up any linter suggestions. 
- Move your CSS code to .css files for each component.
- Start working on the stretch challenges. 

<!-- > -->

**If you're in category 6 - stretch challenges complete**

- Move components to their own files. 
- Install ESLint follow up any linter suggestions. 
- Move your CSS code to .css files for each component.
- Try these extra stretch goals: 
  - Convert the existing code to Hooks
  - Expand the Game component to work with any board size. 
  - Extend the existing CSS to customize the appearance of the game

<!-- > -->

## Technical Debt

Often while working on software projects the solutions you create are not the best. You won't even know it until later on. This is [Technical Debt](https://www.agilealliance.org/introduction-to-the-technical-debt-concept/).

You've probably incurred some technical debt on this project, let's pay it back. 

<!-- > -->

## Linting

A linter is a tool that analyzes your code and flags errors, bad style, and suspicious constructs. 

Besides finding bugs the linter ensures consistency in your code. Doing things consistently creates the best quality code that runs reliably. Consistency is also important for working on teams. 

<!-- > -->

**Linting is a professional best practice.** All of the best companies use linters, you should too! 

Using a linter will: 

- Make your code read well
- Find Errors
- Improve the quality of your code
- Teach you professional best practice
- Teach you more about code and syntax

<!-- > -->

Seriously, using a linter is a great way to learn more about the code you are writing. 

<!-- > -->

### Install ESLint

For our project, we will be using ESLint. This is a linter that works with all of the major code editors. 

You'll need to install it _in your editor_ and _in your project_. 

<!-- > -->

**Install ESLint in your code Editor**

This varies with the editor. Generally speaking, ESLint is a plugin or package you will add. Follow these steps to install ESLint in Visual Studio Code and Atom. 

<!-- > -->

- Atom: 
 - Packages > Settings View > Manage Packages 
 - + Install
 - Search for ESLint `linter-eslint`
 - Install 
- Visual Studio Code: 
 - Code > Preferences > Extensions
 - Search for ESLint
 - Install

<!-- > -->

**Initialize ESLint**

ESLint is installed as part of the create react app project. You can use it by initializing it. 

Initialize ESLint: 

`eslint --init` 

Answer with these: 

- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- React
- TypeScript: No
- Browser
- Use a popular style guide
- Airbnb: https://github.com/airbnb/javascript
- JavaScript
- Would you like to install them now with npm? Yes

<!-- > -->

## ESLint and Code Quality

| - | Does not meet expectations | Meets expectations | Exceeds expectations |
|:---|:--------------------------|:-------------------|:---------------------|
| Completed | Linted less than 70% of code | Linted 70% or more code | Linted 100% of code |
| Work Ethic | Did not commit when working on project | Initial commit at class and commit while working | Commits show 3 hours and document process |

## Additional Resources

1. [ESLint Getting Started](https://eslint.org/docs/user-guide/getting-started)
1. [Install ESLint for Atom](http://imtiazrayhan.com/install-a-package-in-atom/)




<!-- 

Classs Schedule 
- Attendance check in
- Components Review
  - Props vs state
  - props set title 
  - state track count
- Lifting State 
  - Show count total
    - Move state to parent
    - State becomes an array
    - Counters become functions 
    - Count is passed down as a prop
    - Increment count in parent child buttons must use an index to target count in array


-->
