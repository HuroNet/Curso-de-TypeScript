interface person {
    name: string;
    code: string | number;
    cell: number;
    description?: string;
    saludos:() => string;
    
    suma():void
  }

  //las interfaces solo son descritivas 


class Person2{
    public name:string;

    sayhello(){
        console.log("Grs");
        fetch("...");
    }

}
const personOne: Person2= new Person2();
personOne.sayhello()


interface PetInterface{
    sayHello:() => string;
}

class PetClass {
    sayHello(){
        return "hola"
    }
}

