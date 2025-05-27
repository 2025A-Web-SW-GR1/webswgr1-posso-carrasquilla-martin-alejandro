// Estamos en el LADO DEL SERVIDOR
const fs = require('fs'); // importar la libreria fs
console.log("Primero");

fs.readFile(
    './a.txt',  //path
    'utf8', //codificacion
    (errorLectura, contenido) => { // callbacks
        if(errorLectura){
            console.error("ERROR lectura 1" );
        }else{
            console.log('TERCERO 1.1', contenido)
        }
    }
)

fs.readFile(
    './a.txt',  //path
    'utf8', //codificacion
    (errorLectura, contenido) => {
        if(errorLectura){
            console.error("ERROR lectura 1" );
        }else{
            console.log('TERCERO 1.2', contenido)
        }
    }
)

console.log("Segundo");