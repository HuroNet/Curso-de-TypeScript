import { generateId, PI, User } from "./utils.modules";

const myNumber = 10 * PI;

const myUser: User = {id: generateId(),name:"carlos"};

console.log({
    myNumber,
    myUser}
)