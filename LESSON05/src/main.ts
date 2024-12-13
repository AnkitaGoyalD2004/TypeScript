type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less soecific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    }
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

//Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

// 10 as string
(10 as unknown) as string

/*
Assertions in TypeScript are necessary because, 
in certain scenarios, the compiler cannot make accurate assumptions about the types of 
variables or expressions due to insufficient information.Assertions provide a way for 
developers to explicitly specify the type or guarantee certain conditions, ensuring that the code is 
understood and behaves as expected. 
*/


//The Dom
const img = document.getElementById('img') as HTMLImageElement 
const myImg = document.getElementById('#img');

img.src
// myImg.src