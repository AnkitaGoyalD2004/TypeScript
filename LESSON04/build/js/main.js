"use strict";
// Type ALIASES
//In TypeScript, type aliases allow you to define a custom name for a type. 
//They are a way to give a meaningful name to a type, making your code more readable and maintainable.
// interface PostId = stringOrNumber -> this is not correct way
//Literal type
let myName;
let username;
username = 'Tashu';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number , b: number) : number
// } 
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 4));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default parameters
const SumAll = (a, b, c = 2) => {
    return a + b + c;
};
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
