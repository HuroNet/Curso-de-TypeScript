type Person = {
    name:string;
    code:string|number;
    description?:string;
};

const newPrson: Person ={
    code:128,
    name:"calo"
};

type serviceResponse = string | null | number | undefined;

let response: serviceResponse;


type UserCharges = "admin" | "normal" | "superUser";

const myUserType: UserCharges ="superUser";