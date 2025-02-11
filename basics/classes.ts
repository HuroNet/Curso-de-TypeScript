class Animal{
    name: "Perro";
    private age = 10;
    protected identuty ='jkash'

    sayhi(){
        console.log("grr", this.age)
    }

}

class Dog extends Animal{
    type:"Pastor Aleman";
    sayhi(): void {
        this.identuty
    }
}

const myDOg: Dog = new Dog();



const myAnimal:Animal = new Animal();
myAnimal.sayhi();