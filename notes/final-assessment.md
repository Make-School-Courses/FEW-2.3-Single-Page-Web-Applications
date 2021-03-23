# FEW 2.3 Final Assessment

Your goal is to create a React application with the components and features described below.

The Problems below are presented in order of complexity. Doing them in order should be easier. 

Complete each step to the best of your ability. Do as much of each step as you can I will award partial credit for the work that you do complete.

Submit your completed to me directly in Slack. 

## Redux (extra credit)

For extra credit you can solve the problems below using Redux. This is not required and the problems are explained as if you aren't using Redux. If you want to solve these with Redux you should have the same functionality but may solve the problem different from the description. 

## Hooks (extra credit)

The code below assumes you are using class based components and state. Feel free to use hooks in place of this for extra credit.

## Getting started - 1

Your final assessment is a React Project.

Create a React Project and name it with 'final' your first and last name:

`FEW 2.3 final-<first>-<last>`

I should be able to run this project with `yarn start`.

## Home Components - 2

Create a **Home** component that displays your name and the name of this class. 

Make a **Title** component, use it to display your name. The Title Component should take a prop that sets the text displayed in the title.

In this step you are creating two Components `Home` and `Title` and using the `Title` component inside the `Home` Component to display your name. 

## Components Patterns - 3

Display data from the Star Wars API. 

The Star Wars API is a simple API that takes a number and returns a JSON object describing a character in one of the Star Wars movies. 

For example:

`https://swapi.dev/api/people/1/`

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
    "homeworld": "https://swapi.dev/api/planets/1/", 
    "films": [
        "https://swapi.dev/api/films/2/", 
        "https://swapi.dev/api/films/6/", 
        "https://swapi.dev/api/films/3/", 
        "https://swapi.dev/api/films/1/", 
        "https://swapi.dev/api/films/7/"
    ], 
    "species": [
        "https://swapi.dev/api/species/1/"
    ], 
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/", 
        "https://swapi.dev/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.dev/api/starships/12/", 
        "https://swapi.dev/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.dev/api/people/1/"
}
```

Create a new **StarWars** component that has a _text input_, a _button_, and a _Title_. Entering a number in the input and clicking the button should load the data for that character and show the name of a Star Wars Character in the Title.

Use fetch to make a request using the SWAPI api below, handle the response by displaying the name of the character.

`https://swapi.dev/api/people/<number>/`

### Displaying more information - 4

After you have the name dipslaying expand your component to display more of the information provided by the Star Wars API. 

In the StarWars component, besides the name, display any four elements from the data. For example:   

- Height
- Mass 
- Hair Color
- Eye Color

## Saving characters - 5

Your next goal is to create a Save button. Clicking this will save the current character to a list. You'll need to store a list of your saved chartacters. 

Use state to hold a list of characters. 

Add a save button. Clicking this will save the character data to a list of characters. Later you'll be displaying the list.  

## Display a list of saved characters - 6

Display a list of the saved characters from state. 

Put this anywhere you like. 

When you display the list display the character's name at the top and all of it's information below. 

## Display homeworld - 7

Display the homeworld of a character. The challenge here is that you are provided with the url as part of the character data. Use this URL with fetch retrieve the homeworld data for the character. 

Display the homeworld along with the character details. 

NOTE! The url supplied for homeworld is NOT correct! 

`http://swapi.dev/api/planets/1/`

It should be:

`https://swapi.dev/api/planets/1/`

The difference is: `http` vs `https` that s is very important. Side note, SWAPI changed their API from `https://swapi.co/` to `https://swapi.dev/` recently.

It's probably best to get the homeworld at the same time that you are getting the cahracter data. You'll need to do it in order. 

- fetch the character data
- get the homeworld from json
- fetch the homeworld 
- set state to display this data

## Add Some CSS styles 8

Style your work. This is an open ended challenge. You just need to show that you can apply styles to components. Try these ideas: 

- Arrange the elements on the screen
- Set the font styles and colors

## Extra Credit

The data from SWAPI also includes films, species, starships, and vehicles. Each of these is an array of urls that fetch more data from SWAPI. Dipslay one or more of these in your character details. 

- films
- species
- starships
- vehicles
