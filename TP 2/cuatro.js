console.log("CUARTA PARTE:")

console.log("Ejercicio 1:")
//1. Agregar y Eliminar Elementos
let frutas = ["manzana", "banana", "pera"]

frutas.pop()
frutas.push("sandía")
console.log(frutas)

console.log("\nEjercicio 2:")
// 2. Array Bidimensional
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// for (let index = 0; index < matriz.length; index++) {
//     for (let index2 = 0; index2 < matriz.length; index2++) {
//         let element = matriz[index][index2]
//         if (element === 5){
//             console.log(element)
//         }
//     };
// }
console.log(matriz[1][1])

console.log("\nEjercicio 3:")
// 3. Iterar sobre un Array
for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    console.log(element)   
}

console.log("\nEjercicio 4:")
// 4. Uso de map
const elevarAlCuadrado = function(array){
    const cuadrado = array.map(numero => {
        return numero ** 2
    })
    return cuadrado
}

arrayMap = [1, 2, 3, 4, 5]
console.log(elevarAlCuadrado(arrayMap))

console.log("\nEjercicio 5:")
// 5. Uso de filter
const filtrarMayoresDe = function(array, filtro){
    const numeros = array.filter(num => {
        return num > filtro
})
    return numeros
}

console.log(filtrarMayoresDe(arrayMap, 2))

console.log("\nEjercicio 6:")
// 6. Uso de reduce
const sumarElementos = function(array){
    const suma = array.reduce((total, numeroActual) => {
        return total + numeroActual
    }, 0)
    return suma
}

console.log(sumarElementos(arrayMap))

console.log("\nEjercicio 7:")
// 7. Uso de some
const mayorQue10 = function(numeros){
    const array = numeros.some(num => {
        return num > 10
    })
    return array
}

console.log(mayorQue10(arrayMap))

console.log("\nEjercicio 8:")
// 8. Uso de every
const todosPositivos = function(array){
    const todos = array.every(num => {
        return num > 0
    })
    return todos
}

console.log(todosPositivos(arrayMap))


console.log("\nEjercicio 9:")
// 9. Uso de find
const personas = [
    persona1 = {
        nombre: "Juan",
        edad: 29
    },
    persona2 = {
        nombre:"Pepe",
        edad:21
    },
    persona3 = {
        nombre:"Maria",
        edad:30
    },
    persona4 = {
        nombre:"Arturo",
        edad:42
    },
    persona5 = {
        nombre:"Francisco",
        edad:84
    }
]

const encontrar = function(personas){
    const persona = personas.find(p => {
        return p.edad > 30
    })
    return persona
}

// const encontrarPersona = personas.find((element) => element.edad > 30)

console.log(encontrar(personas))

console.log("\nEjercicio 10:")
// 10. Uso de sort
const ordenar = function(array){
    return array.sort()
}

palabras = ["manzana", "teclado", "mouse", "hipopotamo", "banana", "pera", "computadora", "arreglo", "palabras", "consola", "ordenar"]

console.log(ordenar(palabras))