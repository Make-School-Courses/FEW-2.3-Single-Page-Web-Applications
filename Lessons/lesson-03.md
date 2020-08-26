# FEW 2.3 - Lesson 2

## Map, Filter, and Reduce 

React is built on functional programming. This class you will look at some functional programming concepts in the context of React.

## Learning Objectives/Competencies

1. Organize code with ES6 Modules 
1. Identify functional programming concepts
1. Use functional programming 
    - `Array.map()`
    - `Array.filter()`
    - `Array.reduce()`
1. Transform data with `Array.map()`

## ES6 Modules

ES6 modules organize code by both file and scope. Code is written in a 'physical' file and variables and functions defined in those files are scoped to their file. 

Variables and functions can be shared across modules using `export` and `import`. 

Take a read through the docs and see what it is has to say about modules: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

You will use modules in the homework to organize your code. 

**tl;dr**

Here is the short version of import and export. The first concept is to understand that all variables and functions are scoped to the file where they are declared. 

To share a value a file can export that value. 

```JS
// constants.js
const name = 'Foo'
const id = 'Bar'

export { name, id } // export name and id
```

Another file can import values like this: 

```js
import { name, id } from './constants.js'

console.log(name, id) // prints Foo Bar
```

A file may declare a single export as the default export. There can only be one default export and it is imported and exported a little differently. 

```JS
// constants.js
const name = 'Foo'
const id = 'Bar'

function hello() {
    console.log(name, id)
}

export default hello // the default export
export { name, id } // export name and id
```

Another file can import values like this: 

```js
import hello, { name, id } from './constants.js' // hello is the default export! 

hello() // prints Foo Bar
```

## Functional Programming 

Functional programming is a style of programming based on functions. This is different from Object Oriented Programming which based on Objects, or procedural programming which is based on procedures.

Functional programming relies on functions and avoids shared mutable state. 

The entry point for most to the world of functional programming is the Array methods: `map`, `filter`, and `reduce`.

### Array `map`, `filter`, `reduce`

The functions map, filter, and reduce are a gateway into functional programming concepts. Functional programming uses [Pure Functions](https://www.sitepoint.com/functional-programming-pure-functions/). These functions have no side effects, in other words calling a pure function doesn't make changes to a shared or global state. For the same input, a pure function will always return the same output.

<!--  -->

> Map/filter/reduce in a tweet:
>
> `[🌽, 🐮, 🐔].map(cook)` -> `[🍿, 🍔, 🍳]`
>
> `[🍿, 🍔, 🍳].filter(isVegetarian)` -> `[🍿, 🍳]`
>
> `[🍿, 🍳].reduce(eat)` -> `💩`

<!--  -->

[`Array.map()`]() transforms an array of data and **returns a new array**. With map you should have a one to one relationship with the source array. Use it to convert an array of one type into an array of another type. 

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

What's a [collection](https://en.wikipedia.org/wiki/Collection_(abstract_data_type))?

> In short a collection is an Array or an Object

Often you will need to render Arrays of JSX components. You'll often have arrays of raw data that need to be converted into an array of JSX. 

To do this we will delve into functional programming with `map`, `filter`, and `reduce`. 

React will automatically iterate over a collection of JSX elements. To avoid error these elements need to have unique keys. 

**tl;dr** Anytime you have an array of JSX elements each should have a unique key prop. For example: 

```JS
const things = [1,2,3,4].map((item, index) => {
    return <p key={`thing-${index}`}>{item}</p>
})
```

(if you're not familiar with `Array.map()` read more below)

**Q: What are keys and why do they need to be unique?**

**A:** Earlier we mentioned React's virtual DOM. This is React's system for managing components. The viritual DOM looks for changes to components, finds the things that change and updates only the elements that have been changed. 

The purpose is effeciency and speed. Updating the DOM is a slow process in the browser. 

To do this the React DOM renderer must keep track of elements uniquely. When you have lists of elements React asks that you provide a key fro each element in a list. 

**Q: What is a key? (what kinds of values can be used as keys)**

**A:** Any _unique_ value can be used as a key. You can use ids that come with data. You can generate your own values. These don't need to be special they only need to be unique. 

A key value should uniquely idenitfy a list item. In other words it should be the same value each time the list is generated. 

**Q: How do you _set_ a key?**

**A:** The key is a prop. Set it like any other prop. 

`<SomeComponent key='unique-1' />`

Read more about React Lists and Keys here: https://reactjs.org/docs/lists-and-keys.html

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

Start on [Assignment 2](../Assignments/Assignment-02.md). You'll be using map, filter, and reduce to solve some challenges here. 

## Homework

- [Assignment 2](../Assignments/Assignment-02.md)

## Additional Resources

1. [Array Map, Filter, Reduce](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)
1. [ES6 Module Practical Guide](https://medium.freecodecamp.org/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773)
1. [ES6 Modules reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
1. [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

