# FEW 1.2 - Lesson 2

## Intro 

React is built on functional programming. This class you will look at some functional programming concepts in the context of React. 

## ES6 Modules 

- Using import from and export, default 
- One Component per file 

# React iterating with keys 

Often you'll want to render a collection of JSX elements. React will automatically render a collection without you having to write a loop to do the work. 

To generate a collection JSX elements you'll usually start with a collection of other data. You'll want to transform data of one type into data of another type. 

## Learning Objectives/Competencies

1. Identify and describe
1. Define 
1. Desgin 
1. Implement 

## ES5 Modules 

This project needs to display a list of products and a list of categories for those products. All this information is in `inventory.js`. 

Your first job is to share this information with `App.js`. You can do just this with `import`.

Take a look at `inventory.js`. At the top of the file the variable `inventory` is declared and assigned an array of objects. 

Scroll to the bottom of the page. Here inventory is transformed filtered, and sorted. And, another variable `categories` is declared and assigned a value. 

`inventory` holds the array of products you need to display, and `categories` holds the names of the categories of those products. 

How are these variables shared with the rest of our program from this file? Look at the last two lines: 

```JS
export var categories = _.uniq(c)
export default inventory
```

The `export` statement allows these values to be shared from this 'Module'. Notice inventory is marked with `default` keyword. A module is a js file. Any module can export only a single default element! 

Import an exported value using the `import` statement.  Take a look at `App.js`. At the top of the file you will see: 

```JS
import inventory, { categories } from './inventory'
```
Here inventory is the default export (it is outside the {}), and categories is not default (it is inside the {}). 

## Functional Programming 

Functional programming is a paradigm or style of programming based on functions. This is different from Object Oriented Programming which based around Objects, or precedural programming which is based on prcedures.  

It's hard to put functional programming into a nushell explanation other than to say it's all about making programs built from functions. 

The entry point for most to the world of functional programming are the Array methods: map, filter, and reduce. 

### map, filter, reduce

Array map, transforms an array of data into new data. With map you should have a one to relationship with the source array. Use it to convert an array of one type into an array of another type. 

Array filter, filter returns an array containing none, some, or all of the elements from the source array. Use it to filter the contents of an array. 

Array reduce, reduces converts an array into a single value. It takes many values and returns an aggregate value. 

## Using Array.map 

- make an array of components 

## Using Array.filter

- filter the array and make components

## Using Array.reduce

- Reduce data to display the total

## Building the Product Lister

Your goal is to build a small scale React project that shows a list of products. 

- Start by forking the starter project
- Post a link to your fork of the project to the tracker 
- You must commit each time you sit down to work on this project

- Show the categories
	- Transform `categories` into array of JSX with map
	- Make a component for each category
	- Map `inventory` to components

## After Class

- Continue working on the product list
- The project should: 
	- Show the list of categories 
	- Show the list of products
	- 

## Additional Resources

1. Links to additional readings and videos
