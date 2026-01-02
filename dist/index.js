"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// variable declaration with type annotation
const username = "Tanvir";
// const age: number = 25;
const isStudent = true;
// function with typed parameters and return type
function greetingFriend(name) {
    return `Hello, ${name}!`;
}
console.log(greetingFriend(username));
const person = {
    name: "Alice",
    age: 30,
    studentId: "S12345"
};
// arry declaration with type annotation
const arr = [1, 2, 3, 4, 5];
//  you can Also define arry like this 
const arr2 = [6, 7, 8, 9, 10];
//  arry destructuring with type annotation
const arr3 = ['apple', 'banana', 'cherry'];
const [first, second, third] = arr3;
//  object destructuring with type annotation
const person2 = {
    name: "Alice",
    age: 30
};
const { name, age } = person2;
console.log(name, age);
const person3 = {
    name: "Alice",
    age: 30
};
console.log(person3.name, person3.age);
const userId = "12345";
const productId = 12345;
const student = {
    name: "Alice",
    age: 30,
    studentId: "S12345"
};
console.log(student.name, student.age, student.studentId);
const point = [10, 20];
//# sourceMappingURL=index.js.map