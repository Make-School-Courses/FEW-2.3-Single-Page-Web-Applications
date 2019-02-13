# FEW 2.3 - Lesson 7 

# React Router

Routing is the concept of navigating through pages of content and connecting the change in content to the URL in the address bar. 

This example covers using React Router a library of Components that facilitates routing. 

## Learning Objectives/Competencies

1. Identify navigation 
    - Components that divide a page into content elements
    - Paths to define routes
1. Use React Router with a React
    - Define Component to be handled with Routes
    - Define Links to display Routes
1. Build projects by sharing components

## Basic Routing

### Set up React Router

Setup the demo project and create simple routes.

Install

- Create a new React project
    - `npx create-react-app react-router-example`
- Navigate to the project 
    - `cd react-router-example`
- Install dependencies
    - `npm install react-router-dom`
- Start the project 
    - `npm start` or `yarn start`

### Using `BrowserRouter`, `Route`, and `Link`

Use the `BrowserRouter`, `Route`, and `Link` components to "navigate" between components. Really what's happening is a _conditional rendering_ of components. 

Use `BorwserRouter` to at the top level to manage routing. This should be at the top level parent to all router components. 

Use `Link` to trigger navigation. This like an anchor tag. Link uses a `to` attribute to name a path. 

Use `Route` to define a route to navigate to. A route includes a `path` and `component`. A `Link` navigates to a `path`. When these match a `component` is rendered.

### `props.match`

`BrowserRouter` supplies all child components with a prop called `match`. This prop contains information about the current route including: 

- params
- isExact
- path
- url

See the example on nested routes for examples of `match` in use. 

### Link 

Use `<Link>` to display a route. Use the `to` prop/attribute to define the route. A route is a relative URL that will navigate to a matching route. 

`<Link to="/">Home</Link>`

### Route 

A `<Route>` is responsible for displaying a component when it's path matches the current address. There three important props/attributes. 

- `path` defines the URL that will display this route
- `component` defines the component that will be displayed by this route
- `exact` if included the route must be an exact match. For example "/" is a match for "/about" and "/sales" it is an exact match only for "/"

`<Route path="/" exact component={Index} />`

**Note**: If you need to configure a component for a route use this syntax:

`<Route path="/" exact render={() => <Index title={title} />} />`

In this example we're passing a function to the `render` prop and that function is returning a component. 

### Nested Routes 

A nested Route is a route that displays inside another Route. 

Use a path that shares the parent path and don't use exact. 

You can guarantee that path matches by getting the current path with `match.url`. 

The Link to a nested Route might look like: 

`<Link to={`${match.url}/project-1`}>Project 1</Link>`

The Route might look like: 

`<Route path={`${match.url}/:projectName`} component={Project} />`

Here `/:projectName` is a param that can be accessed by the Route. Inside the Route, you could access this param with: `match.params.projectName`.

## In Class 

Build your personal Static Website with React and React Router! 

**Why Make a static site with React?**

- All of your pages are connected and share a common constantly running code base. 
- Share variables and data/Application state across all of the content.
- Leverage React Components.
- It's not a Single Page Application if it's made of multiple pages.
- Don't believe me, take a look at all of these static site generators currently available:
    - https://blog.bitsrc.io/9-react-static-site-generators-for-2019-f54a66e519d2

Imagine you need a static site quick. It's going to be a portfolio for your React work. 

You'll need to navigate between "pages", better use React Router!

**Challenge 1**: Set up React Router

- Import `react-router`
- Add `BrowserRouter` to your root component
- Define some `Links` and `Routes`

Follow the guide here: https://reacttraining.com/react-router/web/guides/quick-start

**Challenge 2**: Add some content to the components presented by Routes you defined. 

This can be anything you like for now. Make sure when we navigate to a page we know what page we're on. 

**Challenge 3**: Now it's time to show your React work. Remember those components you wrote for previous projects? 

You can easily share components with other projects by copying the component file into a new project. 

Do that now. Get the components from one of your other projects and add them to this project. Connect it with a Link and a Route.

## After Class

- Start on the custom project

## Additional Resources

1. https://github.com/ReactTraining/react-router
2. https://reacttraining.com/react-router/web/guides/quick-start
3. https://reactjs.org/docs/thinking-in-react.html
4. https://reactjs.org/docs/design-principles.html
