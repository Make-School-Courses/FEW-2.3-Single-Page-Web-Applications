# FEW 2.3 - Lesson 6

## Making Network Requests

The example project uses `fetch()` to load JSON data from the OpenWeatherMap API. Take a look at the `handleSubmit()` method in App.js.

Read the comments here to follow the process. 

## Learning Objectives

1. Use fetch to load data
1. Display data based on application state
1. Use environment variables to handle seinsitive information
1. Define Promise it's uses and features 

## .env

The .env or "dot" env file is used to store sensitive information, like API keys! The Create React Starter project has support for .env baked in. 

Look at Line 36 of App.js. 

`const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY`

Here you are getting a value stored in the dot env file stored in the key: `REACT_APP_OPENWEATHERMAP_API_KEY`. 

**Important!** User-defined keys must begin with "REACT_APP_"! 

Open '.env' and define `REACT_APP_OPENWEATHERMAP_API_KEY` with your openweathermap API key. Something like: 

`REACT_APP_OPENWEATHERMAP_API_KEY=YOUR_API_KEY_HERE`

Make sure your API key is set here. 

## Fetch

> Fetch is a browser API for fetching resources including resources across a network. 

Load JSON with `fetch` like this: 

```JS
// Call fetch
fetch('http://someurl.com').then((res) => {
    // Make a connection and handle the stream as JSON
    return res.json()
}).then((data) => {
    // handle JSON data here
    // ...
}).catch((err) => {
    // Handle error messages 
    console.log(err.message)
})
```

## Aync & await

Async and await are keywords that work worh Promise. You could say they are "syntactic sugar" on top of Promise.

Async marks identifies an asyncronous function. An async function always returns a Promise! 

Await only works within an async function. Use await at the beginning of any expression that would return a Promise. JavaScript will wait at that line until the Promise resolves. 

pair up and read a little more about async and await here: 

https://javascript.info/async-await

Try the code samples here with your pair. 

## After Class 

Continue working on assignment 3

## ReSources 

- 