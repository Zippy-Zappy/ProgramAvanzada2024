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

obtenerUsuarios(API).then(usuarios => {
    usuarios.forEach(user => {
        console.log(user)
    })
    imprimirNombresDeUsuarios(usuarios)
    console.log(autenticarUsuario(persona, usuarios))
    //mapearUsuarios(usuarios)
})
//const usuarios = await obtenerUsuarios(API).then(console.log)
//console.log(usuarios)

// 2. Procesamiento de Datos de una API:
console.log("\nEjercicio 2:")
const imprimirNombresDeUsuarios = function(users){
    users.forEach(user => {
        console.log(user.username)
    })
}


//obtenerUsuarios(API).then(imprimirNombresDeUsuarios)


console.log("\nEjercicio 3:")
//3. Autenticación Simulada
const persona = {
    username: "Bret",
    name: "Leanne Graham"
}

const autenticarUsuario = function(credencial, usuarios){
        usuarios.forEach(user => {
            if ((credencial.username === user.username) && (credencial.name === user.name)){
                return true
            }
            return false
        })
    }

console.log("\nEjercicio 4:")
// 4. Transformación de Datos
const mapearUsuarios = function(array){
    const nuevoArray = [{
        name:

    }]
    array.forEach(users => {
        console.log(users.name, users.email)
    })
}

console.log("\nEjercicio 5:")
// 5. Validación de Formularios:
// const objeto = {
//     name: "Juan",
//     email: "Juan@mail.com",
//     password: ""
// }
// const validarFormulario = function(campo){
//     if 

// }