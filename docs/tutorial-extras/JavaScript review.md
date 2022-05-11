---
sidebar_position:  5
---

# JavaScript Review

## Classes

Classes are tools that are used by developers to create similar objects. They are useful in debugging and maintaining code and helps in avoiding code repetitions.

There are similarities between the class and object syntax in JavaScript except that classes use the constructor method and objects do not. JavaScript calls the constructor method everytime it creates a new instance of a class.

It is best practice to capitalize and CamelCase class names.

## Class Syntax

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
if (true){
  console.log('This message will print.');
}
```
The if keyword is followed by parentheses which is followed by a code block or block statement indicated in curly braces. If the condition in the parentheses evaluates to true then the code in the block is executed otherwise if it is false it is not executed.

### If, else statements

```js
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
```js
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```
The code above can also be written as follows; 

```js
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
```js
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

```js
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

```js
function name (){
  console.log('Hello World');
}
```
We call a function by writing the name of the functions and paranthesis as shown below.

```js
name();
```

:::note

  The hoisting feature in JavaScript allows access to function declarations before they have been defined. This is generally not considered good practice, but it's possible to come across it.

:::

Example of hoisiting;

```js
greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}
```
This function call executes the function body, or all of the statements between the curly braces in the function declaration. Functions can be called as many times as needed.

### Parameters and arguments

Functions can take inputs and use the inputs to perform a task. Parameters allow functions to accept input(s) and perform a task using the input(s). The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

Example;   

```js
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

```js
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

### Helper functions

We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

Example;
```js
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

### Function Expressions

The other way to define functions is to use function expressions. In a function expression, the function name is usually omitted. The function without a name is called an anonymous function. A function expression is stored in a variable to refer to it.

Example;
```js
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

### Arrow functions

ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { }.

Example;
```js
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```

### Concise Body Arrow Functions

These is the most condensed form of functions provided by ES6. There are different ways to refactor arrow function syntax. A look at a few.

1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

Example;

```js
//Zero paremeters will look like the code below,
const functionName = () => {};

//One parameter will look like the code below,
const functionName = ParamOne => {};

// Two or more parameters will look like the code below,
const functionName = (paramOne, paramTwo) => {};
```

2. A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

Example;
```js
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

### Global Scope

Global variables, variables are the ones declared outside of blocks. They can be accessed by any code in the program including code inside of blocks.

Example;
```js
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

### Block Scope

When code is defined in block scope it can only be accessed within the curly braces {}. It is called a block scope variable because it is only available to the lines of code within that block. They are also called local variables.

Example;
```js
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

### Scope pollution

Having too many global variable can cause problems in the program. When we declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.

 Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

 Example of scope pollution;
 ```js
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

### Practicing Good Scoping

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
```js
const hobbies = [ 'Basketball ','Programming ','Swimming ']; 
console.log(hobbies);
```
### Accessing Elements in an Array

Each element in an array has a numbered position known as its index.
Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1.
The first item in an array will be at position 0 or also called index 0.
We use bracket notation, [] with the index after the name of the array to access the element.

Example;
```js
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
```js
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
```js
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// Prints 3 to the console.
```

### The .push() Method

Methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.
The .push() method allows us to add items to the end of an array.

Example;
```js
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
```js
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
```js
const numberClusters = [[1,2], [3,4], [5,6]];
const target = numberClusters[2][1];

