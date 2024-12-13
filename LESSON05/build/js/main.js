"use strict";
// convert to more or less soecific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10;
/*
Assertions in TypeScript are necessary because,
in certain scenarios, the compiler cannot make accurate assumptions about the types of
variables or expressions due to insufficient information.Assertions provide a way for
developers to explicitly specify the type or guarantee certain conditions, ensuring that the code is
understood and behaves as expected.
*/
//The Dom
const img = document.getElementById('img');
const myImg = document.getElementById('#img');
img.src;
// myImg.src
