# FEW 2.3 Final Assessment

Your goal is to create a React application with the components and features described below. 

The Problems below are presented in order of complexity. 

Do not post this project to GitHub! Instead you will submit your work to me by first removing the node_modules folder then copying your work to my USB drive. 

## Problem 1 - Getting started (25pts)

Create a boiler plate React Project. I should be able to run this project with `npm start`.

Name your project `<final>-<first>-<last>`

## Question 2 - Components simple (25pts)

Create a component that displays a title with your name. This component should take a prop that sets the text of the title.

Put the Title component in the root component of your project so your name appears at the top of the page. 

### Extra Credit - Style the Title (5pts)

Style the title component. Use a style sheet. 

## Questions 3 - Components moderate (25pts)

Create a "Cookie clicker" component. Your component should dipslay a count and have a button that increases the count by 1 with each click of the button. 

Use the Title component to display the count.

Display the Clicker component in the root of your project below the title. 

### Extra Credit - Increasing the Count (5pts)

After every ten clicks the amount that clicker increments doubles. 

## Question 4 - Components Patterns (25pts)

Star Wars API component. This component should display the name of a Star Wars character. Use `https://swapi.co/api/people/`. This is a public API that doesn't require authentication or an account. 

`https://swapi.co/api/people/<number>/`

The number at the end of the API URL is a character code. Luke Sky Walker is 1. Your goal is to create an input that accepts a number and displays that character. For example: 

https://swapi.co/api/people/1/

Displays Luke Skywalker in a title component. 

### Extra Credit - Displaying more information (5pts)

Display more info from the Star Wars API. This could be: 

- homeworld
- films
- species 
- etc. 

### Extra Credit - Error Checking (5pts)

In the case of `https://swapi.co/api/people/999/` the API returns 404. Handle this in your code and display an approrpiate error message. 

## Extra Credit - Redux (10pts)

Set up as much of Redux as you can. Use this to handle the Cookie Clicker. I'll give you points for as much of this as you set up. 

- Actions
- Reducers
- Combine reducers
- Store 
- Provider
- Connect a component 
- Map State to Props
- Map Dispatch to props

## Extra Credit - ESLint (5pts)

Add ESLint and lint all of your code! Install ESLint. Fix all of the Linter warnings and errors. 

## Extra Credit - Map, Filter, Reduce

Using the data below use map to convert the objects in the array into a strings that read: "<name> <price> * <qty>"
	
Use filter to display all of the item with a qty of 0. 

Use Reduce to calculate the total cost of all items. The cost of each purchase is qty * price.

```JavaScript
[{
  "name": "Ice Cream Bar - Rolo Cone",
  "price": 5.19,
  "qty": 6
}, {
  "name": "Southern Comfort",
  "price": 7.16,
  "qty": 0
}, {
  "name": "Fib N9 - Prague Powder",
  "price": 3.79,
  "qty": 2
}, {
  "name": "Sea Urchin",
  "price": 1.73,
  "qty": 2
}, {
  "name": "Oil - Pumpkinseed",
  "price": 5.1,
  "qty": 2
}, {
  "name": "Sauce - Fish 25 Ozf Bottle",
  "price": 9.75,
  "qty": 0
}, {
  "name": "Tomatoes - Cherry",
  "price": 1.89,
  "qty": 3
}]
```

## Total 135pts



