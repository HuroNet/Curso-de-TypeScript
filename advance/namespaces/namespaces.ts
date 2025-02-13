namespace DatabaseEntity{
    export class User{
        constructor(public name:string){
            
        }
    }
    const myUser=new User('Carlos');
    console.log(myUser);
}

