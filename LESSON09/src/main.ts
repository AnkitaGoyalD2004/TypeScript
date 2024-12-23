// Utility Types

// Partial 

interface Assignment {
   studentId : string , 
   title : string,
   grade : number,
   verified? : boolean
}

const updateAssignment = (assign : Assignment , propsToUpdate : Partial<Assignment>): Assignment => {
   return {...assign , ...propsToUpdate}
}