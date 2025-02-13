const age: number =24;

interface MyInterface<T>{
    field:T;
}

const myValue: MyInterface<number>={
    field:98,
}

class myClass<T>{
    field:T;

    constructor(field:T){
        this.field=field
    }
}
const myObject:myClass<string> = new myClass("mate")

//exameple de la vida real 

interface userResponse{
    id:number;
    name:string;
}

class httpResponse<T>{
    data:T;
    status:number;
    code:number;

    constructor(data:T,status:number,code:number) {
        this.data=data;
        this.status=status;
        this.code=code;
        
    }
}

const fetchUser = ():userResponse =>{
    return {
        id:1,
        name:"kevu"
    }
}

const myUser = fetchUser();
const res= new httpResponse(myUser,200,1);
// console.log(res)


class CRUD<T>{
    private items:T[];
    constructor(items:T[]){
        this.items=items;
    }

    addItem(items:T){
        this.items.push(items);
    }

    removeLastItem(){
        this.items.pop()
    }

    printItem():T[]{
        return this.items
    }
}
const user: userResponse[]=[
    {id:1,name:"calo"},
    {id:1,name:"caloss"},
    {id:1,name:"caloss"},
]

const userCrud: CRUD<userResponse> = new CRUD(user)
userCrud.addItem({id:4,name:"proff"})

console.log(userCrud.printItem())