"use strict";
//Type Aliases
//Type Aliases can be used for primitives like string 
//or more complex types such as objects and arrays:
//Literal types 
let myNameIs = 'Ankita';
let username;
username = 'Tashu';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { (a:number , b:number) : number}
let multiply = function (w, e) {
    return w * e;
};
logMsg(multiply(2, 2));
//optional parameters
const addAll = (a, c, d) => {
    if (typeof d !== 'undefined') {
        return a + c + d;
    }
    return a + c;
};
//default param value
const sumAll = (a = 2, c, d = 4) => {
    return a + c + d;
};
logMsg(addAll(2, 3, 5));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
// we cannot write the type and interface with the default value
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, current) => prev + current);
};
logMsg(total(10, 5, 7, 9));
//The never type represents the type of values that never occur. For instance, 
//never is the return type for a function expression or an arrow function expression 
//that always throws an exception or one that never returns. Variables also 
//acquire the type never when narrowed by any type guards that can never be true.
const createError = (errMsg) => {
    throw new Error(errMsg); // it is a never type
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return 'string';
    if (typeof value === "number")
        return 'number';
    return createError('this should never happen');
};
