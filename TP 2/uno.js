console.log("PRIMERA PARTE")
// EJERCICIO 1 Creación de un Objeto Básico
console.log("\nEjercicio 1:")

const libro1 = {
    titulo: "Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    anioDePublicacion: 1895
}

console.log(libro1.titulo, libro1.autor, libro1.anioDePublicacion)

// EJERCICIO 2 Anidación de Objetos
console.log("\nEjercicio 2:")
const direccion = {
    calle: "Belgrano",
    ciudad: "Ciudad Gótica",
    pais: "Belgravia"
}

const estudiante = {
    nombre: "Juan",
    edad: 42,
    direcc: direccion
}

console.log(estudiante.direcc.pais, estudiante.direcc.ciudad, estudiante.direcc.calle)

// EJERCICIO 3 Métodos en Objeto
console.log("\nEjercicio 3:")
const descripcion = function(libro) {
    return("El libro " + libro.titulo + " fue escrito por " + libro.autor)
}

console.log(descripcion(libro1))

// EJERCICIO 4 Iteración sobre Propiedades de un Objeto:
console.log("\nEjercicio 4:")
const producto1 = {
    nombre: "Nombre del producto",
    precio: 22.22,
    disponible: true
}

for (const element in producto1) {
    console.log(element + ":" + producto1[element])
}

// EJERCICIO 5 Actualización de Propiedades
console.log("\nEjercicio 5:")
producto1.precio = 42.42

console.log(producto1)

// EJERCICIO 6 Comprobación de Propiedade
console.log("\nEjercicio 6:")
const tienePropiedad = function(object, cadena) {
    for (const element in object){
        if (element === cadena){
            return true
        }
    }
    return false
}

if (tienePropiedad(producto1, "disponible")){
    console.log("Esa propiedad sí aparece en el objeto.")
} else {
    console.log("Esa propiedad no existe en objeto.")

}

// EJERCICIO 7 Eliminación de Propiedades
console.log("\nEJERCICIO 7:")

console.log(producto1)
delete producto1.disponible
console.log(producto1)

// EJERCICIO 8 Combinar Objetos
console.log("\nEjercicio 8:")
const persona1 = {
    nombre: "Juan",
    apellido: "Gonzalez",
    edad: 42.5,
    numero_favorito: 42
}
const persona2 = {
    nombre: "Atilio",
    apellido: "Perez",
}

let combinar = Object.assign(persona1, persona2)

console.log(combinar)

//EJERCICIO 9 Copiar Objetos
console.log("\nEjercicio 9:")
const estudi = JSON.parse(JSON.stringify(estudiante))

console.log("Se modifica la dirección")
estudi.direcc.calle = "Nueva direccion"

console.log("Original: " + estudiante.direcc.calle)
console.log("Deep copy: " + estudi.direcc.calle)

//EJERCICIO 10 Métodos Getters y Setters
console.log("\nEjercicio 10:")

const getAnio = function(object){
    return object.anioDePublicacion
}
const setAnio = function(object, anio){
    object.anioDePublicacion = anio
}

setAnio(libro1, 1890)
console.log("El nuevo año de publicación es: " + getAnio(libro1))