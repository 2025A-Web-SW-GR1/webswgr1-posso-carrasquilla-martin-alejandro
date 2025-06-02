const fs = require('fs').promises;

async function concatenarFechaConAsyncAwait() {
    try {
        const data = await fs.readFile('./a.txt', 'utf8');

        const fechaActual = new Date().toString();
        const nuevoContenido = data + ' aysnc/await:\t' + fechaActual;

        await fs.writeFile('./a.txt', nuevoContenido, 'utf8');

        console.log('Archivo actualizado correctamente con (async/await).');
    } catch (err) {
        console.error('Error al procesar el archivo:', err);
    }
}

concatenarFechaConAsyncAwait();