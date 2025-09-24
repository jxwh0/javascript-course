'use strict';

const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello I am ${this.name}`);
  },
};

person.greet();

const anotherPerson = {
  name: 'Sarah',
};

anotherPerson.greet = person.greet;
anotherPerson.greet();

// detached function
const greetFunction = person.greet;
greetFunction();

const obj = {
  name: 'Object',

  regularMethod: function () {
    console.log('Regular:', this.name);
  },

  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

obj.regularMethod();
obj.arrowMethod();

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

quiz.regularMethod(); // Predict: ?
quiz.arrowMethod(); // Predict: ?

const timer = {
  name: 'Timer',

  // Old approach with self = this
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;

    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },

  // Modern approach with arrow function
  startModern: function () {
    console.log(`${this.name} starting modern...`);

    setTimeout(() => {
      console.log(`${this.name} finished modern`); // this works!
    }, 1500);
  },
};

timer.start(); // Uses self = this approach
timer.startModern(); // Uses arrow function approach
