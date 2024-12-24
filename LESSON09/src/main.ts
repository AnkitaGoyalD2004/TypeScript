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

const assign1 : Assignment = {
   studentId: 'compsci123' , 
   title: "Final Project",
   grade: 0,
}

console.log(updateAssignment(assign1 , {grade : 95}))
const assignGraded : Assignment = updateAssignment(assign1 , {grade : 95})

// /Required and read only

const recordAssignment = (assign : Required<Assignment>): Assignment =>{
   //send to database
   return assign
}

const assignVerified : Readonly<Assignment> = {
   ...assignGraded , verified: true
}

// assignVerified.grade = 88 // we cannot assign it because its readonly

recordAssignment({...assignGraded , verified: true})