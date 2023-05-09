interface Named {
  readonly name: string;
}
interface Greetable extends Named {
  // interface inheritance, can be multiple interfaces inherited by one interface, but only one class can be inherited by one class (no multiple inheritance)
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Vitalii');
user1.greet('Hi there - I am');
