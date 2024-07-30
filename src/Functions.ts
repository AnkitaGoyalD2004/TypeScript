//Type Aliases
//Type Aliases can be used for primitives like string 
//or more complex types such as objects and arrays:

//Interfaces are similar to type aliases, except they only apply to object types.


type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[]

type name = {
    name: string,
    active?: boolean, // after putting a ? now its optional we can or cannot define the active
    albums: (string | number)[]
}

type userId = stringOrNumber

//Literal types 
let myNameIs = 'Ankita'
let username: "Ankita" | "Dishu" | "Tashu"

username = 'Tashu'

//functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}
logMsg("hello");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
    return c - d;
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction { (a:number , b:number) : number}

let multiply: mathFunction = function (w, e) {
    return w * e
}
logMsg(multiply(2, 2))

//optional parameters
const addAll = (a: number, c: number, d?: number): number => {
    if (typeof d !== 'undefined') {
        return a + c + d;
    }
    return a + c;
}

//default param value
const sumAll = (a: number = 2, c: number, d: number = 4): number => {
    return a + c + d;
}
logMsg(addAll(2,3,5))
logMsg(addAll(2,3));
logMsg(sumAll(undefined , 3))

// we cannot write the type and interface with the default value

//Rest Parameters
const total = (...nums: number[]) : number =>{
    return nums.reduce((prev , current) => prev+ current)
}
logMsg(total(10,5,7,9))

//The never type represents the type of values that never occur. For instance, 
//never is the return type for a function expression or an arrow function expression 
//that always throws an exception or one that never returns. Variables also 
//acquire the type never when narrowed by any type guards that can never be true.
const createError = (errMsg : string) => {
    throw new Error(errMsg) // it is a never type
}

const infinite = () => {
    let i : number = 1
    while(true){
        i++
        if(i>100) break
    }
}
// custom type guard
const isNumber = (value:any) : boolean =>{
    return typeof value === 'number' 
    ? true : false
}

//use of never type
const numberOrString = (value : number | string): string =>{
    if(typeof value === "string") return 'string' 
    if(isNumber(value)) return 'number' 
    return createError('this should never happen')
}