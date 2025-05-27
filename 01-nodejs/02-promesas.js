const { error } = require('console');
const fs = require('fs'); // importar la libreria fs con promesas

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            if(numero % 2 === 0){ 
                resolve(numero); // Return
            } else {
                reject("No es par"); // Throw
            }
        }
    )

    return miPrimerPromesa; // Return
}

function promesasElevarAlCuadrado(numero){
    return new Promise( res => res(numero * numero)); // Return
}

promesaEsPar(4)
    .then(
        (respuestaEsPar) => {
            console.log("Es par:", respuestaEsPar);
            return promesasElevarAlCuadrado(respuestaEsPar);
        }
    )
    .then( //try
        (respuestaElevarCuadrado) => {
            console.log("El cuadrado es:", respuestaElevarCuadrado);
        }
    )
    .catch(
        (respuestaError) => {
            console.log("No es par: ", respuestaError)
        }
    )


function leerArchivoPromesa(nombreArchivo){
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,  //path
                'utf8', //codificacion
                (errorLectura, contenido) => { // callbacks
                    if(errorLectura){
                        reject(errorLectura); // Throw
                    }else{
                        resolve(contenido)
                    }
                }
            )
        }
    );
}

leerArchivoPromesa('./a.txt')
    .then(
        (contenido) => {
            console.log('Contenido: ', contenido)
        }
    )
    .catch(
        (errorLectura) => {
            console.error("ERROR: ", errorLectura);
        }
    )

// const correrLogicaPromesas = async () => {} ESTO ES LO MISMO QUE LO DE ABAJO
// ASYNC AWAIT
// REGLAS:
// 1. Debemos estar dentro de una funcion nombrada, anonima o fat arrow
// 2. Debemos agregar la palabra async antes de la declaracion de la funcion
// 3. Agregar 'AWAIT' dentro de un bloque try/catch a nuestra promesa

async function correrLogicaPromesas(){
    try{
        const respuestaLeerArchivo = await leerArchivoPromesa('./a.txt');
        console.log('1. Respuesta archivo: ', respuestaLeerArchivo);
        await leerArchivoPromesa('./a2324.txt');
    } catch(error){
        console.log("2. ERROR ", error)
    }
}

correrLogicaPromesas().then().catch() // async await transforma a la fucion en una promesa


