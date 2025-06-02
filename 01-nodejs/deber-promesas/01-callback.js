const fs = require('fs');

function concatenarFechaConCallback() {
    fs.readFile('./a.txt', 'utf8', (errorLeer, contenido) => {
        if (errorLeer) {
            console.error('Error al leer el archivo:', errorLeer);
            return;
        }

        const fechaActual = new Date().toString();
        const nuevoContenido = contenido + ' callback:\t' + fechaActual;

        fs.writeFile('./a.txt', nuevoContenido, 'utf8', (escribirErr) => {
            if (escribirErr) {
                console.error('Error al escribir el archivo:', escribirErr);
            } else {
                console.log('Archivo actualizado correctamente con callbacks');
            }
        });
    });
}

concatenarFechaConCallback();