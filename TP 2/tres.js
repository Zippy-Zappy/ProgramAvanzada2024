console.log("\nTERCERA PARTE:")
const API = "https://jsonplaceholder.typicode.com/users"
// 1. Consumo de Datos desde una API:
console.log("\nEjercicio 1:")

const obtenerUsuarios = function(api){
    const peticion = fetch(api)

    peticion.then(resp => resp.json())
    .then(users => {
        users.forEach(usuario => {
            console.log(usuario) 
        });
    }).catch(console.warn)
}

obtenerUsuarios(API)

// 2. Procesamiento de Datos de una API:
console.log("\nEjercicio 2:")
// const imprimirNombresDeUsuarios = function(users){
//     users.forEach(user => {
//         console.log(user.username)
//     })
// }
const imprimirNombresDeUsuarios = function(api){
    const peticion = fetch(api)

    peticion.then(resp => resp.json())
    .then(users => {
        users.forEach(usuario => {
            console.log(usuario.name) 
        });
    }).catch(console.warn)
}
imprimirNombresDeUsuarios(API)

console.log("\nEjercicio 3:")
// 3. Autenticación Simulada
const persona = {
    username: "Bret",
    name: "Leanne Graham"
}

const autenticarUsuario = function(credencial){
    const peticion = fetch(API)

    return peticion.then(resp => resp.json())
    .then(users =>{
        users.forEach(usuario =>{
            if ((credencial.username === usuario.username) && (credencial.name === usuario.name)){
                return true
            }
        })
        return false
    })
}

console.log(autenticarUsuario(persona))

console.log("\nEjercicio 4:")
//4. Transformación de Datos