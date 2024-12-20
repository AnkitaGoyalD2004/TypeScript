const stringEcho = (arg: string) : string => arg // This only work with string

const echo = <T>(arg: T) : T => arg // we make it generic basically it will work with any type

const isObj = <T>(arg : T) : boolean => {
   return(typeof arg === 'object' && !Array.isArray(arg) && arg!= null) 
}

console.log(isObj(true)); // return false
console.log(isObj('Dutt')); // false
console.log(isObj([1,2,3]));// false
console.log(isObj({name: 'Tashu'})); // true
console.log(isObj(null)); // false

const isTrue = <T>(arg : T): {arg : T , is: boolean} => {
   if (Array.isArray(arg) && !arg.length){
      return {arg , is: false}
   }
   if(isObj(arg) && !Object.keys(arg as keyof T).length){
      return {arg , is:false}
   }
   return {arg , is : !!arg}
}

interface BoolCheck<T>{
   value: T ,
   is: boolean,
}

const checkBoolValue = <T>(arg : T): BoolCheck<T> => {
   if (Array.isArray(arg) && !arg.length){
      return {value : arg , is: false}
   }
   if(isObj(arg) && !Object.keys(arg as keyof T).length){
      return {value: arg , is:false}
   }
   return {value :  arg , is : !!arg}
}