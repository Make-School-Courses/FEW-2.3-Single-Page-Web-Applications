# Class - FEW 2.3 - Assignment 3

## Description 

The goal of this assignment is to take the ideas from the previousd two classes and use them to improve your portfolio project. 

Class 1 you made components, displayed the components and applied styles to them. Class 2 you rendered lists of products, filtered the list, transformed the list of data into Components and rendered these components. 

The goal of this assignment is create a list of JavaScript Objects that your app will render as components. 

### Why this assignment?

The problem you are solving in this assignment is a problem that you will face in every React project you create. You need to solve it now and own it. 

## Project requirements

 Your Portfolio should display projects from a data object. Rather than hard coding components. 

Instead of doing this:

 ```JS
// Hard coded values: BAD!
<div className="PageContent">
  <Project title="Tetris Dots" image="/images/kitten-0.jpeg" link="#" />
  <Project title="Zombie Server" image="/images/kitten-1.jpeg" link="#" />
  <Project title="Amazing Colors" image="/images/kitten-2.jpeg" link="#" />
  <Project title="Flip Toggle" image="/images/kitten-3.jpeg" link="#" />
  <Project title="121 Second St" image="/images/kitten-4.jpeg" link="#" />
  <Project title="Slide Shows" image="/images/kitten-5.jpeg" link="#" />
</div>
```

Do this: 

```JS
// Define an array of objects with the data
const projects = [
  {title:"Tetris Dots", image: "/images/kitten-0.jpeg", link: "#" }, 
  {title:"Zombie Server", image: "/images/kitten-1.jpeg", link: "#" },
  {title:"Amazing Colors", image: "/images/kitten-2.jpeg", link: "#" },
  {title:"Flip Toggle", image: "/images/kitten-3.jpeg", link: "#" },
  {title:"121 Second St", image: "/images/kitten-4.jpeg", link: "#" },
  {title:"Slide Shows", image: "/images/kitten-5.jpeg", link: "#" }
]

// Map data into Project components
projects.map((item) => {
  return <Project title={item.title} image={itme.image} link={item.link} />
})

// You could deconstruct
projects.map(({ title, image, link }) => {
  return <Project title={title} image={image} link={link} />
})

// Or how about this
projects.map((item) => {
  return <Project {...item} />
})
```

### Challenges 

Define a data object that represents a project you will put in your portfolio. 

At minimum this should be: 

- title: Title of the project
- image: Image url for the project image or screenshot
- link: Url to the project live or on GitHub

There is all sorts of information you might want to show. Take your Make School portfolio for example. The make School portfolio displays:

- title: Title of the project
- description: Description of the project 
- tech: An array of key words
- image: Image url for the project image or screenshot
- github: Url to the project live or on GitHub
- link: Link to the live project

You can expand this with a lot of other info: 

- date: Date the project was added
- resume: link
- linkedin: Linked in link
- social: An object with social media links 
  - instagram
  - facebook
  - github

Define the object.

Make an array of these objects. Use real data as much as you can. But feel free to mock up some placeholders objects for now. Make the placeholder for projects you plan to create or are currently working on. 

Render this data in your React portfolio. 

### Deliverable

 Link to your React Portfolio. 

### Due date

Class 3

## Assessing the assignment

[Assignment Name Rubric](./Assignment-01-rubric.md)


