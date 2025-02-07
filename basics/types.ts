let edad: number = 19;
let nombre: string = "Carlos";
let isIT: boolean = true;

let skils:Object={};

let fruts: string[]=["manzana","pera"];
let cars:Object[]=[{},{name:"toyota"}];

let cualquier:any ="hola";



// definicion de variables con or
let response5: number | null =5;

// para servicios en la nube que puede dar errores
response5?.toPrecision();
// ? es un operador evalua si es diferente de undefined o nulo



// nueba clase de 
// Type Assertion
// que es?
// es una forma de indicarle al compilador que trate un valor como un tipo específico.
//  Es útil cuando el desarrollador sabe más sobre el tipo de una variable que TypeScript
//   y quiere forzar la interpretación del tipo.

// Type Assertion no realiza ninguna conversión de tipos en tiempo de ejecución;
//  solo afecta la verificación de tipos en tiempo de compilación.

let valor: any = [1, 2, 34, 4];
let longitud: number = (valor as number[]).length; // ✔️ Ahora sí funciona
console.log(longitud); // 4