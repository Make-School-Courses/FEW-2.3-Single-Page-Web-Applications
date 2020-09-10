# Class - FEW 2.3 - Assignment 2

Map, Filter, Reduce

## Description 

Map, Filter, and Reduce are important methods. After you learn these you will wonder how you got by without them in the past, you will also want to use them often. 

The best way to learn about map, filter, and reduce is to put them into use! 

The purpose of this assignment is to get some practice with map, and reduce. You'll practice with filter in a future assignment. 

Another purpose of this assignment is to set up the date that will be used in the following assignment. 

Last, the assignment will look at using modules in JS and using `import`, `from`, `export`, and `default`. You'll usde these to control the scope of code you write while limiting code that you share with other modules. 

### Background 

Here is an [awesome Tweet](https://twitter.com/steveluscher/status/741089564329054208?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E741089564329054208&ref_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fjavascript-map-reduce-and-filter-explained-with-examples%2F) that sums up Map, Filter, and Reduce

> Map/filter/reduce in a tweet:
>
> `[🌽, 🐮, 🐔].map(cook)` -> `[🍿, 🍔, 🍳]`
>
> `[🍿, 🍔, 🍳].filter(isVegetarian)` -> `[🍿, 🍳]`
>
> `[🍿, 🍳].reduce(eat)` -> `💩`

All three are methods of Array. 

Use Map to transform all elements of an array. For example, take an array of objects and turn them into an array of Strings. Here you'd be starting with an array of Objects and creating an array of strings. Transform Object to String. 

Use Filter to create a new Array that is a subset of the source array. For example, take an array of product objects and return an array of products with the category "Books". Here you'd have started with an array of products in all categories and create a new array of products of only one category. 

Use Reduce to create a new value from a source array. Usually this will be a single value but there isn't any rule that says you can't make an object from an array. For example, you might take an array of products and get a sum of of the prices for all products. Here you started with an array of products and ended with a number. 

https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

### Why this assignment? 

Besides being a step in a larger project that you will continue with in the next assignment, learing Map, Filter, and Reduce will make you a better programmer, while also giving you more options and better solutions to the programming problems you encounter. 

Map, Filter, and Reduce are not esoteric oddities that you might use once in a blue moon, these are important tools that you can use in almost any programming problem that involves Arrays. They abstract three of the most common operations that programmers perform on data collections. 

## Project requirements

Create a new React Project with 

`npx create-react-app react-product-list`

Copy the [`data.json`](data.json) file into your src directory. 

Make a new "module". A module is just a JS file. Name your file: `data.js`

Anything you define in this file will be scoped to this file. 

**Modules only work in the the node environment.** If you can use `import`, `from` you are using modules. 

All variables and functions you define are scoped to the Module/file where they are defined. 

https://javascript.info/modules-intro
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

Import your JSON data into your module: 

`import data from './data.json'`

JSON is text format but is easily translated into a JavaScript. Importing like this will convert the JSON data into an array of objects. 

What's in data? The example data is an array of objects describing products. Each product has the following properties: 

- id 
- name 
- category
- description
- price
- rating 
- units

## Challenges 

**Challenge 1** - Get the array of products. 

You should be able to do this by importing the JSON file. Best to make a module, soemthing like `data.js`, and import the JSON at the top of this file. You can export the array from here. 

This data.js module can now be a place where you will work with data from data.json and export the things that the rest of your program needs.

```JS
import data from './data.json' // imports data.json

export default data // export the native JS array
```

With this you can now import your data and work with it from any other module. 

Results:

```JS
import data from './data' // imports dats from data.js

[
  { ... }, 
  { ... }
  ...
]
```

**Challenge 2** - Get a list of all categories.

Inside your data.js module make a list of all of the categories contained in the data. Do this with Array.map(). **Remember map returns a new array and is used to transform an array of one type into an array of another type.** In this case you have an array of Objects and you want an array strings what are the category names.

To do this use map on the data. In the callback return the category. 

Results:

```JS
[
  "Movies", 
  "Grocery", 
  "Baby", 
  ... 
]
```

**Challenge 3** - Make the categories list a list of unique values. 

There are a few ways to solve this problem. While there could a lot of searching the categories array for duplicate value a better solution would be to a data structure that only allows unique values. You have two choices in JS: 

- Set - It's like an array but all values must be unique
- Object - Keys must be unique

To build the Build a set or an object with category names as keys you could use Array.reduce(). **For this to work you must set the initial value!**

Using a Set: Assuming you have array of all category names. 

```JS
// Make a set from an array all values of the set will be unique!
const categorieSet = new Set(categories) 
// Make an array from a set with Array.from()
const categoriesUnique = Array.from(categorieSet)
```

Using an Object: Assumes you have an array of category names.

```js 
// Make an object where each key is a category name
const categoryObjects = categories.reduce((obj, cat) => {
  obj[cat] = 0
  return obj
}, {}) // !!! Be sure to define the initial value as an Object!
// Make an arr array of the keys
const categoriesUnique = Object.keys(categoryObjects)
```

Results: as above but **no values are duplicated.**

```JS
[
  "Movies", 
  "Grocery", 
  "Baby", 
  ... 
]
```

**Challenge 4** - Make an Object whose keys are the names of categories and whose values are 
the number of times that category appears in the data.

To do this use Array.reduce(). Why use reduce? Think about it like this: You have an array of objects and you want to reduce it to a single object. The idea is to end up with an Object that looks like: 

```JS
{ 
  Movies: 6, 
  Grocery: 4, 
  Baby: 7, ... 
}
```

Here the key is the name of the category and the value of that key is the count of products in that category. 

Start here: 

```js 
const categoriesWithCounts = data.reduce((obj, cat) => {
  // check if cat exists as a key on obj
  // if so add 
    // 1 to the value of this key
  // else 
    // set this key with a value of 1
  return obj
}, {}) // !!! Be sure to define the initial value as an Object!
```

THe idea here is loop through all of the data. With each item check to see if that key exists. If not you can add that key and give it a value of 1. 

Results: 

```JS
{ Movies: 6, Grocery: 4, Baby: 7, ... }
```

**Challenge 5** - Use Reduce to make an array of objects that have a name and a count. This 
array will be similar to Challenge 4 but in a different format. For this list all of the names 
should be unique and each should only appear once!

Follow the same ideas from the previous challenge. This time reduce to an array: 

```js 
categories.reduce((acc, cat) => {
  ...
}, []) 
```

This use the values you created in the previous challenges to make this solution. You can reduce the list of unique category names to an array. In the callback get the count with the category name from the categories object from the last challenge. 

Results: 

```JS
[
  {name: "Movies", count: 6}, 
  {name: "Grocery", count: 4}, 
  {name: "Baby", count: 7},
  ...
]
```

**Challenge 6** - Export all of the data you have collected.

- Export the data array as the default export. This array you imported from data.json. You can 
just export it unchanged. 

- Make sure you've given each of the other arrays and objects you've created good descriptive
names and export those. 

At this step you migth have something like this: 

```JS 
// The default export
export default data 

// The other exports
export { categories, productCount, categoriesAndCount }
```

**Challenge 7** - Import your exported data into the App component. If the exports matched 
the example is Challenge 6 the import would look like this: 

```JS
import data, { categories, productCount, categoriesAndCount } from './data'
```

Import your data into `App.js`.
 
Display some of the information here: 

- Display the number of products
- Display the number of categories

**Challenge 8** - Display the categories as buttons

Challenge: List all of the **categories** at the top of the page. 

- Display the categories as buttons. 
- Use `Array.map()` to transform the `category` array into an array of JSX/Components
- You can import categories into any module with `import { categories } from './data'`

When you're done is might look like: 

![ass-2-ch-8.png](ass-2-ch-8.png)

**Challenge 9** Display the products

Challenge: List all of **products** below the categories buttons. 

- Each Product should display with it's name, category, and price. How these are displayed is up to you. 
  - If you add a class name to a JSX element use `className` in place of `class` for example `<div className="product">`. See the documentation for [`className`](https://reactjs.org/docs/faq-styling.html) for more information.
- You can import the inventory Array into any module with `import data from './data'`.
- `data` is an Array of Objects with properties: id, name, description, price, and category. See the notes above for more details. 

When you're done it might look like this: 

![ass-2-ch-9.png](ass-2-ch-9.png)

**Challenge 10** - Add some interaction and functionality. The goal here is to click on a category button to filter the list of products so only products in the chosen category are displayed. 

Challenge: Clicking a category should display **only** products in that category.

- The parent component, that is the component that is parent to both the product list and the category list, should define the current category on `this.state`.
  - Define state as an object in the constructor
  - Set a property on the state object, something like: `currentCategory`
  - Give it a sensible default value: `this.state = { currentCategory: null }`
- Add an `onClick` handler for each category button. This should: 
  - Pass the category String/name of the button to the handler.
  - Set `currentCategory` on state with `this.setState({ currentCategory: newCategory })` or something similar. 
- Use `Array.filter()` to display only products in `data` where the category matches. Something like: 

```js
data.filter((item) => {
  return item.category === this.state.currentCategory || this.state.currentCategory === null
})
```

**Challenge 10** - Use components! Whenever possible you should use a component. React uses a component architecture. The component architectrure is a really good thing it makes your projects easier to manage, keeps your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), and makes your code more portable. 

1. Make a component that is a category button. 
  - Define this in a module/JS file. Something like: `category-button.js`
  - Be sure to export this. Something like: `export default CategoryButton`
  - Set the label and click function as props, something like: `<CategoryButton label={cat} onClick={() => clickCategory(name) } />`
1. Define a component that is a product.
  - The product component should take in it's id, name, description, and price as props. Alternately it could take an object with these properties. 
  - The product component should display these bits of information in a reasonable way. 

The category button component might look like this. These are inclomplete! You'll need to retool these to fit your project. 

```JS
import { Component } from 'react'

class CategoryButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>
  }
}
```

The product component might look like this:

```JS
import { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.name}</p>
        <p>${this.props.price}</p>
      </div>
    )
  }
}
```

**Challenges 11** - Unless you went rogue, the page is probably looking pretty bland. Better add some styles! 

1. Style the category buttons. Make them look like something people will want to click on. 
  - Use Flex box to put them all in a row. It's okay if they wrap, there are many categories. 
1. Style the products in the list. 
  - Use CSS Grid. You can just set the number of columns with: `grid-template-columns` this should be enough to get all your pro**ducks** in a row so to speak. 

**Challenges 12** - Handling the details. If you've got the items above worked out you'll realize the interface is not very satisfying. You can make it better! 

1. Display All categories
  - Add one more button to the list of category buttons. It's label should "All".
  - Clicking this button should display all products.
2. We need to know which category is currently selected. The buttons should reflect. 
  - Define a style to make the currently selected category stand apart from the other buttons.
  - When generating the category elements check the category name against `this.currentCategory` if the names match assign a class to that element, something like `selected-category` remember to use `className` not `class`!
  - You'll need to take into account that the "All" button is it's own category and this category should display all the products! 

**Challenges 13** - Okay so you did all of the other challenges and you need something more to do, good for you! 

1. Use `Array.reduce()` to get the sum of all of the prices for all Products. 
  - Remember the prices are stored as Strings you'll need to convert these to numbers. You'll also need to remove the first character of the string which is the "$": `price = item.price.substring(1)`. Then parse the string value into a float with Something like: `parseFloat(price)` should work.  
  - Display this somewhere on the page.
2. Using `Array.reduce()` again, sum the total for currently selected products. In other the sum of all the prices for the products in the currently selected category. 
3. Use `Array.reduce()` to count the number of products in each category. 
  - Display count for each category as "badge" next to the category label in each category button. 
4. Display the number of units for each product somewhere in the product display component. 
  - If there are 0 units make this product look displayed. 
5. Show the rating for each product. 

**Stretch Challenges** - These are challenges you can try to further practicw with map, filter, and reduce. 

**Challenge 14** - The category buttons are useful. Currently they should display all of the items with a matching category. These buttons could be even more useful if you could select more than one category at a time! 

1. Allow for selecting multiple categories. For example selecting Toys, Automotive, and Music should show all of the inventory items in the data array that match any of these three categories. 
2. The category selected category buttons should display showing they are currently selected. 
3. Selecting the All button should deselect the other category buttons and show all inventory items. 

**Challenge 15** - Add a shopping cart. The cart should display a list of items that have been added to the cart. Inlcude an Add to Cart button with each inventory item. 

1. Add a component that will display the shopping cart. 
2. Inventory items need an add to cart button. Clicking this button should add the item to the cart. 
3. The cart should display items added to the cart. If the same item is added more than once it should show the count. For example: Flexidy x 3
4. Show the price of the item in the cart. 
5. Show the total of all items in the cart at the bottom of the cart component. 

## Some Visuals

Some people like pictures. Here are a few images showing what the project might look like when you are finished, with some notes. 

![picture-1](../notes/picture-1.png)

![picture-2](../notes/picture-2.png)

### Deliverable

A link to your completed project on GitHub in the course progress tracker.  

### Due date

Class 3

## Assessing the assignment

| - | **Does not meet expectations** | **Meets expectations** | **Exceeds expectations** |
|:--------------|:-------------------------------|:-----------------------|:-------------------------|
| **Completed** | Did _not complete_ | Completed challenges 1-3 | Completed challenges 4-6 |
| **Functional** | Is _not functional_ | Has _base functionality_, displays products and categories, can filter products by category | Has the All button, and highlights current category |
| **Code quality** | Indentation is bad spacing is _inconsistent_ | Uses _consistent_ indentation and spacing | _Well written_ and well commented |
| **Structure and Architecture** | All code is in App.js | Uses App.js and two other components | Uses App.js, 3 or more components, and makes use of presentational and stateful components to best advantage |
| **Work Ethic** | Did not commit when working on project | Initial commit at class and commit while working | Commits show 3 hours and clearly document process | 


## Map Filter Reduce Practive problems

Try these practice problems. 

```JS 


// Transform objects to categories 
const allCategories = data.map((obj) => {
  return obj.category
})
console.log(allCategories) // Should display ["Toys", "Kids", "Electronics", ...]


// Transform objects to prices 
const allPrices = data.map((obj) => {
  // What goes here? 

})

console.log(allPrices) // should display ["$12.07", "$185.21", "$190.79", ... ]


// Transform objects to names 
const allNames = data.map(/* What goes here? */)

console.log(allNames) // Should display ["Zoolab", "Lotstring", "Fintone", ... ]


// Transform Objects to ratings
const allRatings // Map data to a list of ratings

console.log(allRatings) // [3.0, 3.0, 3.1, ... ]

// Transform objects to units
// You do it all

// -------------------------------------------------

// Now combine two or more properties to getnerate new values 

// Transform objects into names and prices
const namesAndPrices = data.map((obj) => {
  return `${obj.name} ${obj.price}`
})

console.log(namesAndPrices) // ["Zoolab $12.07", "Lotstring $185.21", "Fintone $190.79", ... ]


// Teansform objects into names and categories
const namesAndCategories = data.map((obj) => {
  // what goes here?
})

console.log(namesAndCategories) // ["Zoolab Toys", "Lotstring Kids", "Fintone Electronics", ... ]


// Transform data into Names and ratings
const namesAndRatings = data.map(/* what goes here?  */)

console.log(namesAndRatings) // // ["Zoolab 3.0", "Lotstring 3.0", "Fintone 3.1", ... ]


// Transform data into an array of strings that show: 
// Name price and rating
// Zoolab $12.07 Rating: 3.0
const namePriceRating = data.map((obj) => {
  return `${obj.name} ${obj.price} Rating: ${obj.rating}`
})

console.log(namePriceRating) // ["Zoolab $12.07 Rating: 3.0", ... ]


// Transform data to an array of 
// Name category Units
// Zoolab Toys Units: 632
const nameCategoryUnits = data.map(/* What goes here? */)


// Transform data into 
// id Name Category 
// 1 Zoolab Toys
const idNameCategory // you do the rest

console.log(idNameCategory)

// Map also includes the index of each item. 

// ...

// ------------------------------------------------

// Filter problems 

// The function provided to filter must return 
// tru if the item is to be included or false if not

const allToys = data.filter((obj) => {
  return obj.category === "Toys"
})

console.log(allToys)



const allKids = data.filter((obj) => {
  // Return only items where the category is Kids
})

console.log(allKids)


// Filter for category Games
const allGames = data.filter()

console.log(allGames)


// Filter for all objects in category Music
const allMusic // 

console.log(allMusic)



// Find all of the objects with a rating 
// greater than 3.0
const ratingOverThree = data.filter((obj) => {
  // ??? 
})

console.log(ratingOverThree)


// Find all of the object with a rating 
// equal to or less than 3

const ratingThreeOrLess = data.filter()

console.log(ratingThreeOrLess)


// Find all of the Sports with a rating 
// 3 or greater

const greatSports = data.filter((obj) => {
  return obj.category === "Sports" && obj.rating >= 3
})

console.log(greatSports)


// Find everything with a category of Home and 
// a rating less than 3

const badHome = data.filter()

console.log(badHome)



// We need to restock! We should find all of the 
// objects where the rating is over 3 and number 
// of units is less than 100



// ------------------------------------------------

// Reduce problems

// What's our total inventory? 

const totalUnits = data.reduce((acc, obj) => {
  return acc += obj.units
})

console.log(totalUnits)



// Add up the total ratings 
const totalRating = data.reduce((acc, obj) => {
  // Return the accumulator plus the objects rating
})

console.log(totalRating)

// Find the average rating by dividing the rating by the length of data
// log the answer with console.log()


// Find the total number of units in stock by adding 
// up the unit value for each product
const totalUnits = data.reduce(/* ??? */)

console.log(totalUnits)



// Reduce will use the first element to determine 
// the value type returned. In the examples above
// rating and units are number and the totals are
// also numbers. 

// You may want to return a type that is different 
// from the type in the source. For example you might 
// want to return an object created from strings. 

// Do this by adding the starting value as the second 
// parameter to reduce. 

// data.reduce(() => {}, {}) // The second param is {}

// Make an object with properties that match the 
// names of each product and have values equal to 
// the rating. 

const nameRating = data.reduce((acc, obj) => {
  return acc[obj.name] = obj.rating
}, {}) 

console.log(nameRating)

const nameUnits = data.reduce((acc, obj) => {
  // Get the name and unit sould look like:
  // { Zoolab: 632, Lotstring: 241, ... }
}, {}) 

console.log(nameRating)


```