// Invertir una cadena
const invertir_cadena = (cadena) => {
  reversa = cadena.split("").reverse().join("");
  return reversa;
};
// console.log(invertir_cadena("hola papus"));


// Sumar números en un arreglo
const sumar_numeros = (array) =>{
    let total= 0
    for(let num of array){
        total=num+total}
    return total
};
// console.log(sumar_numeros([1,2,34,3]))