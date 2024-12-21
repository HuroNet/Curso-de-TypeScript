
// Sumar los elementos en un objeto de números

const sumar_elementos = (objeto) => {
    // const total = Object.values(objeto).reduce((acc,valores) => acc + valores, 0);//primera 
    let total=0;
    // for(let value in objeto){
    //     total = total + objeto[value]
    // }

    //object.keys
    
    // const keys = Object.keys(objeto);
    // for(let i=0;i <  keys.length;i++){
    //     total += objeto[keys[i]]
    // }

    // //foreach
    // Object.values(objeto).forEach(value => {
    //     total+=value       
    // });


    // for
    // for(let value of Object.values(objeto)){
    //     total+=value
    // }

    return total
}

// Entrada: {a: 1, b: 2, c: 3}
// console.log(sumar_elementos({a: 1, b: 2, c: 3}))
// Salida: 6



// 1. Invertir una cadena
const invertir_cadena = (cadena) =>{
    const resultado = cadena.split('').reverse().join('')
    return resultado
}

// Entrada: "hola"
// console.log(invertir_cadena("hola mundo"))
// Salida: "aloh"

// 3. Encontrar el número más grande en un arreglo
const numero_mas_grande = (array) =>{
    const ordenar = array.sort((a,b)=>a-b);
    const resultado = ordenar[ordenar.length - 1]

    return resultado
}
// Entrada: [1, 3, 7, 0, 5]
// console.log(numero_mas_grande([1, 3, 7, 0, 5]))
// Salida: 7

// 4. Contar cuántas veces se repite un valor en un arreglo
const repeticiones_valor = (array,num) => {
    let resultado = 0
    // for (let value of array){
    //     if(value===num){
    //         resultado += 1;
    //     }
    // }
    // array.forEach(values => {
    //     values === num?
    //     resultado+=1: 
    //     null
    // });
    // for (let i=0;i<array.length;i++){
    //     console.log(array[i])
    // }
    
    // resultado = array.reduce((count, value)=>
    // (value===num? count + 1: count),0)


    return resultado
}
 
// Entrada: [1, 2, 3, 1, 2, 1], 1
// console.log(repeticiones_valor([1,2,3,1,3,1],1))
// Salida: 3

// 5. Eliminar duplicados de un arreglo
const eliminar_duplicados = (array) =>{
    // const resultado = [...new Set(array)]
    const resultado = [];
    // for(let valor of array){
    //     if(resultado.includes(valor)){
    //         console.log('si esta')
    //     }
    //     else{
    //         resultado.push(valor)
    //     }
    // }
    
    // array.forEach(element => {
    //     resultado.includes(element)?
    //     null:
    //     resultado.push(element)
    // });

 
}
// Entrada: [1, 2, 2, 3, 3, 4]
// console.log(eliminar_duplicados([1, 2, 2, 3, 3, 4]))
// Salida: [1, 2, 3, 4]

// 6. Verificar si una palabra es un palíndromo
const palindro = (palabra) =>{
    const minusculas = palabra.toLowerCase().split('')
    if(minusculas === minusculas.reverse() ){
        return true
    }else{
        return false
    }
}
// Entrada: "madam"
// console.log(palindro("madaM"))
// Salida: true

// 7. Reemplazar un valor en un arreglo por otro
const remplazar = (array, pos, valor) => {
    if (pos >= 0 && pos < array.length) {
        array[pos] = valor;
    }
    return array;
}

// Entrada: [1, 2, 3, 4], 2, 5
// console.log(remplazar([1, 2, 3, 4], 2, 5))
// Salida: [1, 5, 3, 4]

// 8. Sumar los elementos en un objeto de números
const suma_elementos = (objeto) => {
    const  valores = Object.values(objeto);
    let total=0
    // for(let valor of valores){
    //      total += valor
    // }
    // valores.forEach(element => {
    //     total += element        
    // });

    // total =  valores.reduce((acc,elementos)=>acc+elementos)

    return total
}
// Entrada: {a: 1, b: 2, c: 3}
// console.log(suma_elementos({a: 1, b: 2, c: 3}))
// Salida: 6x

// 9. Encontrar el índice de un valor en un arreglo

const index_array = (array,target) => {
    // return array.indexOf(target)
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target){
            return i
        }
    }
}

// Entrada: [10, 20, 30, 40], 30
// console.log(index_array([10, 20, 30, 40], 30))
// Salida: 2

// 10. Comprobar si un número es primo
const es_primo = (num) => {
    if(num <=1){
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Si el número es divisible por cualquier número en el rango, no es primo
        }
    }
    return true

}
// Entrada: 7
// console.log(es_primo(8))
// Salida: true

// 11. Contar la cantidad de caracteres en una cadena
const contar_caracteres = (caracteres) =>{
    let total=0
    const arrayCaracteres = caracteres.split('')
    return caracteres.length
}
// Entrada: "javascript"
// console.log(contar_caracteres("javaScript"))
// Salida: 10

// 12. Fibonacci Recursivo
const fibo = (num) =>{
    let secuencia = [0,1];
    for(let i=2;i<num;i++){
        secuencia.push(secuencia[i - 1] + secuencia[i - 2]); 
    }
    return secuencia
}
// Entrada: 5
// console.log(fibo(5))
// Salida: 5?

// 16. Verificar si un número es perfecto
const numero_perfecto = (numero) =>{
    let total = 0
    for (let i=0;i<numero;i++){
        if(numero%i===0 ){
            total+=i;
        }
    }

    return total===numero
}

