# FEW 2.3 - Lesson 5

## Conditional Rendering

Commonly in React, you will need to render different components under different conditions. Here are two patterns you can apply to your work: 

**Pattern 1** - Use a function to return one JSX expression or another based on state or props. 

```JavaScript
function toggle(hasMustard) {
    if (hasMustard) {
        return <HotdogWithMustard />
    }
    return <Hotdog />
}
```

This is nice as it removes logic from cluttering your render method.

**Pattern 2** - Assign a JSX element to variables and render that. 

```JavaScript
render() {
    const { time } = this.state
    let element
    if (time === 'morning') {
        element = <Eggs />
    } else if (time === 'lunch') {
        element = <Burrito />
    } else {
        element = <Icecream />
    }

    return (
        <div>
            {element}
        </div>
    )
}
```

This might be good when you want to see the logic at the point where something is rendered. 

Read more about [Conditional Rendering in React](https://reactjs.org/docs/conditional-rendering.html)

Conditional Rendering techniques

- A function returns a component
- Element Variables
- Inline if with logical && Operator
- Inline if-else with Conditional Operator (ternary)
- Prevent Component from rendering

## In Class 

Start on Assignment 3. In this assignment you will create an app that works with a web API. It will need to load data and display it. To build the app you will make use of conditional rendering.

[Assignment 3](../Assignments/Assignment-03)

## After Class

After class your goal is to use the ideas from this class make your portfolio web site a "multipage" navigable site with React Router. 

[Assignment 3](../Assignments/Assignment-03)

## Additional Resources

3. https://reactjs.org/docs/thinking-in-react.html
4. https://reactjs.org/docs/design-principles.html
