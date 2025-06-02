const fs = require('fs');

const ruta = './a.txt'

function concatenarFechaConThenCatch(rutaArchivo) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(rutaArchivo, 'utf8', 
                (errorLectura, contenido) => {
                    if(errorLectura){
                        reject(errorLectura);
                    }else{
                        resolve(contenido);
                    }
                })
        }
    ) 
}


concatenarFechaConThenCatch(ruta)
    .then((contenido) => {
        const fechaActual = new Date().toString();
        const nuevoContenido = contenido + ' then/catch:\t' + fechaActual;
        return require('fs').promises.writeFile(ruta, nuevoContenido, 'utf8');
    })
    .then(() => {
        console.log('Archivo actualizado correctamente con promesas (then/catch).');
    })
    .catch((error) => {
        console.error('Error al procesar el archivo:', error);
    });
