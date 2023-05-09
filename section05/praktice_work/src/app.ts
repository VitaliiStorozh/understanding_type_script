// type AddFn = (a: number, b: number) => number; // type alias
interface AddFn {
  // function type
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // optional property
}

interface Greetable extends Named {
  // interface inheritance, can be multiple interfaces inherited by one interface, but only one class can be inherited by one class (no multiple inheritance)
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else console.log('Hi!');
  }
}

let user1: Greetable;

user1 = new Person('Vitalii');
user1.greet('Hi there - I am');
