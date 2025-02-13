//convierte cada cosa en opciona
//son muchisinm

interface Task {
  id: number;
  name: string;
  description: string;
}

function updateTsk(id: string, task: Partial<Task>) {}

const newTask = { name: "calo" };

updateTsk("1", newTask);

//su contra parte  que es Requiered

interface ToDo {
  id?: number;
  name?: string;
}

// const myToDo: Required<ToDo>={}
// en este caso si obke=iga a enviar todoos los datos

// tiopo de dato records que recibe <keys , types> para la creacion de objects
// se crea objectos de manera dinamica

interface CatInfo {
  age: number;
  name: string;
}

type CatName = "moi" | "nina" | "botas";

const cats: Record<CatName, CatInfo> = {///escribir esto obkliga a escribir bien 
  moi: {
    age: 2,
    name: "tittitta",
  },
  nina: {
    age: 2,
    name: "tittitta",
  },
  botas: {
    age: 2,
    name: "tittitta",
  },
};


//otro tipo de utilitis PICK
//propiedas de una interface 
//Pick<T,interface>

interface Todo{
    title:string;
    descriptiom:string;
    author:string;
}

type todoPreview = Pick<Todo,"title"|"author">;//... de todos seleciona estos y nada mas 

const other: todoPreview={author:"ca;p",title:"jsh"}

//otro que es el omit

/// de todops seleciona este 

type TodoOmite = Omit<Todo,"title">;
const todoOmitido: TodoOmite={}