console.log(target);
// In the example above, numberClusters variable has a nested array, we try to save the value of the array in index 2 and then the value of index 1 from inside the array. 
// The printed result is 6, which is now stored in target variable. 
```

## Loops

Loops allow us to write efficient code that automates to make scalable, manageable programs. Loops iterate an action until a certain condition is met. When the condition is met the loop stops and the computer moves on to the next part of the program. 

### For Loop

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration.

A for loop contains three expressions separated by ; inside the parentheses:

1. An initialization starts the loop and can also be used to declare the iterator variable.
2. A stopping condition is the condition that the iterator variable is evaluated against, if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
3. An iteration statement is used to update the iterator variable on each loop.

Example;
```js
for (let counter = 5; counter < 11; counter++){
  console.log(counter);
}
// Prints 5, 6, 7, 8, 9, 10
```
In the code above the initialization on the for loop is 'let counter = 5' so the looping will start from 5. We can say that 'counter' is the iterator variable. The stopping condition is 'counter < 11' meaning that the loop will continue as long as the iterator variable is less than 11. The iteration statement is 'counter++' which means that the value of counter will be increased by one each time. The code block inside the curly braces will execute as long as the condition is not met. The point where the loop stops is called the stop condition. 

### Looping in Reverse

To run a backward for loop, we must:

1. Set the iterator variable to the highest desired value in the initialization expression.
2. Set the stopping condition for when the iterator variable is less than the desired amount.
3. The iterator should decrease in intervals after each iteration.

Example;
```js
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
// The loop above loops from 3 to 0
```
### Looping Through Arrays

To loop through each element in an array, a for loop should use the array’s .length property in its condition.

Exxapmle;
```js
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
// Prints Grizzly Bear, Sloth, Sea Lion
```
In the loop above, we’ve named our iterator variable i. This is a variable naming convention you’ll see in a lot of loops. When we use i to iterate through arrays we can think of it as being short-hand for the word index. Notice how our stopping condition checks that i is less than animals.length. Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1.

Example 2;
```js
const vacationSpots = ['Bali', 'Paris', 'Tulum','LA'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit '+ vacationSpots[i]);
}
/*Output of the code above:
I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum
I would love to visit LA*/
```

### Nested Loops

A loop that runs inside of another loop is called a nested loop. One of the main uses of a nested for loop is to compare the elements in the two arrays. For each round of the outer for loop, the inner for loop will run completely.

Example 1;
```js
for (i = 0; i < 3; i++) {
  for (j = 0; j = 4; j++) {
      console.log(i - j);
  }
}
```

Example 2;
```js
for (let outer=0; outer < 2; outer += 1){
  for (let inner = 0; inner < 3; inner += 1){
      console.log(`${outer} - ${inner}`);
  }
}
/* Output:
0 - 0
0 - 1
0 - 2
1 - 0
1 - 1
1 - 2 */
```
The inner loop will run all it's iterations for each iteration of the outer loop.

Example 3
```js
const bobsFollowers = ['Jane', 'Daniel', 'Mona', 'Jack'];
const tinasFollowers = ['Lisa', 'Mona', 'Jane' ];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){

   if (bobsFollowers[i] === tinasFollowers[j]){
     mutualFollowers.push(tinasFollowers[j]);
   }
  }
};
console.log(mutualFollowers);
// Prints [ 'Jane', 'Mona' ]
```

### While Loop

Example;
```js
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
```
In the example above, 

* The counterTwo variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
* We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
* Next, we have our loop’s code block which prints counterTwo to the console and increments counterTwo.

:::note

**An infite loop** is when a loop runs without stopping because the stop condition is not met, or in other words that the testing condition always evaluates to true and the loop never stops running. 

:::

:::caution

**An infite loop** can take up all of your computer’s processing power potentially freezing your computer.

:::

:::tip

#### Infinite loop example
In our example of a while loop above, If we didn’t increment counterTwo in our block, counterTwo would always have its initial value of '1'. That would mean the testing condition 'counterTwo < 4', would always evaluate to 'true' and our loop would never stop running!

:::

```js
// An example of an infinite loop
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
        //counterTwo++; If this part of the code is omitted it will become an infinite loop.
}
```

While loops are best used in situations where we want a loop to execute an undetermined number of times.

### Do While Statements

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.

```js
let cupsOfSugarNeeded = 6;
let cupsAdded = 7;

do {
 cupsAdded++
 console.log(cupsAdded + ' cups were added') 
} while (cupsAdded < cupsOfSugarNeeded);
// The code above will be executed once even though the condition executes to false.  
```

### The break Keyword

The break keyword is used to stop the code from continuing to execute the loop even if the original stopping condition has not been met yet. It is added in the code block.

```js
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
      break;
  }
}
console.log("And if you don't know, now you know.");
/* Output
Lil' Kim
Jay-Z
Notorious B.I.G.
And if you don't know, now you know.
*/
```

## Higher Order functions

### Functions as Data

JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

Since functions are a type of object, they have properties such as .length and .name, and methods such as .toString(). Functions are special because we can invoke them, but we can still treat them like any other type of data.

```js
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name);
// Prints checkThatTwoPlusTwoEqualsFourAMillionTimes as the name when we try to access the name property of the function.
```
### Functions as Parameters

As we alredy know a parameter is a placeholder for the data that gets passed into a function, Since functions can behave like any other type of data in JavaScript, functions can accept other functions as parameters.

A higher-order function is a function that either accepts functions as parameters, returns a function, or both!

We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses.

```js
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
 let checkA = val + 2;
 let checkB = func(val);
  if ( checkA === checkB ){
    return func(val);
    
  } else {
    return "inconsistent results."
  }
}

console.log(checkConsistentOutput(addTwo, 3));
```

## Iterators

The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

### .forEach() method

The .forEach() will execute the same code for each element of an array.

```js
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(function(fruitToEat){
  console.log(`I want to eat a ${fruitToEat}.`);
});
/* Output
I want to eat a mango.
I want to eat a papaya.
I want to eat a pineapple.
I want to eat a apple. */
```
fruits.forEach() calls the forEach method on the fruits array. .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function. .forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function. The return value for .forEach() will always be undefined.

We can also pass a callback for .forEach() by using arrow function syntax as shown below.

```js
groceries.forEach(groceryItem => console.log(groceryItem));
```
We can also define functions beforehand to be used a callback function as shown below.

```js
function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);
```
The above example uses a function declaration but you can also use a function expression or arrow function as well.

::: Note
Because developers have different stylistic preferences, it is important to know the different ways how to pass in callback functions as arguments in iterators. 
:::

### .map() method

When .map() is called on an array, it takes an argument of a callback function and returns a new array!  .map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

```js
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich',
 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// New secretMessage array below
