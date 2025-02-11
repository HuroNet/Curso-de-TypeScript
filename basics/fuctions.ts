const sayHi = (name) =>{
    console.log("hola ", name)
}

sayHi("Carlos")

//ahora como sacar provecho a typescript


const response ={
    id:1,
    name:"Carlos",
    charge:"Dev"
}

function show({name, ...other}:{id;name;charge}):number{
    console.log(37, "hola", name)
    return 1
}

show(response);