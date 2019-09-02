# Class - FEW 2.3 - Assignment 3

## Description 

Your goal is to modify the demo project. This project gets the Weather data from the OpenWeatherMap API. You'll implement two important patterns in this project. 

- Controlled Controlled Component Pattern. This pattern is used with form elements. 
- Conditional Rendering pattern. This is a collection of coding patterns that render components or not render them based on props or state. 

### Why this assignment?

These the controlled component is important since you'll use it every time you use form elements like input fields, check boxes, and radios buttons. All of these are essential to web applications. 

Conditionally rendering components is an important front end dcevlopment, it also opens a lot of possiblities to your apps. 

## Getting Started 

Download or clone this repo: 

https://github.com/Product-College-Labs/react-api-project

`npm install`

and

`npm start`

This should start the app and open it in your browser. The app shows a single input field and submit button. Type a zip code into the field and click submit. The app should show some weather data below the input. 

## Project requirements

Currently the app does all of it's work in the `App.js` component. The goal of these challenges is to move the code in App.js into it's own component and improve the way it works. 

### Challenges 

**Challenge 0** Goal create and use an OpenWeatherMap API key

The OpenWeatherMap API requires an API key. You need to get your API key and add it to the project. 

- Go to [https://openweathermap.org](https://openweathermap.org)
- Make an account and sign into your account
- Go to settings > API Keys
- Generate an API Key
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

Use an API of your choice. This can be any API you like. Render data from the API with React. BUild components and sub-components to do the work and display your data. 

## All the APIs!

- [Rapid API](https://rapidapi.com)
- [Programable Web](https://www.programmableweb.com/apis/directory)
- [API List](https://apilist.fun)
- [Any API](https://any-api.com)







 





### Deliverable

 

### Due date

Class #

## Assessing the assignment

[Assignment Name Rubric](./Assignment-01-rubric.md)


