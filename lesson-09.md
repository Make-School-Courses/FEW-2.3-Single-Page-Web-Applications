# FEW 2.3 - Lesson 9

# Redux

This class will cover Redux which is an application state management tool. Application represents the data that your app manages and displays. Often it is shared across mulitple views and can be updated in complex ways. 

Redux is a JS library based on the Flux pattern that 

## Learning Objectives/Competencies

1. Identify Application state 
1. Define Actions and Action Creators 
1. Define Reducers

## Initial Lecture: What is Application state?

Application state is the content of memory used by your application! You can think about as the variables that define your application at any moment. 

That's seems like a lot to keep track of. For practical purposes we don't have to think of the entire contents of memory. Instead think of only the variables that determine the how your application displays itself at the moment. For this purpose you can remove all of the boilerplate and framework code from the equation. 

Another way to think of application state is to think of the values that you would have to load to recreate the application in it's current "state". 

## Discuss Application State

Discussion: Identify the state in your application. Think of one of your applications and identify all of the variables that would be required to reload the application into a previous state.

## The Flux Pattern? 

Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a **unidirectional data flow**. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.

Flux applications have three major parts: the **dispatcher**, the **stores**, and the **views** (React components). These should not be confused with Model-View-Controller. Controllers do exist in a Flux application, but they are controller-views — views often found at the top of the hierarchy that retrieve data from the stores and pass this data down to their children. Additionally, action creators — dispatcher helper methods — are used to support a semantic API that describes all changes that are possible in the application. It can be useful to think of them as a fourth part of the Flux update cycle.

Flux eschews MVC in favor of a unidirectional data flow. When a user interacts with a React view, the view propagates an action through a central dispatcher, to the various stores that hold the application's data and business logic, which updates all of the views that are affected. This works especially well with React's declarative programming style, which allows the store to send updates without specifying how to transition views between states.

- https://facebook.github.io/flux/docs/in-depth-overview.html

## Redux

What is Redux? A JavaScript implementation of the Flux Pattern. Redux describes itself as

> A predictable state container for JavaScript apps.

Keep in mind that Application state and Redux is different from Component state. While Components each can define and hold on to their own state. Application state in Redux is help outside of any component and can passed into a component through props. 

In other words Redux holds state outside of components and components can register to receive updates when state changes and and hooks that allow components to make changes to state.

### Why use Redux? 

**Pros**

- Easier to Debug Applications
	- State is held in a single location
	- Changes all happen through a single system
- Predicatable 
	- State changes can only be initiated with an action
	- Any change has to complete before another action is handled
- Easier to reason about your application
	- Actions are listed in one location
	- Reducers handling changes to state exist in one location
- Makes it easy to expand your applications
	- Adding new actions and reducers is easier than building every new system from scratch
	- Defines a pettern for working with state
	
**Cons** 

- Setup and tooling 
	- There are a few steps required to set up Redux
	- There is a learning curve

- https://redux.js.org

## The Flux Pattern

## The problem

Typically our apps use two way communication. This creates a complex mashup that 
invites problems as apps grow in complexity. 

![image-1.png](images/image-1.png)

## The solution

One way data flow.

Redux enforces a one way data flow. This creates reliable and reproducible 
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

Action creators are methods that generate actions. While these are not 
required, it is best practice. 

![image-5.png](images/image-5.png)

## Reducers 

Reducers make changes to state. A reducer is a function that takes in state 
and an action as parameters and returns **new state**. State is never modifed! 
Instead, **when state changes new state is created**. 

![image-6.png](images/image-6.png)

The store holds your application state. The only way to change state is to 
send actions to the dispatcher. 

Unlike MVC Redux uses a unidirectional data flow. A View may generate actions
it will **never interact with a data store directly**. 

Instead actions flow into the dispatch and are passed on to reducers which 
make the appropriate changes to state. Updated state flows into components
via props. 

## Store 

The store contains a JavaScript object with properties that represent the 
state of your application. These properties hold the data that your 
application takes as input and displays in views. 

![image-7.png](images/image-7.png)


## Views send action the store sends data to views

![image-8.png](images/image-8.png)

## After Class

- Continue the custom project 
- [Starter project](https://github.com/Make-School-Labs/react-redux-counter) for tutorial
- Follow this [tutorial](https://www.youtube.com/watch?v=qeY73Ja6KLM&list=PLoN_ejT35AEjvJwYyPCo3WTpZDpdlGrRu) to review Redux

## Additional Resources

1. https://facebook.github.io/flux/docs/in-depth-overview.html
1. https://redux.js.org
