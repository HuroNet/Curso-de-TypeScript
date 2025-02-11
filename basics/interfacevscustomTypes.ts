//definicion de interface
interface Persona {
    name:string;
    age:number;
}
 
interface Employee extends Persona{
    charge:string;
}

const newEmpleyee: Employee = {
    name:"",
    age:40,
    charge:"",
    
}

//---------------------
//definicion de type
type Persona1 = {
    name:string;
    birthday:number;
} 
// type Employee1 extends Persona1{ //ya no se puede hacer copn type en comparacion 
//     charge:string;
// }

// const newEmpleyee1: Employee1 = {
//     name:"",
//     birthday:40,
//     charge:"",
// }

//ahora
type User ={
    id:string;
}

type Admin =  User & Persona;

// const myAdmin: Admin ={
//     name:""
// }