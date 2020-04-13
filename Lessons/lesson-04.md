# FEW 2.3 - Lesson 3

# React Input Pattern

The first goal for this class is to use React with a public web API.

The second goal is to work with form elements and user input with React. React has a special pattern for this due to the way it handles the virtual DOM.

Last, the goal will be to look at conditional rendering techniques that can be implemented with React. 

## Objectives 

- Implement the Controlled Component Pattern
  - Use forms and form data in React
- Build an app that works with a public API
- Build a system to handle network errors gracefully
- Use conditional rendering patterns in React

## Introduction 

The demo project is a simple web app that displays weather data. You'll need to make an account and get a valid API key. 

The project needs to accept user input for a zipcode. Text input and other form elements use a special pattern in React called the _Controlled Component Pattern_. 

## Getting Started

Follow the instructions to set up and run the demo project. 

- Download or fork the [project](https://github.com/Product-College-Labs/react-api-project)
- Make an account with [OpenWeatherMap.org](https://home.openweathermap.org/)
    - Go to your profile page: API Keys
    - Generate and copy your API key
    - Add the following to the '.env' file: 

`REACT_APP_OPENWEATHERMAP_API_KEY=YOUR_API_KEY_HERE`

**Pro-tip!** 

- The Create React App starter project is set up to use `dotenv`, you don't need to add this package. 
- Any environment variables you define **must** begin with `REACT_APP_`. This prevents clashes with environment variables that you may not be aware of. 

Read more about [Adding Custom Environment Variables](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)

Everything in the example project happens in App.js. There are many comments explaining what is going on, read these closely.

- `npm install`
- `npm start` or `yarn start`

## Input Pattern 

The project has a single input field. Find it in the `render` method of App.js. 

```JavaScript
<input 
  value={this.state.inputValue} 
  onChange={e => this.setState({ inputValue: e.target.value })}
  type="text" 
  pattern="(\d{5}([\-]\d{4})?)"
  placeholder="enter zip"
/>
```

This started as a simple input element. 

`<input type="text">`

The input should take a zip code so I set the placeholder to "enter zip" and used the pattern attribute and a little regex "magic" to limit input to zip code patterns. 

```JavaScript
<input 
    ...
  type="text" 
  pattern="(\d{5}([\-]\d{4})?)"
  placeholder="enter zip"
/>
```

The `value` and `onChange` attributes are used for the React input pattern.

```JavaScript
<input 
  value={this.state.inputValue} 
  onChange={e => this.setState({ inputValue: e.target.value })}
  ...
/>
```

The controlled component pattern stores the value entered on `this.state` and displays the value in the component via its value attribute. 

Imagine you are entering a zip code into a text input field. You type the first number of the zip code which is 9. The onChange method fires and assigns the value in the text field to state with: `this.setState({zip:e.target.value})`. When the component is rendered the value displayed is the value set on state `this.state.zip`.

This may seem a little strange, but it's important for two reasons. 

- React's virtual DOM may replace the input component at any time when the DOM is redrawn. This would lose values stored in real DOM elements. 
- It stores input values on `state` where they are easy to access when you need them without having to access the input and retrieve its value. 

- [Controlled Components](https://reactjs.org/docs/forms.html)

## Challenges 

Use `array.filter()` to solve some of the challenges. Filter is a method of Array that returns a new array that is a subset of the source array. Like map and reduce fitler takes a callback. The callback is passed each element from the source array and it determines if that item should be included in the output array by returning true or false if the item should not be included. 

## Homework

[Assignment 3](../Assignments/Assignment-03.md)

## Additional Resources

1. [JSON Formatter](https://jsonformatter.curiousconcept.com)
1. [React Forms](https://reactjs.org/docs/forms.html)
1. [JSX in depth](https://reactjs.org/docs/jsx-in-depth.html#comments)
1. [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
1. [Conditional Rendering in React](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e)
1. [Custom environment variables](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)
