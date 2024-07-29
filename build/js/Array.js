"use strict";
let stringArr = ['one', 'hey', 'tashu'];
let guitar = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true]; // union type
stringArr[0] = "Dishu";
guitar[0] = 1987;
guitar.unshift(687435);
console.log(guitar);
// stringArr = guitar this will occur a problem but vice - versa will work
guitar = stringArr;
console.log(guitar);
let test = [];
let bands = [];
bands.push('Van Halen');
//tuple
let myTuple = ["Dave", 456, true];
// tuple is more strict than Array because in this order matters
let mixed = ['Ankita', 67, true];
// myTuple = mixed this is wrong but vice versa is correct
//++++++++++++++++++++  OBJECTS   +++++++++++++++++
let myObj;
myObj = [];
myObj = bands;
const exampleObj = {
    prop1: "Dishu",
    prop2: true,
};
exampleObj.prop1 = "Tashu"; // we cannot declare anything else rather than a string
let evh = {
    name: 'Eddie',
    active: false,
    albums: [3245, 654, 'ou876']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ["I", "II", "IV"]
};
evh = jp; // because they both are of a guitarist type
// evh.years = 69  //this will give me an error
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
