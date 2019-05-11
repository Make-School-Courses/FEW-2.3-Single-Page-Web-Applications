# FEW 2.3 Final Assessment

Your goal is to create a React application with the components and features described below.

The Problems below are presented in order of complexity. 

Complete each step to the best of your ability. I have listed a point value for each step. Do as much of the step as you can I will award partial credit for the work that you do complete. 

Do not post this project to GitHub! Instead you will submit your work to me by first removing the node_modules folder then copying your work to my USB drive.

## Getting started (20pts)

Your final assessment is a React Project.

Create a React Project and name it with 'final' your first and last name:

`final-<first>-<last>`

I should be able to run this project with `npm start`.

## Home Components (simple 20pts)

Create a **Home** component that displays your name and the name of this class. 

Make a **Title** component, use it to display your name. The Title Component should take a prop that sets the text displayed in the title.

In this step you are creating two Components `Home` and `Title` and using the `Title` component inside the `Home` Component. 

## Components moderate (20pts)

Create a 'Clicker' component. 

Create a new Component that contains a button and the Title component you created earlier.  

This component should count the number of times the button was clicked and display the count in the Title. Use state for this. 

When you're done with this step the title should display an initial count of 0, and increase the count by 1 each time I click the button. 

Use state to hold the count. 

## Components Patterns (20pts)

Display data from the Star Wars API. 

The Star Wars API is a simple API that takes a number and returns a JSON object describing a character in one of the Star Wars movies. 

For example:

`https://swapi.co/api/people/1/`

Returns: 

```JSON
{
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.co/api/planets/1/", 
    "films": [
        "https://swapi.co/api/films/2/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/", 
        "https://swapi.co/api/films/7/"
    ], 
    "species": [
        "https://swapi.co/api/species/1/"
    ], 
    "vehicles": [
        "https://swapi.co/api/vehicles/14/", 
        "https://swapi.co/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.co/api/starships/12/", 
        "https://swapi.co/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.co/api/people/1/"
}
```

Create a new **StarWars** component that has an input, a button, and a Title. Entering a number in the input and clicking the button should show the name of a Star Wars Character in the Title. 

Use fetch to make a request using the SWAPI api below, handle the response by displaying the name of the character.

`https://swapi.co/api/people/<number>/`

## Add Router (20pts)

You'll use React Router to create a React site with three "pages"/"Routes". 

Add `react-router` to your project. 

Create three routes to display each of the three components you created in the earlier steps: 

- Home
- Clicker
- StarWars

Create a link for each of these routes. 

### Extra Credit - Displaying more information (5pts)

In the StarWars component, besides the name, display the information listed below:  

- Height
- Mass 
- Hair Color
- Eye Color

### Extra Credit - Error Checking (5pts)

In the StarWars component check for errors. 

Some values sent to the SWAPI will return an error. For example: `https://swapi.co/api/people/999/` returns 404.

Modify your StarWars Component so it handles errors with an appropriate message.

### Extra Credit - Increasing the Count (5pts)

After every ten clicks the amount that clicker increments should double. For example: 

- 1, 2, ..., 9, 10, 12, 14, ..., 18, 20, 24, 28 etc. 

## Extra Credit - Map, Filter, Reduce (5pts)

Using the data below use map to convert the objects in the array into a strings that read: "<name> <price> * <qty>"`
	
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

## Total 130pts



