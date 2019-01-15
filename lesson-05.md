# FEW 1.2 - Lesson 5

The goal this week is to set up and express server to work with React. This week you will build the server and define it's API. 

## Introduction

Single Page Applications run in the browser. You'll often want to use your Single Page Applications to communicate with a server. Servers provide data and act as a hub for client applications.

The goal of this week is creating a simple server to connect to your SPA front end. 

## Express 

Express is a framework that runs on a Node.js server. Express describes itself as: 

> Fast, unopinionated, minimalist web framework for Node.js. 

Let's take that apart. Express is leaves a lot of the work of creating the server to you, it doesn't provide premade systems for for tackling big problems. Instead it provides a set tools you can use to solve your problems. 

The servers you create act as services for the applications that connect to them. The language of this communication is the API.

Your goal this week is create a simple API. 

**Discussion:** 

- What is an API?
- What APIs have you worked with? 
- What does an API look like? 

## Creating APIs

Your goal is to create a service with an API. 

> In computer programming, an application programming interface (API) is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.

The API makes features and data from the service available to any front end application that connects with it.

I'm sure you've worked with APIs by now. Well written APIs help you get more done at a higher quality. Poorly written APIs can make your work more difficult and your products less capable than you envision. 

**Dsicussion:** What makes a good API? 

## Getting Started

The goal this week is to create an Express server with an API that returns JSON data. Later you will connect this service to a React client. 

### Start Express project

Follow these steps to install and run the project.

- `npm install`
- `npm server.js` or `nodemon server.js`

### About the Demo project

This demo project is very simple it provides a simple service to generate random numbers. The API is simple but incomplete at this point. Your goal is to extend the API and add features. 

### The demo project API

The API of the current project has two endpoints that return JSON. 

- `/about` 
	- returns - `{ about: 'description string' }`
	- Example - `/about`
- `/random` 
	- query - n: Int
	- returns - random number from 0 to n - 1
	- Example - `/random/?n=6` 

#### Testing the API

You should test the API for yourself to make sure everything is running. Follow the instructions above and launch the Express Server.

There are three end points and each returns JSON. Type these into the address bar of the browser or just click the links below: 

- [http://localhost:4000](http://localhost:4000)
- [http://localhost:4000/about](http://localhost:4000/about)
- [http://localhost:4000/random/?n=6](http://localhost:4000/random/?n=6)

Notice each of these endpoints returns JSON. The browser should display this. 

The last endpoint in the list above includes query params. Try changing the value here and check the results. 

### Unit testing 

Unit testing is the idea of testing your software in units. A unit is usally an method with a single output. 

Unit testing is done with software. That is you're wiring software that runs your software and tests it along the way. 

Why unit test?

- It's profesional best practice
- All of the big companies use it
- Makes better more reliable code

## Testing with Mocha and Chai

Mocha is a testing framework, it runs all of the tests. Think of Mocha as the wrapper that gives a place for testing and shows the results of your tests.

Chai is an assertion library. Think of an assertion as the actual test of code. An assertion is an expression of what you expect from a situation. 

Install Mocha and Chai like this: 

- Add mocha and chai as dependencies
	- `npm install --save mocha chai`
- Add a test script to your package.json. Add the following under "scripts"
	- `"test": "mocha"`
- Add a `test` folder to your project
	- `mkdir test`
- Add a test file. Here is where you will write your tests
	- `touch test/test.js`

## After Class

**Express API Server 3hrs**

- Complete the challenges in the [React Expres Server](https://github.com/Product-College-Labs/react-express-server) Demo project.

## Additional Resources

1. 
