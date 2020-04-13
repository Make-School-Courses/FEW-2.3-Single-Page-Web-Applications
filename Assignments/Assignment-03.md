# Class - FEW 2.3 - Assignment 3

## Description 

Your goal is to modify the demo project. This project gets the Weather data from the OpenWeatherMap API. You'll implement two important patterns in this project. 

- Controlled Controlled Component Pattern. This pattern is used with form elements. 
- Conditional Rendering pattern. This is a collection of coding patterns that render components or not render them based on props or state. 

### Why this assignment?

These the controlled component is important since you'll use it every time you use form elements like input fields, check boxes, and radios buttons. All of these are essential to web applications. 

Conditionally rendering components is an important front end development, it also opens a lot of possiblities to your apps. 

## Getting Started 

Make a new react project with: 

`npx create-react-app weather-api`

Repalce the `App.js` contents with the App Component code at the [bottom of this page](#app-js). 

## Project requirements

Currently the app does all of it's work in the `App.js` component. The goal of these challenges is to move the code in App.js into it's own component and improve the way it works. 

### Challenges 

**Challenge 0** Goal create and use an OpenWeatherMap API key

The OpenWeatherMap API requires an API key. You need to get your API key and add it to the project. 

- Go to [https://openweathermap.org](https://openweathermap.org)
- Make an account and sign into your account
- Go to settings > API Keys
- Generate an API Key
- make a `.env` file in in your project directory
- Paste your API key into `.env` after `REACT_APP_OPENWEATHERMAP_API_KEY=<your-api-key-here>`

Run the app again to make sure it is still working with your API key. 

**What happened here?** Create-React-App uses .env to manage secret information. This is included with the boilerplate project. 

The key value you add to `.env` must begin with `REACT_APP_` or they will not be used! 

**Challenge 1** Goal create a Weather component. 

Currently all of the work of loading and displaying the weather data is handled by  `App.js`. You should:

- Make a new component `Weather`. This component should load and display the weather data. 
- Import the Weather component into `App.js` 
- Display the new Weather component in `App.js`.
- You're done when all of the work of loading and displaying weather data is removed from App.js, and the Weather component does all the work. 

**Important!** App uses two values on state to accomplish what it does. Your new Component will need to support these two values on state. 

The first `this.state.inputValue` holds the zip code entered into the input field. Read the comments carefully to see where this is used. 

Second, `this.state.weatherData` holds the weather data from OpenWeatherMap. This variable is used to conditionally render the weather data. Read the comments in the sample code for more details. 

**Challenge 3** Sub Components

The Weather Component is a little monolithic. It does a little too much. In many cases it's better to have smaller components that handle specific tasks. 

Goal build components that display various elements of the weather data.

- **Temperature component**. Create a component whose sole task is to display the temperature. You should pass the temperature into the component as a prop and the component should display it. 
  - Bonus! The temperature is supplied in kelvin. Your Temperature component should be able to display the temperature as fahrenheit. The formula is: `300K × 9/5 - 459.67`. 
  - Stretch goal! Temperature component takes a parameter `isMetric` if this is true the component converts the temperature from Kelvin to Celsius.
- **WeatherDescription** component. This component takes the values used for title and description and displays them. 
- **Atmosphere** component. Create a another component that displays the air pressure and humidity. Call this component Atmosphere. It should take the values for pressure and humidity in as props and display them. 

The tasks above as you to build three new components. These should all be children of the Weather component you created in the first challenge. 

**Challenge 4** Style the component! 

Currently there a minimal set of styles. Your goal is to expand on these. 

- Your goal is to add some styles to the components you have created. 

Look at App.css. This file has the has CSS styles that are imported into App.js on line 4 of that file. 

**Note!** Importing CSS in this way works with Create React App starter projects because it is part of the build system. 

- Bonus, create a css file for each component you create and import that set of styles into the component. 

**Stretch Challenges** 

Try any or all of these stretch challenges. 

- Use the Browser API to get the Geo Location
  - The OpenWeatherMap API has an option where you can supply Geo Location rather than the zip code to get weather data. 
- Display a 5 day forcast
  - This project uses the current weather forecast. The OpenWeatherMap also provides a 5 day forcast. Your goal is to display this. 
- Find another simple API and make a component to dispaly data from your chosen API. 

**Challenge 4**

During the loading process your app is limbo, you haven't gotten a success or an error yet. In this state your app should display a message letting us know that the app is in the loading process. 

To do this use keep track of the status of the app and conditionally render a component to display the status of the app. 

**Challenge 5** 

Use an API of your choice. This can be any API you like. Render data from the API with React. Build components and sub-components to do the work and display your data. 

**Challenge 6**

Use an API of your choice in place of the OpenWeatherMap API. Choose anything from one of these services: 

- [Rapid API](https://rapidapi.com)
- [Programable Web](https://www.programmableweb.com/apis/directory)
- [API List](https://apilist.fun)
- [Any API](https://any-api.com)

### Deliverable

- Your finsihed React weather app on GitHub with a link in the class progress tracker

### Due date

Class #

## Assessing the assignment

[Assignment 3 Rubric](./Assignment-01-rubric.md)

# APP JS

```JSX
import React, { Component } from 'react';

import './App.css';

/** 
 * This example illustrates a simple react project 
 * that works with an external API. 
 * 
 * Take note of the comments they point common 
 * problems you will need to solve with React. 
 * 
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components 
 * 
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component. 
 * 
 * */

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '94010',     // Used to hold value entered in the input field
      weatherData: null,  // Used to hold data loaded from the weather API
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    // ! Get your own API key ! 
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    // Get the zip from the input
    const zip = this.state.inputValue
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    // Get data from the API with fetch
    fetch(url).then(res => {
      // Handle the response stream as JSON
      return res.json()
    }).then((json) => {
      // If the request was successful assign the data to component state
      this.setState({ weatherData: json })
      // ! This needs better error checking here or at renderWeather() 
      // It's possible to get a valid JSON response that is not weather 
      // data, for example when a bad zip code entered.
    }).catch((err) => {
      // If there is no data 
      this.setState({ weatherData: null }) // Clear the weather data we don't have any to display
      // Print an error to the console. 
      console.log('-- Error fetching --')
      console.log(err.message)
      // You may want to display an error to the screen here. 
    })
  }

  renderWeather() {
    // This method returns undefined or a JSX component
    if (this.state.weatherData === null) {
      // If there is no data return undefined
      return undefined
    }

    /* 
    This next step needs another level of error checking. It's 
    possible to get a JSON response for an invalid zip in which 
    case the step below fails. 
    */ 
    console.log(this.state.weatherData)
    // Take the weather data apart to more easily populate the component
    const { main, description, icon } = this.state.weatherData.weather[0]
    const { temp, pressure, humidity, temp_min, temp_max } = this.state.weatherData.main 
    
    return (
      <div>
        <div>Title: {main}</div>
        <div>Desc: {description}</div>
        <div>Icon: {icon}</div>
        <div>Temp: {temp}</div>
        <div>Pressure: {pressure}</div>
        <div>Humidity: {humidity}</div>
        <div>Temp Min: {temp_min} Max:{temp_max}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">

        {/** This input uses the controlled component pattern */}
        <form onSubmit={e => this.handleSubmit(e)}>

          {/** 
          This pattern is used for input and other form elements 
          Set the value of the input to a value held in component state
          Set the value held in component state when a change occurs at the input 
          */}
          <input 
            value={this.state.inputValue} 
            onChange={e => this.setState({ inputValue: e.target.value })}
            type="text" 
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="enter zip"
          />

          <button type="submit">Submit</button>

        </form>

        {/** Conditionally render this component */}
        {this.renderWeather()}

      </div>
    );
  }
}

export default App;
```
