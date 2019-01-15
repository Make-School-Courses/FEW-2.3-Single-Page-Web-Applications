# FEW 1.2 - Lesson 6

# React+Express

Connect a React front end to an Express backend.

## Introduction 

Frontend applications often need to communicate with backend applications. The goal in this lesson is to connect React with Express.

## Proxy

When you're testing your projects in development mode you're running a local server. This true for the Express project and for the React project. 

To get make the two work together you'll need to have both servers running at the same time. In this case they will both be running at a different address. The Express server [demo project](https://github.com/Product-College-Labs/react-express-server) runs on port 4000, the address: http://localhost:4000/. 

The [React demo project](https://github.com/Product-College-Labs/react-express-project) for this lesson runs on port 3000, at http://localhost:3000. 

While both projects are running you need to get the the React Front end (running on port 3000) to make networks resquests to your Express backend server on port 4000. This can be accomplished with proxy.

Proxy is an option in package.json. 

`"proxy": "http://localhost:4000",`

From what I can tell requests to root `/` are still sent to default address. While requests anything else are sent to the proxy. For example in this project running on port 3000, with proxy 

- `/` -> `http://localhost:3000`
- `/about` -> `http://localhost:4000/about`
- `/random` -> `http://localhost:4000/random`

It deosn't mention this in the docs but seemed to be the case when I was testing. I did a little searching around on this and the answer I found was that this was expected behavior. It could be specific to Create React App. 

https://docs.npmjs.com/misc/config#proxy

## Getting started

Download the demo project for this lesson [here](https://github.com/Product-College-Labs/react-express-project). Set up and the run the project: 

- `npm install`
- `npm start`

The demo project was created with Create React App and should open in a browser and be hosted at localhost:3000. You can check the address in the address bar. 

This is a simple starter project and doesn't do much. Its probably not doing anything at the moment. You should see an error in the console: 

> Failed to load resource: the server responded with a status of 500

A 500 error means something has gone wrong at the server. If the server isn't running that would explain it! 

Launch the server by opening a new terminal window and navigating to the directory that contains the Express project from the previous class. Launch the server. 

- `node server.js` or `nodemon server.js`

Refresh the React project in the browser. You should see the about message display and a random number. This data came from the server you just launched! 

### Tour the Demo Project 

Open the demo React project and look at 'package.json'. Look at line 10. 

`"proxy": "http://localhost:4000",`

Here is where the proxy server is set to 4000. 

Open the Express Project. Look at 'server.js'. Scroll to the bottom of the file. Find these lines: 

```js
const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
```

Here is where the port for this application is set to 4000 and the server is launched with that port. 

From this point, when both applications are running, the React project will run at **localhost:3000** but it will make network requests to **localhost:4000**. The express project will be running at **localhost:4000** and respond to requests from there. 

## Fetch 

- Using Fetch in frontend projects 
- make calls to the server
- promise review 
	- promise all 
	- ...

## node-fetch

- ...

## Challenges 

- Do the challenges in the demo project readme

## Additional Resources

1. Links to additional readings and videos
