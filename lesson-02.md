# FEW 1.2 - Lesson 2

## Intro 

React is built on functional programming. This class you will look at some functional programming concepts in the context of React.

## React collections and Keys

Often you will need to render Arrays of JSX components. You'll often have arrays of raw data that need to be converted into an array of JSX. 

To do this we will delve into functional programming with map, filter, and reduce. 

React will automatically iterate over a collection of JSX elements. To avoid error these elements need to have unique keys. 

## Learning Objectives/Competencies

1. Organize code with ES6 Modules 
1. Identify functional programming concepts
1. Use functional programming 
    - `Array.map()`
    - `Array.filter()`
    - `Array.reduce()`
1. Transform data with `Array.map()`

## The Sample project 

To get started download the sample project. This project was created with the Create React App starter. 

[Product List Challenge](https://github.com/Product-College-Labs/react-product-list)

## ES6 Modules 

The challenge project needs to display a list of categories and a list of products for those categories. All this information is in `inventory.js`. 

Your first job is to share this information with `App.js`. You can do just this with `import`.

Take a look at `inventory.js`. At the top of the file, the variable `inventory` is declared and assigned an array of objects. 

Scroll to the bottom of the page. Here inventory is transformed filtered and sorted. And, another variable `categories` is declared and assigned a value.

`inventory` holds the array of products you need to display, and `categories` holds the names of the categories of those products.

**Export**

These variables are shared with other modules by exporting them. Look for the two lines below: 

```JS
export var categories = _.uniq(c)
export default inventory
```

The `export` statement allows these values to be shared from this 'Module'. Notice inventory is marked with `default` keyword. A module is a js file. Any module can export only a single **default** element! 

(I used the Lodash library here to sort the list of products and categories and create a unique list of the categories in the inventory array. This is not important to the lesson.)

**Import** 

Import an exported value using the `import` statement. Take a look at `App.js`. At the top of the file you will see: 

```JS
import inventory, { categories } from './inventory'
```
Here inventory is the default export (it is outside the {}), and categories is not default (it is inside the {}).

Look at the export statements above. Where     `inventory` is exported it includes the keyword `default`. This makes `inventory` the default export. A module may only have one default export. 

## Functional Programming 

Take a look at the example project. Look at the file 

Functional programming is a paradigm or style of programming based on functions. This is different from Object Oriented Programming which based on Objects, or procedural programming which is based on procedures.  

It's hard to put functional programming into a nutshell explanation other than to say it's all about making programs built from functions and avoids shared state and mutable data. 

The entry point for most to the world of functional programming is the Array methods: `map`, `filter`, and `reduce`. 

### Array `map`, `filter`, `reduce`

The functions map, filter, and reduce are a gateway into functional programming concepts. Functional programming uses Pure Functions. These are functions that have no side effects. For the same input, a pure function will always return the same output. 

`Array.map()` transforms an array of data and returns a new array. With map you should have a one to one relationship with the source array. Use it to convert an array of one type into an array of another type. 

For example, you might transform an array of numbers into an array of strings. 

`Array.filter` returns an array containing none, some, or all of the elements from the source array. Filter returns a new Array.  

For example, you might filter an array of products to create an array of products with prices less than $10. 

`Array.reduce` converts an array of values into a single value. It takes many values and returns a single aggregate value. 

For example, you might use reduce to get the total cost of all products in a shopping cart array. 

## Using Array.map 

Use `Array.map()` to transform an Array of elements into an array of different elements. When working with React you will often want to transform an array of data into an Array of JSX elements to display. 

Imagine you have an array of category names that are strings, and you want to make them JSX buttons. 

```JavaScript
const catButtons = categories.map((catName) => {
    return <button>{catName}</button>
})
```

Important! `catButtons` is a new Array! The source array `categories` is unmodified! 

## Using Array.filter

Use `Array.filter()` to create a new Array that contains none, some, or all of the contents of the source Array. 

For example, to get a list of only items in a category. 

```JavaScript
const allToys = inventory.filter((item) => {
    return item.category = 'Toys'
})
```

The sample returns a new array containing items from inventory where the category is Toys. 

## Using Array.reduce

Use `Array.reduce()` to reduce a collection of values to a single value. 

For example, you get the total cost of the inventory by adding all of the prices. 

```JavaScript
const allToys = inventory.reduce((total, item) => {
    return total += item.price
}, 0)
```

The first parameter of reduce is a function, the second parameter is the starting value of the accumulator. Here the starting value is 0. 

The first param of reduce takes in the accumulator and the current value. The accumulator is the running total, and the current value is one of the items from the Array.

## React collections and Keys 

React will automatically display a collection of JSX elements in JSX. For example: 

```JavaScript 
const ListOfButtons = (props) => {
    const buttons = [<button />, <button />, <button />]
    return (
        <div>
            {buttons}
        </div>
    )
}    
```

React automatically renders the array of JSX elements, no need to iterate. 

More often than not you will be receiving an Array of one type and converting it to an Array of JSX. So the example above is more likely to look like this: 

```JavaScript 
const ListOfButtons = ({ items }) => {
    const buttons = items.map( item => <button label={item.label} />)
    return (
        <div>
            {buttons}
        </div>
    )
}    
```

Here you can imagine the `items` as an array of objects with a label property. 

React needs to be able to keep track of elements with a stable identity. To do this you'll get elements in a list a `key`. The value for the key can be any value that is **unique among siblings**. While you can use an index, save this as a last resort. Use a unique id or other unique string that describes your data. 

In the example above, if we knew that the label was unique it could be used as the key. 

```JavaScript 
const ListOfButtons = ({ items }) => {
    const buttons = items.map( item => <button key={item.label} label={item.label} />)
    return (
        <div>
            {buttons}
        </div>
    )
}    
```

## Add Styles 

There are a few different techniques that can be used to style React projects. We will cover different techniques in class. For this project, you can use a traditional approach of class names and stylesheet. 

Put your styles in index.css. Use class names to assign styles to JSX elements. 

For any component asssign a class name by using the `className` attribute. For example: 

`<button className="category-button" ... />`

In your stylesheet you might style this with:

`.category-button { color: red }`

## In Class 

Using the starter project try the following challenges with Map, Filter, and Reduce. 

- List all of the categories
    - Map the array of strings to an array of JSX buttons. 
    - Make a component for the category button
- List all of the products 
    - Map the inventory of Objects into an array of JSX components
    - Make a component for the inventory item

## After Class

**React Product Lister**

Your goal is to build an app using React. This app is simple and borrows ideas from the React tutorial. 

Get the starter project code here: [Product List Challenge](https://github.com/Product-College-Labs/react-product-list).

Follow the instructions in the Readme. 

## React Product List Project

| -            | Does not meet expectations | Meets expectations       | Exceeds expectations |
|:-------------|:---------------------------|:-------------------------|:---------------------|
| Completed    | Did not complete           | Completed challenges 1-3 | Completed challenges 4-6 |
| Functional   | Is not functional          | Base functionality, displays products and categories, can filter products by category | Has the All button, and highlights current category |
| Code quality | Indentation is bad spacing is inconsistent | Uses consistent indentation and spacing | Well written and well commented |
| Structure and Architecture | All code is in App.js | Uses App.js and two other components | Uses App.js, 3 or more components, and makes use of presentational and stateful components to best advantage |
| Work Ethic   | Did not commit when working on project | Initial commit at class and commit while working | Commits show 3 hours and clearly document process | 

## Additional Resources

1. [Array Map, Filter, Reduce](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)
1. [ES6 Module Practical Guide](https://medium.freecodecamp.org/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773)
1. [ES6 Modules reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
1. [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

