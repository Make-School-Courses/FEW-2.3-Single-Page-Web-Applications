# FEW 1.2 - Lesson 1

Getting started with Single Page Applications and React. 

# Intro

React is one of the  most popular web frameworks available today and with good reason. It's fast effecient and has a great work flow. React uses functional reactive programming to solve many of the headaches of creating user interfaces.

It's also popular with all of the big name companies. 

- Airbnb
- Facebook
- Instagram
- Netflix
- New York Times
- Yahoo! Mail
- Khan Academy
- Whatsapp
- Vivaldi Browser
- Codeacademy
- Dropbox
- Uber
- Twitter 
- Pinterest
- Instacart
- Reddit 
- Hubspot
- Disqus
- Pandora
- and many more...

If you are going to master a single framework make it this one! It's hugely popular right now and all of the top companies are using it. Expect to see React on job applications and in use at companies you migth apply to. 

## Learning Objectives

1. Create components
1. Define the virtual DOM
1. Use JSX 
1. Differentiate props and state 

## What is react?

This is how React describes itself: 

> A JavaScript library for building user interfaces

React is based on Functional Reactive programming. 

In a nutshell Reactive programming is programming with Event Streams. 

An Event Stream is like an Array of events, or things that can happen. Arrays map things in space. Event streams map things in time. 

React uses Reactive Programming to create a front end architecture that updates components with streams of events as they occur in time. 

React is built on  two core features: Components, and Virtual DOM. 

### Components 

Components encapsulate state and view. A component updates it's view in response to in coming events. 

What you need to know: 

- React Projects are built from components
- Most of your work with React will be writing components. 
- Components can be nested one with in another. In other words a component can have children or be the child of another component
- Components are objects. You can make instances of them. 
- Components encapsulate both logic (methods and code), state (properties), and a view (components render themselves.)
- The view of a component is written in JSX. JSX is an extension of the JavaScript language. You'll write it along with with your other JavaScript. 

### Virtual DOM 

Updating the DOM is a slow opperation. To speed this up React creates a virtual DOM. Manipulating the virtual DOM is much faster than manipulating the DOM directly. 

In a React app **making changes to the virtual DOM has no effect on the actual DOM**. 

Your code makes changes to the virutal DOM while behind the scenes react makes chnages to the DOM. 

What you need to know: 

- React keeps track of all components in the virtual DOM.
- Making changes to DOM directly does not work with React! 
- Mmanipulating the DOM within a React project should almost always be handled with a Component!
	- In other words `document.getElementById()` is not compatible with React! 

Read more about the virtual DOM [here](https://reactjs.org/docs/faq-internals.html).

## ES6 Functions 

Quick Review of ES6 functions

## Getting Started

Your first assignment is to complete this [tutorial](https://reactjs.org/tutorial/tutorial.html)

We will get started in class and walk through the first part of the tutorial. 

- Install Create React App
	- Following the tutorial 
		- Get the starter code and look through it.
- Make a component 
- Working with JSX 
- ES6 modules import from and export and default
- Nesting Components 
- Get started on [tutorial](https://reactjs.org/tutorial/tutorial.html)
	- Make a Repo for the tutorial
	- Post a link to the repo in the tracker
	- This should be completed By class 2

###  After Class: React Tutorial (3 hrs)

Your goal is to complete this [tutorial](https://reactjs.org/tutorial/tutorial.html)

- Your goal is to get through the tutorial in 3 hours. 
	- Don't spend too much time researching every new topic that might come up. You'll get a chance to revisit all of these as the term progresses. 
	- In the setup options choose option 2: Local Development environment. 

## Additional Resources

1. Links to additional readings and videos
