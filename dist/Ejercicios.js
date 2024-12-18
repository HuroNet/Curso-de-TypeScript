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

// Encontrar el número más grande en un arreglo

const numero_mas_grande = (array) =>{
    array=array.sort((a,b)=>a-b)
    mayor=array[array.length - 1 ]
    return mayor
}
// console.log(numero_mas_grande([1,23,4,5,6]))

// 4. Contar cuántas veces se repite un valor en un arreglo

const contar_veces = (array,valor) =>{
    total = 0
    for(let num of array){
        if(num===valor){
            total+=1
        }
    }
    return { total, valor }; 
}
// Entrada: [1, 2, 3, 1, 2, 1], 1
// console.log(contar_veces([1,2,1,2,3,1],1))
// Salida: 3

// 5. Eliminar duplicados de un arreglo

const eliminar_duplicado = (array) =>{
    let reales=[];
    let valores = [...new Set(array)]
    for(let num of array){
        if(reales.includes(num)){
            console.log("esta");
        }else{
            reales.push(num);
        }
    }
    return valores
}

// Entrada: [1, 2, 2, 3, 3, 4]
// console.log(eliminar_duplicado([1,2,2,1,2,212,2]))
// Salida: [1, 2, 3, 4]



// 6. Verificar si una palabra es un palíndromo
const palindromo = (palabra) => {
    inversa = palabra.split("").reverse().join("");
    if (inversa === palabra){
        return true
    }
    else{
        return false
    } 
}
// Entrada: "madam"
console.log(palindromo("madams"))
// Salida: true

// 7. Reemplazar un valor en un arreglo por otro

const remplazar_valor = (array,pos,valor) =>{
    let map = arra

    for(let i=0;i<array.length;i++){
        if(pos === array[i]){
           array[i]=valor 
        }    
    }
    return array
}

// Entrada: [1, 2, 3, 4], 2, 5
// console.log(remplazar_valor([1,2,3,4,5,6],2,5));
// Salida: [1, 5, 3, 4]

// Sumar los elementos en un objeto de números

const sumar_elementos = () => {
    return 0
}

// Entrada: {a: 1, b: 2, c: 3}

// Salida: 6

