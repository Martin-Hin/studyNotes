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
In the code above I defined a component called **Counter**.
The counter class above extends the component class class that is imported from the react module.
The Component class has methods that are inherited into the Counter class.
The <h1></h1> element that is returned in the code above is a .jsx expression which gets compiled to React.createElement and that is the reason why it is imported from the react object on the top of the code.
It is also possible to define and export the compnent on the same line as indicated below.

```jsx
export default class "Counter" extends Component {
  state = {}
  render () {
    return <h1>Hello World</h1>
  }
}
```

## Creating a react app

1. In the command line, enter the command below and wait for the project to be ready. Note that appname should be the name you want to give the app.

```bash
create-react-app <appname> 
```

2. Then open the folder and enter the command below to start the application. This will open the application in the browser.

```Bash
npm start

```
## Importing a react app

To import a component into index.js, type the code below, in this case I assume that the component being imported is the one defined above. 

```jsx
import Counter from './components/counter';
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
React.Fragment
```
## Embedding expressions

1. [x] This is where we start tomorrow.
2. [ ] How do we do it?
3. [ ] What is embedding?


### Important to note

- To make it easier to write code I use prettier and simple react snippets extension. 
- I use imrc for generatinng the import statement.
- I use cc for generating a class components.
- I use multicursor editing and use command+d or ctrl+d to change multiple instances at the same time.



