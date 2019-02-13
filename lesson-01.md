# FEW 2.3 - Lesson 1

Getting started with Single Page Applications and React. 

## Single Page Applications (SPA)

Single Page Applications (SPA) are web pages that act as software applications. A traditional web site is made up several pages all linked, where the current web page is removed from memory when a new page is loaded.  A Single Page Application is a single web page that loads data and displays different content by changing the content of the current page without loading a new web page.

The [Killer App](https://en.wikipedia.org/wiki/Killer_application) for SPAs was Gmail. Gmail is a single web page that lists your email, views email, sends email and more all within a single HTML document.

SPAs are the way web pages of more than minimal complexity are created these days. These days every page you view in a browser is like loading and running a new application!

![dilbert-killer-app.gif.png](dilbert-killer-app.gif.png)

## What is React 

React is one of the most popular web frameworks available today and with good reason. It's fast efficient and has a great workflow. React uses functional reactive programming to solve many of the headaches of creating user interfaces.

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

If you are going to master a single framework make it this one! It's hugely popular right now and all of the top companies are using it. Expect to see React on job applications and in use at companies you might apply to. 

Beyond this React has moved frontend web development forward and laid the ground modern front end systems. Expect future front end frameworks to build and evolve on what React has done. 

## Learning Objectives

1. Create components
1. Use JSX 
1. Differentiate props and state 
1. Define the virtual DOM

## But, What is React really?

React describes itself as: 

> A JavaScript library for building user interfaces

React is used for building user interfaces. It's the view in any system. It's a little more but building UI is what React was made to do. 

### Functional Programming 

React is built on Functional Reactive programming. In a nutshell, functional programming is programming with functions. FP avoids mutable data and shared state. 

### Reactive Programming

In a nutshell, Reactive programming is programming with Event Streams. 

An Event Stream is like an Array of events. Arrays map things in space. Event streams map things in time. 

React uses Reactive Programming to create a front end architecture that updates views with streams of events as they occur in time. Changing a value will update a view in React.  

## React core features

React is built on three core features: Components, JSX, and Virtual DOM.     

### Components 

Components encapsulate state and view. A component updates its view in response to changing values. 

What you need to know: 

- React Projects are built from components
- Most of your work with React will be writing components. 
- Components can be nested one within another. In other words, a component can have children or be the child of another component
- Components are objects. You can make instances of them. 
- Components encapsulate both logic (methods and code), state (properties), and a view (components render themselves.)

### JSX

JSX is an extension of the JavaScript language. It allows you to write code using an XML like syntax alongside regular JavaScript. 

JSX is compiled into vanilla JavaScript. 

What you need to know: 

- The view of a component is written in JSX
- JSX is an extension of the JavaScript language 
- JSX compiles to vanilla JavaScript 
- JSX has its own special syntax
    - More on this in the tutorial

### Virtual DOM 

Updating the DOM is a slow operation. To speed this up React creates a virtual DOM. Manipulating the virtual DOM is much faster than manipulating the DOM directly. 

In a React App making changes to the DOM will often not work as expected since those changes will be overwritten by the virtual DOM! 

ReactDOM looks at the virtual DOM and compares it real DOM making changes only where necessary. 

What you need to know: 

- React keeps track of all components in the virtual DOM.
- Making changes to DOM directly does not work with React! 
- Manipulating the DOM within a React project should almost always be handled with a Component!
    - In other words `document.getElementById()` is not compatible with React! 

Read more about the virtual DOM [here](https://reactjs.org/docs/faq-internals.html).

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

## After Class 

**React Tutorial (3 hrs)**

Your goal is to complete this [tutorial](https://reactjs.org/tutorial/tutorial.html)

- Your goal is to get through the tutorial in 3 hours. 
    - Don't spend too much time researching every new topic that might come up. You'll get a chance to revisit all of these as the term progresses. 
    - In the setup options choose option 2: Local Development environment. 
    
## React Tutorial Rubric

| -            | Does not meet expectations | Meets expectations       | Exceeds expectations |
|:-------------|:---------------------------|:-------------------------|:---------------------|
| Completed    | Did not complete           | Completed tutorial       | Solved some or all challenges |
| Functional   | Is not functional          | Base tutorial functional | Challenges are functioning |
| Code quality | Indentation is bad spacing is inconsistent | Uses consistent indentation and spacing | Well written and well commented |
| Work Ethic   | Did not commit when working on project | Initial commit at class and commit while working | Commits show 3 hours and clearly document process | 

## Additional Resources

1. [ES6 Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
1. [tutorial](https://reactjs.org/tutorial/tutorial.html)
1. [JSX](https://reactjs.org/docs/introducing-jsx.html)