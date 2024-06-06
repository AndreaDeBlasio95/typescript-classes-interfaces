//          Interface
// interface are a blueprint for objects, they can be used to define the structure of an object.
// interface are blueprints for classes, they can be used to define the structure of a class.

// NOTE: interfaces can extend other interfaces, as much as you want,
// but a class can inherit from only one class.

//          type and interface
// type - is a custom type that you can create by combining other types
// here type is used to define a function type
// type AddFn = (a: number, b: number) => number;
// AddFn is a type that defines a function that takes two arguments of
// type number and returns a value of type number.

// this interface is equivalent to the type above
interface AddFn {
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
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;
let user2: Greetable;

user1 = {
  name: "Andrea",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user2 = {
  greet(phrase: string) {
    console.log(phrase);
  },
};

// user1.name = "Andrea"; // error, name is readonly
user1.greet("Hello there - I am");
user2.greet("");
