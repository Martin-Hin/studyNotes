---
sidebar_position:  5
---

# JavaScript Review

## Classes

Classes are tools that are used by developers to create similar objects. They are useful in debugging and maintaining code and helps in avoiding code repetitions.

There are similarities between the class and object syntax in JavaScript except that classes use the constructor method and objects do not. JavaScript calls the constructor method everytime it creates a new instance of a class.

It is best practice to capitalize and CamelCase class names.

## Class Syntax

```JavaScript
class ExampleOfClass {
  constructor(name, department){
      this.name = name;
      this.department = department;
  }
}
```

Classes are a template for creating objects, they encapsulate data with code to work on the data.

## Class declaration

To declare a class, you use class keyword with the name of the class. Example below;

```JavaScript
class Rectangle {
  constructor (height, width){
      this.height = height;
      this.width = width;
  }
}
```
It is important to remember that classes must be defined before they can be constructed.

## Class expressions

This is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body and it can be accessed via the name property. Example below;

```JavaScript
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"
```
:::tip 

**Class Expressions** must be declared before they can be used.

:::

## Class body and method definitions

The body of a class is the part in curly braces, and this is where we define the class members like methods or constructors.

The body of the class is executed in strict mode and code written here is subject to stict syntax for increased perfomance and some keywords are reserved for future versions of ECMAscript.

## Constructor

The constructor method is a special method that is used for creating and initilizing an object created with a class. There can only be one method with the name constructor in a class, otherwise an error will be thrown.

The super keyword can be used to call the constructor of the super class.

JavaScript invokes the constructor method everytime we create a new instance. The constructor method accepts one argument.

Inside the constructor method we use the this keyword. 'this' can refer to an instance of that class.

## Instances

Instances are objects that contain the property names and methods of a class, but with unique property values.

We use the 'new' keyword to generate a new instance of a class. The 'new' keyword calls the constructor method 'constructor()' runs the code inside of it, and then returns the new instance.



## Subclassing with the keyword extends

The keyword extends is used in class declarations or class expressions to create a class as a child of another class. Example;

```JavaScript
class animal {
  constructor (name) {
    this.name = name;
  }
  
  speak () {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor (name) {
    super(name); // call the super class constructor and pass in the name parameter.
  }

  speak () {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Buffie');
d.speak(); // Buffie barks.
```
If there is a constructor present in the subclass, it needs to first call super() before using 'this'.

We can also extend traditional function based classes. Example;

```JavaScript
function Animal (name) {
  this.name = name
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
}

class Dog extends Animal {
  speak(){
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Buffie');
d.speak(); // Buffie barks.
```


:::note

Classes cannot extend regular non-constructible objects. If we want to inherit from a regular object we can instead use Object.setPrototypeOf():

:::

```JavaScript
const Animal = {
  speak(){
    console.log(`${this.name} makes a noise.`);
  }
};

class Dog {
  constuructor (name) {
    this.name = name;
  }
}
// if we do not do this we will get a TypeError when we invoke speak 
Object.setPrototypeOf(Dog.prototype, Animal);
let d = new Dog('Buffie');
d.speak(); // Buffie makes a noise.
```

## Conditionals

### If statements

```JavaScript
if (true){
  console.log('This message will print.');
}
```
The if keyword is followed by parentheses which is followed by a code block or block statement indicated in curly braces. If the condition in the parentheses evaluates to true then the code in the block is executed otherwise if it is false it is not executed.

### If, else statements

```JavaScript
if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
```
The code above will print "But the code in this block will!".

The code above uses the "else" keyword following the code block of the if statement and curly braces with the logic in it. The code inside the else statement block will execute if the if statement code block evaluates to false.

if - else statements allow us to automate solutions to yes-or-no questions, also known as binary decisions.

## Comparison operators

* Less than: <
* Greater than: >
* Less than or equal to: <=
* Greater than or equal to: >=
* Is equal to: ===
* Is not equal to: !==

## Logical operators

* The and operator (&&). When we use the && operator, we are checking that two things are true
* The or operator (||). 
* The not operator, otherwise known as the bang operator (!). The ! not operator reverses, or negates, the value of a boolean. Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true.