// Entrada: 6
// console.log(numero_perfecto(6))
// Salida: true

// 17. Convertir una cadena a un número entero
const cadena_a_numero = (cadena) =>{
    // return Number(cadena)
    return parseInt(cadena)
}
// Entrada: "123"
// console.log(cadena_a_numero("123"))
// Salida: 123

// 18. Crear un arreglo con los múltiplos de un número
const multiplos = (numero,limite)=>{
    let resultado = []
    // for(let i=1;i<limite +1;i++){
    //     resultado.push(numero*i);
    //     // console.log(i)
    // }
    // return resultado

    //while
    let i=1;
    while (i <= limite){
        resultado.push(numero*i);
        i++
    }
    return resultado
}
// Entrada: 3, 5
// console.log(multiplos(3,5))
// Salida: [3, 6, 9, 12, 15]

// 19. Contar las vocales en una cadena
const contar_vocales = (cadena)=>{
    // const vocales = ["a","e","i","o","u"];
    // const arrayPalabra = cadena.toLowerCase().split('');
    let resultado=0

    // arrayPalabra.forEach(element => {
    //     if(vocales.includes(element)){
    //         resultado+=1
    //     }
    // });
    // for (let i=0;i<arrayPalabra.length;i++){
    //     if(vocales.includes(arrayPalabra[i])){
    //         resultado+=1
    //     }
    // }


    return resultado
}

// Entrada: "javascript"
// console.log(contar_vocales("javascript"))
// Salida: 3

//objetos

const objetos = (objeto) =>{
  const resultado = {}
  objeto.forEach(element => {
    if (!resultado[element.category]) {
        resultado[element.category]={}
    }
    if (resultado[element.category][element.name]) {
        resultado[element.category][element.name] += element.quantity;
    } 
    else {
        resultado[element.category][element.name] = element.quantity;
    }
  });
  return resultado;
};

// console.log(objetos([
//     { name: 'doll', quantity: 5, category: 'toys' },
//     { name: 'car', quantity: 3, category: 'toys' },
//     { name: 'ball', quantity: 2, category: 'sports' },
//     { name: 'car', quantity: 2, category: 'toys' },
//     { name: 'racket', quantity: 4, category: 'sports' }
//   ]))

// 20. Filtrar los números pares de un arreglo
const numerosPares = (array) =>{
    let numPares = []
    array.forEach(element => {
        if (element %2 === 0){
            numPares.push(element)
        }
    });
    return numPares
}
// Entrada: [1, 2, 3, 4, 5, 6]
// console.log(numerosPares([1, 2, 3, 4, 5, 6]))
// Salida: [2, 4, 6]

// 22. Obtener los elementos comunes entre dos arreglos
const elementosComunes = (array1,array2) =>{
    const comunes=[]
    for(let val1 of array1){
        for (let val2 of array2){
            if (val1 === val2){
                comunes.push(val1)
            }
        }
    }
    const comunesFilter = array1.filter(element=>array2.includes(element))
    return comunesFilter
}
// Entrada: [1, 2, 3, 4], [3, 4, 5, 6]
// console.log(elementosComunes([1, 2, 3, 4], [3, 4, 5, 6]))
// Salida: [3, 4]

// 23. Contar cuántas veces aparece un carácter en una cadena
const contarVeces = (cadena,letra) =>{
    const arrayCadena = cadena.toLowerCase().split('');
    const filtraLetra = arrayCadena.filter(element => element === letra)
    console.log(filtraLetra)

    return 0
}
// Entrada: "banana", "a"
// console.log(contarVeces("banana", "a"))
// Salida: 3

// 27. Crear un arreglo con los primeros n números de Fibonacci
const fibonacciSerie = (number) =>{
    const inicio = [0,1]
    for(let i=2;i<number;i++){
        inicio[i] = inicio[i-1]+inicio[i-2]
    }

    return inicio
}

// Entrada: 5
// console.log(fibonacciSerie(5))
// // Salida: [0, 1, 1, 2, 3]

// 29. Revertir el orden de los elementos en un arreglo
const revertirArreglo = (array) =>{
    const result = array.sort((a,b) => b-a)
    const result2 = array.reverse()
    return result
}
// Entrada: [1, 2, 3, 4]
// console.log(revertirArreglo([1,2,3,4]))
// Salida: [4, 3, 2, 1]

// 33. Crear un arreglo con los divisores de un número
const divisores = (numero) =>{
    let resultado=[]
    for(let i=0;i<numero+1;i++){
        if(numero % i === 0){
            resultado.push(i)
        }
    }
    return resultado
}

// Entrada: 6
// console.log(divisores(6))
// Salida: [1, 2, 3, 6]

// 37. Encontrar el valor máximo en un objeto con claves numéricas
const valorMaxObject = (object) =>{
    let maximo = 0
    Object.values(object).forEach(element=>{
        // console.log(element)
        if(element>maximo){
            console.log(maximo)
            maximo=element
        }
    })
    return maximo
} 
// Entrada: {1: 5, 2: 10, 3: 2}
// console.log(valorMaxObject({1: 5, 2: 11 ,3: 20}))
// Salida: 10

// 41. Obtener la longitud de la palabra más larga en un arreglo
const logPalabra = (array) =>{
    const maximo = 0
    for(let i=0;i<array.length;i++){
        console.log(array[i])
        if(array[i].length > maximo){
            maximo=array[i].length
        }
    }
    return maximo
}
// Entrada: ["apple", "banana", "kiwi"]
console.log(logPalabra(["apple", "banana", "kiwi"]))
// Salida: 6