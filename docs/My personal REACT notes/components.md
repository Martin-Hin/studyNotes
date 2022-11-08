---
sidebar_position: 1
---

# Components

## Defining a react component

```jsx
import React, { Component } from 'react';

class "Counter" extends Component {
  state = {}
  render () {
    return <h1>Hello World</h1>
  }
}
export default Counter;
```

In the code above I defined a component called "**Counter**".
The counter class above extends the component class class that is imported from the react module.
The Component class has methods that are inherited into the Counter class.
The h1 element that is returned in the code above is a .jsx expression which gets compiled to React.createElement and that is the reason why it is imported from the react object on the top of the code.
It is also possible to define and export the component on the same line as indicated below.

```jsx
export default class "Counter" extends Component {
  state = {}
  render () {
    return <h1>Hello World</h1>
  }
}
```

## Creating a react app

1. In the command line, enter the command below and wait for the project to be ready. Note that "appname" should be the name you want to give the app.

```bash
create-react-app <appname>
```

2. Then open the folder and enter the command below to start the application. This will open the application in the browser.

```Bash
npm start

```

## Importing a component

To import a component into index.js, type the code below, in this case I assume that the component being imported is the one defined above.

```jsx
import Counter from "./components/counter";
```

There is not need for curly braces in the case above because counter is a default export.
To render the in the DOM write the code below.

```jsx
ReactDOM.render(<Counter>, document.getElementById("root"));
registerServiceWorker();
```

## Specifying children

The code below helps in keeping the code clean by removing unnecessary html code.

```jsx
React.Fragment;
```

## Embedding expressions

- state is a special property in react components and it is an object that stores any data that the component needs.
- To embed JavaScript expressions in react, use curly braces within an html element. The code will be rendered dynamically.
- jsx expressions are like any normal JavaScript objects, they can be passed as values in a constant or used as functions or objects.

```jsx
state = {
  //This is where the data goes with examples
  count: 0,
  address: {
    street: "helsinginkatu",
    code: 006586,
  },
};
```

## Setting attributes

- className is used to create a class attributes, and not class because this is a reserved keyword in JS.
- For perfomance and maintenability it is recommended to use classes.
- It is possible to create a property for styling such as follows,

```jsx
style = {
  fontWeight: "bold",
  fontSize: 10,
};
```

- Above, a property is defined and for it to work it has to be referenced in the jsx expression as follows,

```jsx
render = {
  <div>
    <span style={this.style}> // here the item that is being styled
    </span>
  </div>
}
```

- It is also possible to use inline styling as indicated below,

```jsx
<span style={{ fontSize: 30 }} className="badge-primary"></span>
```

- In the code above the style attribute is used inline to syle the element. Note the double curly braces.

### Important to note

- To make it easier to write code use prettier and simple react snippets extension.
- imrc for generating the import statement in react files.
- cc for generating a class components.
- To use multi-cursor editing and use command+d or ctrl+d to change multiple instances at the same time.