## Truthy or Falsy

#### The list of falsy values includes;

* 0
* Empty strings like "" or ''
* null which represent when there is no value at all
* undefined which represent when a declared variable lacks a value
* NaN, or Not a Number

## Ternary operator

Ternary operators are used to simplify if - else statements.

Example;
```JavaScript
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```
The code above can also be written as follows; 

```JavaScript
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```
#### In the code above;

- The condition, isNightTime, is provided before the ?.
- Two expressions follow the ? and are separated by a colon :.
- If the condition evaluates to true, the first expression executes.
- If the condition evaluates to false, the second expression executes.

## Else If Statements

We can also add an else if statement if an else statement does not evaluate to true. 
Example;
```JavaScript
let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
```
In the code above the code will be executed depending on the value of variable stopLight. 

## Switch Keyword

A switch statment creates an alternative syntax for a long if else statement to make it easier to read and write.

The switch keyword is used and initiate the code and is followed by parantheses, which contains the value which each case is going to evaluate. In the code block which is surrounded by curly braces {}, are the conditions that are going to be evaulated. The case keyword is used to make the check the values that are evaluated and if the values evaluate to truthy the code is executed, otherwise the program moves to the next line and check again what is the case. 

```JavaScript
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
    // prints 'Papayas are $1.29'
}
```

## Functions

A function declaration consists of 

* The function keyword.
* The name of the function, or its identifier, followed by parentheses.
* A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

Example of a function declaration;

```JavaScript
function name (){
  console.log('Hello World');
}
```
We call a function by writing the name of the functions and paranthesis as shown below.

```JavaScript
name();
```

:::note

  The hoisting feature in JavaScript allows access to function declarations before they have been defined. This is generally not considered good practice, but it's possible to come across it.

:::

Example of hoisiting;

```JavaScript
greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}
```
This function call executes the function body, or all of the statements between the curly braces in the function declaration. Functions can be called as many times as needed.

### Parameters and arguments

Functions can take inputs and use the inputs to perform a task. Parameters allow functions to accept input(s) and perform a task using the input(s). The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

Example;   

```JavaScript
const rectWidth = 7;
const rectHeight = 5;

function calculateArea (rectWidth, rectHeight) {
    console.log( rectWidth * rectHeight );
}
// or it could be as follows below

const rectWidth = 7;
const rectHeight = 5;

function calculateArea (rectWidth, rectHeight){
    return rectWidth * rectHeight;
}
```
:::note

We use the 'return' keyword to capture the results of the code executed in the function body. The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

:::
### Default parameters

One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

```JavaScript
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```
* In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!

* When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

* When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.

:::note

By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.

:::

## Helper functions

We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

Example;
```JavaScript
function monitorCount(rows, columns) {
  return rows * columns;
};

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200
};

const totalCost = costOfMonitors(5,4);

console.log(totalCost);

// The code above prints 4000.
```

## Function Expressions

The other way to define functions is to use function expressions. In a function expression, the function name is usually omitted. The function without a name is called an anonymous function. A function expression is stored in a variable to refer to it.

Example;
```JavaScript
const plantNeedsWater = function(day){
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater('Tuesday'));

// The code above prints false.
```
To invoke a function expression (an anonymous function), we write the name of the variable the function is stored in and followed by parentheses enclosing arguments being passed into the function.

:::note

Unlike function declarations,  function expressions cannot be hoisted. So they cannot be called before they are defined.

:::

## Arrow functions

ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { }.

Example;
```JavaScript
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```

## Concise Body Arrow Functions

These is the most condensed form of functions provided by ES6. There are different ways to refactor arrow function syntax. A look at a few.

1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

Example;

```JavaScript
//Zero paremeters will look like the code below,
const functionName = () => {};

//One parameter will look like the code below,
const functionName = ParamOne => {};

// Two or more parameters will look like the code below,
const functionName = (paramOne, paramTwo) => {};
```

2. A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

Example;
```JavaScript
// Single line block code looks a follows,
const sumNumbers = number => number + number;

// Multiline block code looks a follows,
const sumNumbers = number => {
  const sum = number + number;
  return sum;
};
```