const secretMessage = animals.map(animals => animals[0]);

console.log(secretMessage.join(''));


const bigNumbers = [100, 200, 300, 400, 500];

// New smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbers => bigNumbers/100
);

console.log(smallNumbers);

/* Prints
HelloWorld
[ 1, 2, 3, 4, 5 ]*/
```
1. In the code above we used .map() method to create a new array that contains the first character of each string in the animals array, and saved the new array to a const variable named secretMessage.

2. We used the .map() method to divide all the numbers in bigNumbers by 100, and saved the returned values to a variable declared with const called smallNumbers.


### .filter method

.filter() returns a new array. However, .filter() method returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. 
Example;

```js
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
```
 The words array was not mutated, i.e. changed, and shortWords is a new array.
```JavaScript
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumbers => randomNumbers < 250 );

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(favoriteWords => favoriteWords.length > 7);

console.log(longFavoriteWords);

/*Output;
[ 200, 3.14, 7, 13 ]
[ 'nostalgia', 'hyperbole', 'esoteric' ]
```

### .findIndex method

Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
Example;
```JavaScript
const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5
```
In the code above;

* jumbledNums is an array that contains elements that are numbers.
* const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
* The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
* num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

:::note
If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
:::

Example of when a no element in the array satisfies the condition;
```js
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
 
console.log(greaterThan1000); // Output: -1
```
```js
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex(animals => {
  return animals ==='tiger'
});

console.log(foundAnimal);

const startsWithS = animals.findIndex( animals => {
  return animals[0] === 's' 
});

console.log(startsWithS);

// Output 1 and 3 
```

### .reduce method

The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!)

Example 1;

```js
const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117
```

Example 2;

```js
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator, currentValue) {
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10);

console.log(newSum);
/* Output
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26*/
```
### Review for Iterators

* .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
* .map() executes the same code on every element in an array and returns a new array with the updated elements.
* .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
* .findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
* .reduce() iterates through an array and takes the values of the elements and returns a single value.
* All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.

## Objects

### Creating object literals

We use curly braces, {}, to designate an object literal. We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value. A key’s value can be of any data type in the language including functions or other objects. 

Example;
```js
// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};
```

### Accessing object properties

1. **dot notation**

There are two ways we can access an object’s property. The first way is to use the dot notation. We write the object’s name, followed by the dot operator and then the property name (key). If we try to access a property that does not exist on that object, undefined will be returned. If we try to access a property that does not exist on that object, undefined will be returned.

Example;

```js
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
 let crewCount = spaceship.numCrew;

 let planetArray = spaceship.flightPath;

 console.log(crewCount);
 console.log(planetArray);

 /* Output:
  5
  [ 'Venus', 'Mars', 'Saturn' ]
 */
```

2. **Bracket notation**

The second way to access a keys value is by using the bracket notation, []. To use bracket notation to access an object’s property, we pass in the property name (key) as a string.

We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions. 

Example; 

```js
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
```
If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.

### Property Assignment

Once we’ve defined an object, we’re not stuck with all the properties we wrote. Objects are mutable meaning we can update them after we create them. We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property. 

One of two things can happen with property assignment:

1. If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
2. If there was no property with that name, a new property will be added to the object.

:::note
Although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.
:::

Example;

```js
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
```
We can delete a property from an object with the delete operator.

Example;

```js
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property
```

### Methods

When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.

```js
const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

```

:::note
With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
:::

```js
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
```
Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses. 

```js
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
```

### Nested Objects

In application code, objects are often nested, an object might have another object as a property which in turn could have a property that’s an array of even more objects.

```js
const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
}; 
```
We can chain operators to access nested properties. We have to pay attention to which operator makes sense to use in each layer. The computer evaluates each expression from left to right.

```js
spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
```
In the code above;

* First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer objects.
* We accessed the back-up object by appending ['back-up'].
* The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'.

### Pass by reference

Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).

```js
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'
```
The function paintIt() permanently changes the color of the spaceship object. But the reassignment of the spaceship variable would not work in the same way.

```js
let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.
```

In the code above;

* We declared this spaceship object with let. This allowed us to reassign it to a new object with identified and 'transport type' properties with no problems.
* When we tried the same thing using a function designed to reassign the object passed into it, the reassignment didn’t stick (even though calling console.log() on the object produced the expected result).
* When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!
* When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value. 