# FEW 1.2 - Lesson 3

# React API app 

The first goal for this class is to use React with a public web API. 

The second goal is to work with form elements and user input with React. React has a special pattern for this due to the way it handles the virtual DOM. 

## Introduction 

The demo project is a simple web app that displays weather data. You'll need to make an account and get a valid API key. 

The project needs to accept user input for a zipcode. Text input and other form elements use a special pattern in React called the Controlled Component. 

## Getting Started

Follow the instructions to setup and run the demo project. 

- Download or fork the [project](https://github.com/Product-College-Labs/react-api-project)
- Make an account with [OpenWeatherMap.org](https://home.openweathermap.org/)
	- Go to your profile page: API Keys
	- Generate and copy your API key
	- Add the following to the '.env' file: 

`REACT_APP_OPENWEATHERMAP_API_KEY=YOUR_API_KEY_HERE`

Pro tips! 

- The Create React App starter project is set up to use dotenv, you don't need to add this package. 
- Any environment variables you define **must** begin with `REACT_APP_`

Read more about [Adding Custom Environment Variables](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)

Everything in the example project happens in App.js. There are many comments explaining what is going on, read these closely. 

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

The input should take a zip code so I set the placeholder to "enter zip" and used the pattern attribute and a little regex magic to limit input to zip code patterns. 

```JavaScript
<input 
	...
  type="text" 
  pattern="(\d{5}([\-]\d{4})?)"
  placeholder="enter zip"
/>
```

The `value` and `onChange` attributes are used for the for the React input pattern. 

```JavaScript
<input 
  value={this.state.inputValue} 
  onChange={e => this.setState({ inputValue: e.target.value })}
  ...
/>
```

The controlled component pattern stores the value entered in state, and displays the value in the component via it's value attribute. 

Imagine you are entering a zip code into a text input field. You type the first number of the zip code which is 9. The onChange method fires and assigns the value in the text field to state `this.setState({zip:e.target.value})`. When the component is rendered the value displayed is the value set on state `this.state.zip`. 

This may seem a little strange, but it's important for two reasons. 

- Reacts virtual DOM may replace the input component at any time when the DOM is redrawn. This would loose values stored in real DOM elements. 
- It stores input values on state where they are easy to access when you need them without have to access the input and retrieve it's value. 

- [Controlled Components](https://reactjs.org/docs/forms.html)

## Conditionally Rendering Components

Commonly in React you will need to render different components under different conditions. Here are two patterns you can apply to your work: 

**Pattern 1** - Use a function to return one JSX expression or another based on a value. 

```JavaScript
function toggle(hasMustard) {
	if (hasMustard) {
		return <HotdogWithMustard />
	}
	return <Hotdog />
}
```

**Pattern 2** - Assign a JSX element to variables and render that. 

```JavaSxcript
render() {
	const { time } = this.state
	let element
	if (time === 'morning') {
		element = <Eggs />
	} else if (time === 'lunch') {
		element = <Burrito />
	} else {
		element = <Icecream />
	}

	return (
		<div>
			{element}
		</div>
	)
}
```

Read more about [Conditional Rendering in React](https://reactjs.org/docs/conditional-rendering.html)

## Using Fetch

The example project uses `fetch()` to load JSON data from the OpenWeatherMap API. Take a look at the `handleSubmit()` method in App.js.

Read the comments here to follow the process. 

### .env

The .env or "dot" env file is used to store sensitive information, like API keys! The Create React Starter project has support for .env baked in. 

Look at Line 36 of App.js. 

`const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY`

Here you are getting a value stored in the dot env file stored in the key: `REACT_APP_OPENWEATHERMAP_API_KEY`. 

**Important!** User defined keys must begin with "REACT_APP_"! 

Open '.env' and define `REACT_APP_OPENWEATHERMAP_API_KEY` with your openweathermap api key. Something like: 

`REACT_APP_OPENWEATHERMAP_API_KEY=YOUR_API_KEY_HERE`

Make sure your API key is set here. 

### Fetch

Fetch is a browser API for fetching resources including resources across a network. 

Load JSON with `fetch` like this: 

```JS
// Call fetch
fetch('http://someurl.com').then((res) => {
	// Make a connection and handle the stream as JSON
	return res.json()
}).then((data) => {
	// handle JSON data here
}).catch((err) => {
	console.log(err.message)
})
```

## After Class

**React API Challenge 3hrs**

Your goal is to create a component that interacts with a Web API. Use the starter project. Follow the guide in the read me.

https://github.com/Product-College-Labs/react-api-project

## All the APIs!

- [Rapid API](https://rapidapi.com)
- [Programable Web](https://www.programmableweb.com/apis/directory)
- [API List](https://apilist.fun)
- [Any API](https://any-api.com)

## Learning Objectives/Competencies

1. Use conditional rendering
1. Create forms using the React controlled component pattern
1. Use state to manage asynchornus actions

## React API Project

| -            | Does not meet expectations | Meets expectations       | Exceeds expectations |
|:-------------|:---------------------------|:-------------------------|:---------------------|
| Completed    | Did not complete           | Completed challenges 1-3 | Completed challenges 4+ |
| Functional   | Is not functional          | Displays the weather data and handles errors | Displays the temp in F and C along description and atmospheric conditions and has some CSS styles |
| Code quality | Indentation is bad spacing is inconsistent | Uses consistent indentation and spacing | Well written and well commented |
| Code Architecture and Structure | All code is in App.js | Uses 3 components | Uses 5 or more components, components are specialized and perform formatting and display of data based on props |
| Work Ethic   | Did not commit when working on project | Initial commit at class and commit while working | Commits show 3 hours and clearly document process | 

## Additional Resources

1. [JSON Formatter](https://jsonformatter.curiousconcept.com)
1. [React Forms](https://reactjs.org/docs/forms.html)
1. [JSX in depth](https://reactjs.org/docs/jsx-in-depth.html#comments)
1. [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
1. [Conditional Rendering in React](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e)
1. [Custom environment variables](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)
