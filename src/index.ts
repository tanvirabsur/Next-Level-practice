// variable declaration with type annotation
const username: string = "Tanvir";
// const age: number = 25;
const isStudent: boolean = true;

// function with typed parameters and return type

function greetingFriend(name: string): string{
    return `Hello, ${name}!`;
}

console.log(greetingFriend(username));

// interface definition


// interface Person {
//     name: string;
//     age: number;
    
// }

// interface Person {
//     studentId: string;
// }

// const person : Person = {
//     name: "Alice",
//     age : 30,
//     studentId: "S12345"
// }

//  second why of interface merging

interface Person {
    name: string;
    age: number;
    
}

interface Student extends Person {
    studentId: string;
}

const person : Student = {
    name: "Alice",
    age : 30,
    studentId: "S12345"
}

// arry declaration with type annotation

const arr : number[] = [1,2,3,4,5];

//  you can Also define arry like this 

const arr2 : Array<number> = [6,7,8,9,10];

//  arry destructuring with type annotation

const arr3 : Array<string> = ['apple', 'banana', 'cherry'];

const [first, second, third]  = arr3;

//  object destructuring with type annotation

const person2 : {name: string, age: number} = {
    name: "Alice",
    age: 30
}

const {name, age} = person2;

console.log(name, age);


//  type alias

type Person2 = {
    name: string;
    age: number;
}

const person3 : Person2 = {
    name: "Alice",
    age: 30
}

console.log(person3.name, person3.age);


//  type alias with union type

type ID = string | number;

const userId : ID = "12345";

const productId : ID = 12345;


//  type alias with intersection type

type Person3 = {
    name: string;
    age: number;
}

type Student2 = {
    studentId: string;
}

type Student3 = Person3 & Student2;

const student : Student3 = {
    name: "Alice",
    age: 30,
    studentId: "S12345"
}

console.log(student.name, student.age, student.studentId);


//  type alias with tuple

type Point = [number, number];

const point: Point = [10, 20];
