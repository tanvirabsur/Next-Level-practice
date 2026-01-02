// variable declaration with type annotation
const username: string = "Tanvir";
const age: number = 25;
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