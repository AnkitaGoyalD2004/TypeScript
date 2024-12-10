// Type ALIASES
//In TypeScript, type aliases allow you to define a custom name for a type. 
//They are a way to give a meaningful name to a type, making your code more readable and maintainable.

type stringOrNumber = string | number

type stringOrNumberArray = (string | number )[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// interface PostId = stringOrNumber -> this is not correct way

//Literal type
let myName : 'Ankita';
let username : 'Ankita' | 'Kanav' | 'Tashu'
username = 'Tashu'

//functions
const add = (a:number , b:number): number=>{
    return a + b
}

const logMsg = (message : any): void =>{
    console.log(message);
    
}
logMsg('Hello')
logMsg(add(2,3))

let subtract = function(c:number , d :number):number{
    return c -d
}