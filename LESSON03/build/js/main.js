"use strict";
let stringArr = ['one', 'hey', 'Ankita'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Dutt';
stringArr.push("Goyal");
guitars[0] = 1984;
guitars.unshift('jim');
// stringArr = guitars this will give an error
guitars = stringArr;
let test = []; //if we initialize in this way the data type will be any
let bands = [];
bands.push("Ankita");
// TUPLE
let myTuple = ["Ankita", 89, true];
let mixed = ['Tashu', 1, false];
// myTuple = mixed this will give me an error
mixed = myTuple; //this is correct
//OBJECTS
let myObj;
myObj = [];
console.log(typeof (myObj));
myObj = bands;
myObj = {};
const exampleObj1 = {
    prop1: 'Ankita',
    prop2: true,
};
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'extra']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
//ENUMS
// Unlike most TypeScript features , Enums are not a type-level 
//addition to JavaScript but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B); // output will be 3
