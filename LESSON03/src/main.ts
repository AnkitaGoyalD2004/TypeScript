let stringArr = ['one' , 'hey' , 'Ankita']
let guitars = ['Strat' , 'Les Paul' , 5150]
let mixedData = ['EVH' , 1984 , true]

stringArr[0] = 'Dutt'
stringArr.push("Goyal")

guitars[0] = 1984
guitars.unshift('jim');

// stringArr = guitars this will give an error
guitars = stringArr

let test = []; //if we initialize in this way the data type will be any
let bands : string[] = []
bands.push("Ankita")

// TUPLE
let myTuple : [string , number , boolean] = ["Ankita" , 89 , true];
let mixed = ['Tashu' , 1 , false]

// myTuple = mixed this will give me an error
mixed = myTuple //this is correct

//OBJECTS
let myObj : object
myObj = []
console.log(typeof(myObj));
myObj = bands;
myObj = {}

const exampleObj1 = {
    prop1 : 'Ankita',
    prop2 : true,
}

//instead of type we can use interface

// interface Guitarist {
//     name: string ,
//     active?: boolean,// ? this represent the optional
//     albums: (string | number)[]
// }

type Guitarist = {
    name: string ,
    active?: boolean,// ? this represent the optional
    albums: (string | number)[]
}

let evh : Guitarist = {
    name: 'Eddie',
    active: false,
    albums:[1984, 5150,'extra']
}

const greetGuitarist = (guitarist : Guitarist) => {
    return `Hello ${guitarist.name}!`
}

//ENUMS
// Unlike most TypeScript features , Enums are not a type-level 
//addition to JavaScript but something added to the language and runtime.

enum Grade{
        U,
        D,
        C,
        B,
        A,
}
console.log(Grade.B); // output will be 3

