console.log("\nSEGUNDA PARTE")
// 1. Función Suma
console.log("\nEjercicio 1:")
const suma = function(n1, n2){
    return n1 + n2
}
n1 = 4
n2 = 2

console.log(suma(n1, n2))

// 2. Función que Multiplica
console.log("\nEjercicio 2:")
const multiplicar = function(n1, n2) {
    return n1 * n2
}
n1 = 4
n2 = 2

console.log(multiplicar(n1, n2))

// 3. Función con Parámetro por Defecto
console.log("\nEjercicio 3:")
const saludar = function(nombre = "Invitado"){
    return "Hola, " + nombre
}

console.log(saludar())
// console.log(saludar("Juan"))

//4. Función que Devuelve un Objeto:
console.log("\nEjercicio 4:")
const crearPersona = function(nombre, edad){
    return persona = {
        nombre: nombre,
        edad: edad
    }
}

console.log(crearPersona("Juan", 42))

//5. Función que Modifica un Objeto:
console.log("Ejercicio 5:")
const actualizarEdad = function(persona, nuevaEdad){
    persona.edad = nuevaEdad
}

const Juan = crearPersona("Juan", 42)

actualizarEdad(Juan, 21)
console.log("Modificando...")
console.log(Juan)
// 6. Función Recursiva
console.log("\nEjercicio 6:")
const factorial = function(numero){
    if ((numero === 0) || (numero === 1)){
        return 1
    }
    return numero * factorial(numero - 1)
}

console.log(factorial(5))

// 7. Función con Función Interna
console.log("\nEjercicio 7:")
const despedir = function(){
    const adios = function(){
        return "Adios, User"
    }
    return adios()
}
console.log(despedir())

// 8. Función que Usa Otra Función
console.log("\nEjercicio 8:")
const doble = function(numero = 0){
    return numero * 2
}

const procesarArray = function(array, funcion){
    for (let index = 0; index < array.length; index++) {
        array[index] = funcion(array[index])
        console.log(array[index])
    }
}

arreglo = [2, 4, 6, 8, 10, 12]
console.log("array original: " + arreglo + "\nProcesado:")
procesarArray(arreglo, doble)

//9. Función que Devuelve Otra Función
console.log("\nEjercicio 9:")
const crearMultiplicador = function(x){
    return multiplicar(x, 2)
}
console.log(crearMultiplicador(4))

// 10. Función Anónima
console.log("\nEjercicio 10:")
let anonima = function(n1, n2){
    return n1 + n2 
}

let sumarAnonima = anonima(4, 2)
console.log(sumarAnonima)