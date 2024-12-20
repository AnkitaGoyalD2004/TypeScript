"use strict";
const stringEcho = (arg) => arg; // This only work with string
const echo = (arg) => arg; // we make it generic basically it will work with any type
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null);
};
console.log(isObj(true)); // return false
console.log(isObj('Dutt')); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj({ name: 'Tashu' })); // true
console.log(isObj(null)); // false
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
