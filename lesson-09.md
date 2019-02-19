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

- Easier to Debug Applications
	- State is held in a single location
	- Changes all happen through a single system
	

- https://redux.js.org

## After Class

- Continue the custom project 
- Follow this [tutorial](https://www.youtube.com/watch?v=qeY73Ja6KLM&list=PLoN_ejT35AEjvJwYyPCo3WTpZDpdlGrRu) to review Redux

## Additional Resources

1. https://facebook.github.io/flux/docs/in-depth-overview.html
1. https://redux.js.org
