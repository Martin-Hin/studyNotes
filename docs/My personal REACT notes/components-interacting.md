---
sidebar_position: 2
---

# Components interacting

## Components rendering other components

Render methods can return component instances like in the example below

```jsx
class OMG extends React.Component {
  render() {
    return <h1>This is cool</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
```

In the example above, Crazy return an instance of the OMG component class. In other words Crazy renders an <OMG />.

## Require a file

### Import

In React.js every Javascript file in the application is invisible to the other by default. To use variables that are declared in a different file we have to import the variables. As demonstrated below;

```jsx
import { NavBar } from "./NavBar.js";
```

It is important to use the curly braces when importing a named variable.
It is also important to not forget to add the file path in the end of the import statement.
This is very common in module systems of independent, importable files.

### Export

A variable that is being imported should also be exported. To export a variable, place the keyword export immediately in front of the variable that you want to export.
It is possible to export several items from the same file. For example;

```jsx
// entertainment.js

export const faveSongs = {
    jazz: 'The blues',
    rock: 'The punk club',
    rap: '8 mile road'
}

export const faveMovie = {
    Sci-fi: 'return of the aliens',
    comedy: 'The gods must be crazy',
    action: 'Terminator'
}
```

Importing the file above would be as follows;

```jsx
// App.js
// import faveSongs and faveMovie from ./entertainment.js

import { faveSongs, faveMovie } from "./entertainment.js";

// Use the faveMovie
console.log(`My favorite movie is: ${faveMovie.action}`);
```

This style of importing and exporting in Javascript is known as "named exports".
Named exports must have their names wrapped in curly braces such as:

```jsx
import { faveSongs, faveMovie } from "./entertainment.js";
```

## this.props

Another way that components interact is through passing information to another component using props. Information that is passed to another component is known as "props".

A component's props is an object that holds information about that component. To see the information in that component we use "this.props".

## passing "props" to a component

Information is passed to a component by giving the component an attribute. That attribute is known as "props" and it basically represents information that is being passed.

example:

```javascript
<MyComponent message="I will pass this information as props" />
```

In the instance of the component above, there is a set attribute which has a name of 'message' and carries the information. If the information that we want to pass is not a string, then we wrap that information with curly braces as the example below which is an array.

```javascript
<Greeting myInfo={["top", "secret", "information"]} />
```

Another example would be;

```javascript
<Greeting name="James" town="Helsinki" age={22} student={true} />
```
