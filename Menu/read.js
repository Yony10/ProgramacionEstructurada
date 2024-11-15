const fs = require('fs');
const fileName = 'estudiantes.json';

const readJSON = () => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo', err);
        } else {
            const estudiantes = JSON.parse(data);
            console.log('Estudiantes:', estudiantes);
        }
    });
};
module.exports = readJSON;
