# FEW 2.3 - Lesson 4

## Profesional Best Practices

This class you will work on improving the codebase you've developed in the previous classes.

## Learning Objectives

1. Apply best practices by linting
1. Define code quality
1. Identify technical debt

## Technical Debt

Often while working on software projects the solutions you create are not the best. You won't even know it until later on. This is [Technical Debt](https://www.agilealliance.org/introduction-to-the-technical-debt-concept/).

The concept says that some of your solutions borrow against your future development. In other words, you'll do what you can today to keep moving forward, but the solution you're working is not the best possible or _does not take into account the needs and requirements of your future project_.

There are times when you need to pay this "debt."

## Linting

Your goal is to write the best quality code you can. The hard part is learning what good quality code looks like. 

A linter is a tool that analyzes your code and flags errors, bad style, and suspicious constructs. 

Besides finding bugs the linter ensures consistency in your code. Doing things consistently creates the best quality code that runs reliably. Consistency is also important for working on teams. 

**Linting is a professional best practice.** All of the best companies use linters, you should too! 

Using a linter will: 

- Make your code read well
- Find Errors
- Improve the quality of your code
- Teach you professional best practice
- Teach you more about code and syntax

Seriously, using a linter is a great way to learn more about the code you are writing. 

### Install ESLint

For our project, we will be using ESLint. This is a linter that works with all of the major code editors. 

You'll need to install it _in your editor_ and _in your project_. 

**Install ESLint in your code Editor**

This varies with the editor. Generally speaking, ESLint is a plugin or package you will add. Follow these steps to install ESLint in Visual Studio Code and Atom. 

- Atom: 
 - Packages > Settings View > Manage Packages 
 - + Install
 - Search for ESLint `linter-eslint`
 - Install 
- Visual Studio Code: 
 - Code > Preferences > Extensions
 - Search for ESLint
 - Install

**Initialize ESLint**

ESLint is installed as part of the create react app project. You can use it by initializing it. 

Initialize ESLint: 

`eslint --init` 

Answer the questions: 

- How would you like to use eslint? **To check syntax, find problems, and enforce code style**
- What type of modules does your project use? **JavaScript modules (import/export)**
- Which framework does your project use? **React**
- Does your project use TypeScript? **N**
- Where does your code run? **Browser**
- How would you like to define a style for your project? **Use a popular style guide**
- Which style guide do you want to follow? **Airbnb (https://github.com/airbnb/javascript)**
- What format do you want your config file to be in? **JavaScript**
- Would you like to install them now with npm? **Y**


From here follow the guide: 
 - 'Choose a popular style guide'
 - 'Airbnb'
 - 'Do you use React?' `y`
 - Format for config choose: 'JavaScript'
 - Install: `y`

**Using the linter**

The linter will show a squiggly red underline under the questionable code. 

Hovering over these areas will show a popup with an explanation of the rule this piece of code violates. 

Linters follow rules to decide what is good and what is questionable. You chose the Airbnb style guide and are using their rules. That is you are following the rules and best practices Airbnb expects from their programmers. 

For more information, there is a button (dot or lightbulb) you can click for options. Usually, the options include: 

- Ignore this rule: 
 - Suppress this rule for the line
 - Suppress this rule the file
 - Show documentation for this rule

### What are Proptypes? 

Some programming languages are called strongly typed. These languages enforce the type of variables. For example, when defining a new variable x you might set the type to a Number. Later if you assigned a value that was type string the system would throw an error. 

Assigning the wrong type to a variable is usually an error.

JavaScript is not a typed language. PropTypes allow React to check types passed in props. 

https://reactjs.org/docs/typechecking-with-proptypes.html

Use prop types by installing the library: 

`npm install --save prop-types`

Import prop-types in a component

```JSX
import React from 'react'
import PropTypes from 'prop-types'

function CategoryButton({ name, onClick }) {
 return (
 <button
 type="button"
 onClick={() => {
 onClick(name)
 }}
 >
 {name}
 </button>
 )
}

export default CategoryButton

// Define your prop types here: 

CategoryButton.propTypes = {
 name: PropTypes.string, // A string
 onClick: PropTypes.func.isRequired, // a required function
};

// Set a default values for props
CategoryButton.defaultProps = {
 name: 'Click', // the default for name
}
```

PropTypes also work with function based components. This example is taken from the React Tutorial. 

```JS
import React from 'react';
import { PropTypes } from 'prop-types';
import './index.css';

function Square({ onClick, value }) {
  return (
    <button className="square" onClick={onClick} type="button">
      {value}
    </button>
  );
}

export default Square

Square.propTypes = {
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
```

Follow this guide: https://blog.bitsrc.io/master-proptypes-in-react-a80f9fefff8

## After Class 

Apply the ideas from class to your portfolio project: 

[Assignment 4](../Assignments/Assignment-04.md)

**Improve your Code Quality**

Using the linter review _all_ of the code you have written so far and lint!

You should lint all of the JS files in the following projects: 

- React tutorial 

Do your best to fix all of the problems. 

Use any spare time to fix other problems and improve your previous work! Remember, you should dedicate 3 hours to this! 

## ESLint and Code Quality

| - | Does not meet expectations | Meets expectations | Exceeds expectations |
|:---|:--------------------------|:-------------------|:---------------------|
| Completed | Linted less than 70% of code | Linted 70% or more code | Linted 100% of code |
| Work Ethic | Did not commit when working on project | Initial commit at class and commit while working | Commits show 3 hours and document process |

## Additional Resources

1. [ESLint Getting Started](https://eslint.org/docs/user-guide/getting-started)
1. [Install ESLint for Atom](http://imtiazrayhan.com/install-a-package-in-atom/)

