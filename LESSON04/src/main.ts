// Type ALIASES
//In TypeScript, type aliases allow you to define a custom name for a type. 
//They are a way to give a meaningful name to a type, making your code more readable and maintainable.

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// interface PostId = stringOrNumber -> this is not correct way

//Literal type
let myName: 'Ankita';
let username: 'Ankita' | 'Kanav' | 'Tashu'
username = 'Tashu'

//functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message);

}
logMsg('Hello')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}
type mathFunction = (a: number, d: number) => number

// interface mathFunction {
//     (a: number , b: number) : number
// } 

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 4))

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

//default parameters
const SumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c
}

//Rest Parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev , curr) => prev + curr) 
} 

const createError = (errMsg :string) :never =>{
  throw new Error(errMsg)
}

const infinite = () => {
    let i : number = 1
    while(true){
        i++
        if(i > 100) break
    }
}

const numberOrString = (value : number | string): string =>{
    if (typeof value === 'string') return 'string'
     if (typeof value === 'number') return 'number'
     return createError('This should never happen')
}