console.log("\nTERCERA PARTE:")
const API = "https://jsonplaceholder.typicode.com/users"
// 1. Consumo de Datos desde una API:
console.log("\nEjercicio 1:")

const obtenerUsuarios = async function(api){
    const peticion = fetch(api)

    const usuarios = peticion.then(resp => resp.json())
    .then(users => users)
        // users.forEach(usuario => {
        //     console.log(usuario) 
        // });
    .catch(console.warn)
    return usuarios
}

obtenerUsuarios(API).then(console.log)
//const usuarios = await obtenerUsuarios(API).then(console.log)
//console.log(usuarios)

// 2. Procesamiento de Datos de una API:
console.log("\nEjercicio 2:")
const imprimirNombresDeUsuarios = function(users){
    users.forEach(user => {
        console.log(user.username)
    })
}


obtenerUsuarios(API).then(imprimirNombresDeUsuarios)
// const imprimirNombresDeUsuarios = function(api){
//     const peticion = fetch(api)

//     peticion.then(resp => resp.json())
//     .then(users => {
//         users.forEach(usuario => {
//             console.log(usuario.name) 
//         });
//     }).catch(console.warn)
// }
// imprimirNombresDeUsuarios(API)

// console.log("\nEjercicio 3:")
// // 3. Autenticación Simulada
// const persona = {
//     username: "Bret",
//     name: "Leanne Graham"
// }

// const autenticarUsuario = function(credencial){
//     const peticion = fetch(API)

//     return peticion.then(resp => resp.json())
//     .then(users =>{
//         users.forEach(usuario =>{
//             if ((credencial.username === usuario.username) && (credencial.name === usuario.name)){
//                 return true
//             }
//         })
//         return false
//     })
// }

// console.log(autenticarUsuario(persona))

// console.log("\nEjercicio 4:")
//4. Transformación de Datos