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


::: note

Classes cannot extend regular non-constructible objects. If we want to inherit from a regular object we can instead use Object.setPrototypeOf():

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

## Functions