:::note

**Implicit return** is when the contents of a function body follow the fat arrow =>, and the 'return' keyword is omitted.

:::

## Scope 

Variables can exist inside or outside blocks

## Global Scope

Global variables, variables are the ones declared outside of blocks. They can be accessed by any code in the program including code inside of blocks.

Example;
```JavaScript
let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

// The code above will print: Night Sky: The Moon, North Star, and The Milky Way
// Notice how satellite, galaxy, and stars are global variables that are being accessed from the in the function.
```

## Block Scope

When code is defined in block scope it can only be accessed within the curly braces {}. It is called a block scope variable because it is only available to the lines of code within that block. They are also called local variables.

Example;
```JavaScript
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError
```
In the code above; 
* We define a function logSkyColor().
* Within the function, the color variable is only available within the curly braces of the function.
* If we try to log the same variable outside the function, it throws a ReferenceError.

## Scope pollution

Having too many global variable can cause problems in the program. When we declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.

 Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

 Example of scope pollution;
 ```JavaScript
 let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100
 ```

 **What is happening in the code above?**

* We have a variable num.
* Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
* When we call logNum(), num gets reassigned to 100.
* The reassignment inside logNum() affects the global variable num.
* Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num.

:::note

While it’s important to know what global scope is, it’s best practice to not define variables in the global scope.

:::

## Practicing Good Scoping

Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t!

Tightly scoping your variables will greatly improve your code in several ways. 

* It will make your code more legible since the blocks will organize your code into discrete sections.
* It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
* It’s easier to maintain your code, since your code will be modular.
* It will save memory in your code because it will cease to exist after the block finishes running.

## Arrays

Arrays are JavaScript’s way of making lists.
An array literal creates an array by wrapping items in square brackets [].
Each content item inside an array is called an element.
We can also save an array to a variable.

Example;
```JavaScript
const hobbies = [ 'Basketball ','Programming ','Swimming ']; 
console.log(hobbies);
```
### Accessing Elements in an Array

Each element in an array has a numbered position known as its index.
Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1.
The first item in an array will be at position 0 or also called index 0.
We use bracket notation, [] with the index after the name of the array to access the element.

Example;
```JavaScript
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// prints Fortune favors the brave.
//Where there is love there is life.
//undefined : 'Because there is no element with index [3].'
```

### Update Elements in an Array

Once you have access to an element in an array, you can update its value.

Example;
```JavaScript
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados'

console.log (groceryList[1]);
// Prints avocados. 'Because the element in index [1] was changed from bread to avacodos.'
```

### Arrays in let or const

Variables declared using the const keyword cannot be reassigned but elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

### The .length Property

One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings.

Example;
```JavaScript
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// Prints 3 to the console.
```

### The .push() Method

Methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.
The .push() method allows us to add items to the end of an array.

Example;
```JavaScript
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('mop the floor', 'Iron my clothes');

console.log(chores[4]);

// Prints Iron my clothes.
```
:::note

The .push() method changes, or mutates, an array. You might also see .push() referred to as a destructive array method since it changes the initial array.

:::

### The .pop() Method

The .pop() method removes the last item of an array.
It does not take any arguments, it simply removes the last element of an array.
The method returns the value of the last element. For example, we can store the returned value in a variable for later use.
The .pop() method mutates the initial array.

Example;
```JavaScript
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];


chores.pop();
console.log(chores);
// Prints [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]

// Another example;
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
// Above we can see that we stored the last item of the array in the variable called removed.
```

### Other Methods available in JavaScript

There are many other methods that are availabe in JavaScript some of them include .join(), .slice(), .splice(), .shift(), .unshift(), and .concat(). Using these built-in methods make it easier to do some common tasks when working with arrays.

### Nested Arrays

Arrays can store other arrays and a nested array is formed when an array contains another array.

Example;
```JavaScript
const numberClusters = [[1,2], [3,4], [5,6]];
const target = numberClusters[2][1];

console.log(target);
// In the example above, numberClusters variable has a nested array, we try to save the value of the array in index 2 and then the value of index 1 from inside the array. 
// The printed result is 6, which is now stored in target variable. 
```



