# FEW 1.2 - Lesson 3

# React API app 

Use React with a web API. 

Input pattern, and forms with React.

## Introduction 

This lesson focusses on the example project [here](https://github.com/Product-College-Labs/react-api-project). Download this project and run it. 

This is a simple web app that display s weather data.

Follow the instructions setup and run the demo project. 

- Download or fork the [project](https://github.com/Product-College-Labs/react-api-project)
- Make an account with [OpenWeatherMap.org](https://home.openweathermap.org/)
- Go to your profile page: API Keys
- Generate and copy your API key
- Add the following to the '.env' file: 

`REACT_APP_OPENWEATHERMAP_API_KEY=467355df4c808dd6134a3b64e9ace282`

## Getting Started

Everything in theproject happens in App.js. There are many comments trying to explain what is going on. 

## Input Pattern 

The project has a single input field. Find it in the `render` method. 

```
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

```
<input 
	...
  type="text" 
  pattern="(\d{5}([\-]\d{4})?)"
  placeholder="enter zip"
/>
```

The value and onChange attributes are used for the for the React input pattern. 

The controlled pattern stores the value input on state in the component, and displays the value in the component via it's value attribute. 

- Controlled Components 
	- https://reactjs.org/docs/forms.html
- React uses a special pattern for input elements 
	- This is due to the virtual DOM

## Conditionally Rendering Components

- Pattern 1 - function returns component based on props. 
- Pattern 2 - render a variable set to a component based on props or state.
- Pattern 3 = in if statement using && or ternary
- Pattern 4 - prevent component from rendering using null

## Using Fetch

This component uses `fetch()` to load JSON data from the OpenWeatherMap API. Take a look at the `handleSubmit()` method. 

### .env

The .env or "dot" env file is used to store sensitive information, like the API keys! The Create React Starter project has support for .env baked in. 

Look at Line 36 of App.js. 

`const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY`

Here you are getting a value stored in the dot env file stored in the key: `REACT_APP_OPENWEATHERMAP_API_KEY`. 

**Important!** User defined keys must begin with "REACT_APP_"! 

Open '.env' and define `REACT_APP_OPENWEATHERMAP_API_KEY` with your openweathermap api key. Something like: 

`REACT_APP_OPENWEATHERMAP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

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

### CORS

Cross Origin Resouce Sharing is know as CORS. This is a problem you will run into often when working with JS on the frontend. 

In short CORS is a security feature that prevents JavaScript from making requests against a different domain. this is meant to prevent hacking a safeguard a users data. 

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

## Initial Exercise

- Build and run the Reacvt API project
- Follow the challenges presented in this [project](https://github.com/Product-College-Labs/react-api-project)
	- Spend three hours working on this challenges here

## Additional Resources

1. https://jsonformatter.curiousconcept.com
1. https://reactjs.org/docs/forms.html
1. https://reactjs.org/docs/jsx-in-depth.html#comments
1. https://reactjs.org/docs/conditional-rendering.html
1. https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e
1. https://jameschambers.co/writing/cors/
