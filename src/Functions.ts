//Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string| number)[]

type name = { 
    name: string , 
    active?: boolean , // after putting a ? now its optional we can or cannot define the active
    albums : (string | number) []
}