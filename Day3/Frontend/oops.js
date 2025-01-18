//Object Prototype-
    //Prototypes in JavaScript are mechanisms by which objects inherit properties and methods from one another. In JavaScript, prototype is a mechanism by which objects inherit properties and methods from other objects. Every JavaScript object has an internal property called [[Prototype]], which is typically accessed using the .prototype property or Object.getPrototypeOf().

//Think of a prototype as a "blueprint" or "fallback" for objects. If an object does not have a specific property or method, it looks to its prototype for that property or method.

function Animal(name) {
    this.name = name;
}

// Add a method to the prototype
Animal.prototype.speak = function() {
    return `${this.name} makes a noise.`;
};

const cat = new Animal("Whiskers");
console.log(cat.speak()); // Output: "Whiskers makes a noise."

//The speak method is defined on Animal.prototype, not directly on the cat object. This saves memory because all instances share the same method.

//--------------------------------------------------------------------------------------------------

//Factory Method
    //The factory method creates and returns new objects without the use of the new keyword. It's a flexible way to generate objects with encapsulated logic.
    function createPerson(name, age) {
        return {
          name,
          age,
          talk() {
            console.log(`Hi, my name is ${this.name}`);
          },
        };
      }
      
      const person1 = createPerson("Alice", 30);
      const person2 = createPerson("Bob", 25);
      
      person1.talk(); // Hi, my name is Alice

      //Disadvantage:
        //Objects created via a factory method don’t have a shared prototype, leading to increased memory usage.
//-------------------------------------------------------------------------------------------------------

//Constructors?
    //Constructors provide a structured way to create objects with shared prototypes and optimize memory usage. 
    function Person(name, age) {
        this.name = name;
        this.age = age;
      }
      
      Person.prototype.talk = function () {
        console.log(`Hi, my name is ${this.name}`);
      };
      
      const p1 = new Person("Alice", 30);
      const p2 = new Person("Bob", 25);
      
      person1.talk(); // Hi, my name is Alice

      //Benefits of Constructors:
        //Efficient memory usage with shared methods on the prototype.
        //Better structure for inheritance and object creation.
//--------------------------------------------------------------------------------------------------

//new Operator
    //The new operator in JavaScript is used to create an instance of an object or a class.
        function Car(brand) {
            this.brand = brand;
        }
        
        const myCar = new Car("Toyota");
        console.log(myCar.brand); // Output: "Toyota"

        //Benefit:
        //Automates object creation and initialization.
//--------------------------------------------------------------------------------------------------

//Classes
    //Classes in JavaScript are templates for creating objects. 
    class Person {
        constructor(name) {
            this.name = name;
        }
        greet() {
            return `Hello, my name is ${this.name}`;
        }
    }
    
    const per1 = new Person("Alice");
    console.log(person1.greet()); // Output: "Hello, my name is Alice"
    //Benefits:
        // Easy-to-read and structured code.
        // each object has shared prototype copy in memory.
        // Promotes reusability through inheritance.

//--------------------------------------------------------------------------------------------------

//Inheritance with extends and super keyword
    //extends is used to create a subclass that inherits properties and methods from a parent class.
    //super is used to call a parent class's constructor or methods in a subclass.
    class Animal {
        constructor(name) {
            this.name = name;
        }
        eat() {
            return `${this.name} is eating.`;
        }
    }
    
    class Dog extends Animal {
        constructor(name, breed) {
            super(name); // Call the parent class constructor to set `name`
            this.breed = breed;
        }
        bark() {
            return `${this.name}, the ${this.breed}, is barking!`;
        }
    }
    
    // Create an instance of Dog
    const myDog = new Dog("Buddy", "Golden Retriever");
    
    console.log(myDog.eat());  // Output: "Buddy is eating."
    console.log(myDog.bark()); // Output: "Buddy, the Golden Retriever, is barking!"
    