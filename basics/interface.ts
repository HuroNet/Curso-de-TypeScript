interface person {
  name: string;
  code: string | number;
  cell: number;
  description?: string;
  saludos:() => string;
  
  suma():void
}

let usuario: person = {
  name: "Calo",
  code: "01",
  cell: 182,
  description: "hola",
  saludos:()=>{
    //aqui todo pero que cumpla 
    const numero = [2.3,5,23]
    return 'hola mundo' /// mientras esto se cunmpla 
  },
  suma(){
    console.log(23)
  }
};

usuario.code = 50;
let secondUsuario: person = {
  name: "Calo",
  code: "01",
  cell: 182,
  saludos:()=>"hola mundo ",
  suma(){
    console.log("esto es todo")
  }
};
secondUsuario.description = "gts";

for (let value in usuario) {
  console.log(usuario[value]);
  console.log(value);
}
