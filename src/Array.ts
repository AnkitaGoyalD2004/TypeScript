let stringArr = ['one' , 'hey' , 'tashu'];
let guitar = ['Strat' , 'Les Paul' , 5150];
let mixedData = ['EVH' , 1984  , true] // union type

stringArr[0] = "Dishu"

guitar[0] = 1987
guitar.unshift(687435)
console.log(guitar)

// stringArr = guitar this will occur a problem but vice - versa will work
guitar = stringArr
console.log(guitar);

let test = []
let bands : string[] = []
bands.push('Van Halen')

//tuple
let myTuple : [string , number , boolean] = ["Dave" ,456 ,  true  ]
// tuple is more strict than Array because in this order matters
let mixed = ['Ankita' , 67 , true]

// myTuple = mixed this is wrong but vice versa is correct




//++++++++++++++++++++  OBJECTS   +++++++++++++++++
let myObj:  object
myObj = []
myObj = bands;

const exampleObj = {
    prop1 : "Dishu",
    prop2: true,
}
exampleObj.prop1 = "Tashu" // we cannot declare anything else rather than a string

type Guitarist = { // instead of type we can use interface as like interface Guitarist {} //in this there is no equal to sign
    name: string , 
    active?: boolean , // after putting a ? now its optional we can or cannot define the active
    albums : (string | number) []
}

let evh : Guitarist = {
    name: 'Eddie' , 
    active: false ,
    albums : [3245 , 654 , 'ou876']
}

let jp : Guitarist = {
    name: 'Jimmy' , 
    active : true ,
    albums : ["I" , "II" , "IV"]
}

evh = jp // because they both are of a guitarist type

// evh.years = 69  //this will give me an error

const greetGuitarist = (guitarist : Guitarist) =>{
    return `Hello ${guitarist.name}!`;
}

console.log(greetGuitarist(jp))
//Enums

enum Grade {
    U,
    D,
    C,
    B,
    A,
}
console.log(Grade.U)