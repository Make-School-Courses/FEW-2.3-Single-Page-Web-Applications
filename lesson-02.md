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

1. Start a project from the Starter Template using Create React App
1. Use ES6 Modules
1. Create component based SPA
1. Use functional programming concepts: Map, Filter, and Reduce 
1. Implement event handlers in React   
1. Build an Application with component based architecture 

## ES6 Modules 

The challenge project needs to display a list of categories and a list of products for those categories. All this information is in `inventory.js`. 

Your first job is to share this information with `App.js`. You can do just this with `import`.

Take a look at `inventory.js`. At the top of the file the variable `inventory` is declared and assigned an array of objects. 

Scroll to the bottom of the page. Here inventory is transformed filtered, and sorted. And, another variable `categories` is declared and assigned a value.

`inventory` holds the array of products you need to display, and `categories` holds the names of the categories of those products.

**Export**

These variables are shared with other modules by exporting them. Look for the two lines below: 

```JS
export var categories = _.uniq(c)
export default inventory
```

**Import** 

The `export` statement allows these values to be shared from this 'Module'. Notice inventory is marked with `default` keyword. A module is a js file. Any module can export only a single default element! 

Import an exported value using the `import` statement. Take a look at `App.js`. At the top of the file you will see: 

```JS
import inventory, { categories } from './inventory'
```
Here inventory is the default export (it is outside the {}), and categories is not default (it is inside the {}).

Look at the export statements above. Where 	`inventory` is exported it includes the keyword `default`. This makes `inventory` the default export. A module may only have one default export. 

## Functional Programming 

Take a look at the example project. Look at the file 

Functional programming is a paradigm or style of programming based on functions. This is different from Object Oriented Programming which based around Objects, or precedural programming which is based on prcedures.  

It's hard to put functional programming into a nushell explanation other than to say it's all about making programs built from functions. 

The entry point for most to the world of functional programming are the Array methods: `map`, `filter`, and `reduce`. 

### `map`, `filter`, `reduce`

`Array.map()`, map transforms an array of data into a . With map you should have a one to one relationship with the source array. Use it to convert an array of one type into an array of another type. 

For example you might transform an array of numbers into a an array of strings. 

`Array.filter`, filter returns an array containing none, some, or all of the elements from the source array. Use it to filter the contents of an array. 

For example you might filter an array of products to create an array products with prices less than $10. 

`Array.reduce`, reduce converts an array into a single value. It takes many values and returns an aggregate value. 

For example, you might use reduce to get the total cost of all products in a shop cart array. 

## Using Array.map 

- make an array of components 

## Using Array.filter

- filter the array and make components

## Using Array.reduce

- Reduce data to display the total

## After Class

**React Product Lister**

Your goal is to build an app using React. This app is simpole and borrows ideas from the React tutorial. 

Get the starter project code here: [Product List Challenge](https://github.com/Product-College-Labs/react-product-list).

Follow the instructions in the Readme. 

## Additional Resources

1. Links to additional readings and videos
