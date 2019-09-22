# FEW 2.3 - Lesson 9 - Redux introduction

## Redux

Redux is a tool for managing application state. If you've ever had trouble managing data, changes to data, or handling user input Redux might solve your problems! 

Redux is a JS implementation of the Flux pattern which was developed at Facebook for solving problems they were having managing data on the Facebook website. 

## Learning Objectives/Competencies

1. Identify Application State 
1. Define Actions and Action Creators 
1. Define Reducers

## Slides 

https://docs.google.com/presentation/d/18rfjoYo-Ei2M9teGn0h-PctydE4m9gOlteT99C7R_TI/edit?usp=sharing

## Initial Lecture: What is Application state?

Application state is the contents of memory used by your application. You can think about this as all the variables that define your application at any moment. 

That's might seem like a lot to keep track of. For practical purposes, we don't have to think of the entire contents of memory. Instead, we need to think of only the variables that determine how your application displays itself at the moment. For this purpose, you can remove all of the boilerplate and framework code from the equation. 

**Think of application state as the values that you would have to load to recreate the application in it's current "state".**

## Discuss Application State

Discussion: Identify the state in your application. Think of one of your applications and identify all of the variables that would be required to reload the application into a previous state.

Identify Application State from class projects

- Product List 
- API (weather app)

Discussion: What problems have you had managing application state in previous projects? 

Identify Application State in the custom project you are working on.

## The Flux Pattern? 

Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a **unidirectional data flow**. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.

Flux applications have three major parts: the **dispatcher**, the **stores**, and the **views** (React components). These should not be confused with Model-View-Controller. Controllers do exist in a Flux application, but they are controller-views — views often found at the top of the hierarchy that retrieves data from the stores and passes this data down to their children. Additionally, action creators — dispatcher helper methods — are used to support a semantic API that describes all changes that are possible in the application. It can be useful to think of them as a fourth part of the Flux update cycle.

Flux eschews MVC in favor of a unidirectional data flow. When a user interacts with a React view, the view propagates an action through a central dispatcher, to the various stores that hold the application's data and business logic, which updates all of the views that are affected. This works especially well with React's declarative programming style, which allows the store to send updates without specifying how to transition views between states.

- https://facebook.github.io/flux/docs/in-depth-overview.html

## Redux

What is Redux? A JavaScript implementation of the Flux Pattern. Redux describes itself as:

> A predictable state container for JavaScript apps.

Keep in mind that Application state and Redux is different from the Component state. While Components each can define and hold on to their own state. Application state in Redux is help outside of any component and can be passed into a component through props. 

In other words Redux holds state outside of components and components can register to receive updates when state changes and hooks that allow components to make changes to state.

### Why use Redux? 

**Pros**

- Easier to Debug Applications
    - State is held in a single location
    - Changes all happen through a single system
- Predictable 
    - State changes can only be initiated with an action
    - Any change has to complete before another action is handled
- Easier to reason about your application
    - Actions are listed in one location
    - Reducers handling changes to state exist in one location
- Makes it easy to expand your applications
    - Adding new actions and reducers is easier than building every new system from scratch
    - Defines a pattern for working with state
    
**Cons** 

- Setup and tooling 
    - There are a few steps required to set up Redux
    - There is a learning curve

- https://redux.js.org

## The Flux Pattern

## The problem

Typically our apps use two-way communication. This creates a complex mashup that invites problems as apps grow in complexity. 

![image-1.png](images/image-1.png)

## The solution

One way data flow.

Redux enforces a one-way data flow. This creates reliable and reproducible 
results. Redux has four parts:

- action - action creators
- dispatcher - reducers
- store 
- views - React Components

![image-2.png](images/image-2.png)

## Views may generate actions 

When a view issues an action it flows through the system. 

![image-3.png](images/image-3.png)

## Actions 

An action is an Object with a type. 

![image-4.png](images/image-4.png)

## Action creators

Action creators are methods that generate actions. While these are not required, it is best practice. 

![image-5.png](images/image-5.png)

## Reducers 

Reducers make changes to state. A reducer is a function that takes in state and an action as parameters and returns **new state**. State is never modified! 
Instead, **when state changes new state is created**. 

![image-6.png](images/image-6.png)

The store holds your application state. The only way to change state is to send actions to the dispatcher. 

Unlike MVC Redux uses a unidirectional data flow. A View may generate actions
it will **never interact with a data store directly**. 

Instead, actions flow into the dispatch and are passed on to reducers which make the appropriate changes to state. Updated state flows into components
via props. 

## Store 

The store contains a JavaScript object with properties that represent the state of your application. These properties hold the data that your application takes as input and displays in views. 

![image-7.png](images/image-7.png)


## Views send action the store sends data to views

![image-8.png](images/image-8.png)

## Example: Counter with Redux

Create the Counter example with Redux. 

### Counter Challenges 

With the counter working try these challenges 

- [easy] Add a reset button - Clicking this button should reset the counter to 0
	- You'll need to add a `RESET` action and a `reset` action creator. You'll need to modify the reducer to handle this action. 
- [easy] Set the count amount - Allow the increment and decrement actions to increase or decrease the count by any amount. Currently these actions change the count by adding or subtracting 1. Modify these actions to control the amount of change by any amount. While you can just change the amount of the increase or decrease in the reducer the goal of this challenge is to do this from where you call the `increase` and `decrease` actions. 
- [moderate] Handle a list of counter - Rather than storing a single counter you need to store an array of counters. This requires some retooling. 
	- State needs to be an array
	- To increase a counter the actions need to know the index of the counter
	- Display a list of counters
- [moderate] Add an add counter button - 

## After Class

- [Assignment 6 Redux Tutorial](../Assignments/Assignment-06.md)
- Continue the custom project

## Additional Resources

1. https://facebook.github.io/flux/docs/in-depth-overview.html
1. https://redux.js.org
1. [Starter project](https://github.com/Make-School-Labs/react-redux-counter) for tutorial
1. Follow this [tutorial](https://www.youtube.com/watch?v=qeY73Ja6KLM&list=PLoN_ejT35AEjvJwYyPCo3WTpZDpdlGrRu) to review Redux