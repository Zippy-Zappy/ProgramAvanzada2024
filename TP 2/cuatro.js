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