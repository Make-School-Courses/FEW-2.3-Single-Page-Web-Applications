# FEW 1.2 - Lesson 4

## Technical Debt, ESLint, Troubleshooting

This class we will working on improving the code base we've developed in the previous classes. 

## Technical Debt

Often while working on software projects the solutions you create are not the best. You won't even know it until later on. This is [Technical Debt](https://www.agilealliance.org/introduction-to-the-technical-debt-concept/).

The concept says that some of your solutions borrow against your future development. In other words you'll do what you can today to keep moving forward, but the solution you're working is not the best possible or doesn't take into account the needs and requirements of your future project. 

There are times when you need to pay this "debt." 

## Linting

You're goal is write the best quality code you can. The hard part is learning what good quality code is. 

A linter is a tool that analyzes your code and flags errors, bad style, suspicious constructs. 

Besides finding bugs the linter ensures consistency in youe code. Doing things consistently creates the best quality code that runs reliably. Consistency is also important for working on teams. 

**Linting is a profesional best practice.** All of the best companies use linters, you should to! 

Using a linter will: 

- Make your code read well
- Find Errors
- Improve the quality of your code
- Teach you profesional best practice
- Teach you more about code and syntax

### Install ESLint

For our project we will be using ESLint. This is a linter that works with all of the major code editors. 

You'll need to install it in your editor and in your project. 

**Install ESLint in your code Editor**

This varies with the editor. Generally speaking ESLint is a plugin or package you will add. 

- Atom: 
	- Packages > Settings View > Manage Packages 
	- + Install
	- Search for ESLint `linter-eslint`
	- Install 
- VS Code: 
	- Code > Preferences > Extensions
	- Search for ESLint
	- Install

**Add ESLint to a project**

In this step you'll add and configure ESLint in a project. 

ESLint is installed with NPM. You'll need to create a new NPM project if you don't already have one. Since we are working with  React all of the starter code uses NPM already. 

- `npm install eslint --save-dev`
- `eslint --init` From here follow the guide: 
	- 'Choose a popular style guide'
	- 'Airbnb'
	- 'Do you use React?' `y`
	- Format for config choose: 'JavaScript'
	- Install: `y`

**Using the linter**

The linter will show a red undline under questionable code. 

Hovering over these areas will show a popup with an explanation of the rule this piece of code violates. 

Linters follow rules to decide what is good and what is questionable. You chose the Airbnb style guide and using their rules. That is you are following the rules and best practices Airbnb expects from their programmers. 

For more information there is button (dot or lighbulb) you can click for options. Usually the options include: 

- Ingnore this rule: 
	- Suppress this rule for the line
	- Suppress this rule the file
	- Show documentation for this rule

## After Class 3 hours

Using the linter review all of the code you have written so far and lint!

You shold lint all of the JS files in the following projects: 

- React tutorial (This is the Tic Tac Toe game)
- React Product List challenge
- React API project challenge

Do your best to fix all of the problems. 

Use any spare time to fix other problems and improve your previous work! Remember you should dedicate 3 hours to this weeks homework. 

## Learning Objectives/Competencies

1. Identify and describe
1. Define 
1. Desgin 
1. Implement 

## Initial Exercise

- Funny comic
- Prime the Pump (e.g. think and jot, think pair share, etc)
- Productivity Tip/Tool
- Review of current event (e.g. tech news relevant to your track/topic)
- Quiz on homework or topic(s) of past class

## Overview/TT I 

- Why learn this? 
- Industry examples of usage
- Best practices
- Personal anecdote 

## In Class Activity I

- I do, We do, You do
- Reading & Discussion Questions in small groups
- Draw a picture/diagram
- Complete Challenges solo or in pair
- Q&A about tutorials
- Pair up and code review
- Pair program
- Formative assessment
- Form into groups
- etc (get creative :D)

## Overview/TT II (optional)

## In Class Activity II (optional)

## After Class

- Continue working on your current tutorial
- Complete reading
- Complete challenges

## Additional Resources

1. http://imtiazrayhan.com/install-a-package-in-atom/
1. https://eslint.org/docs/user-guide/getting-started
1. 
