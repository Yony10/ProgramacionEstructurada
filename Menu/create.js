const fs = require('fs');
const fileName = 'estudiantes.json';
const createJSON = () => {
const estudiantes = [
    { id: 1, nombre: 'Yony', edad: 19, carrera: 'Ing. Desarrollo de Software' },
    { id: 2, nombre: 'Alexander', edad: 18, carrera: 'Ing. Civil' },
    { id: 3, nombre: 'Juan', edad: 19, carrera: 'Ing. Desarrollo de Software' }
];
    fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
        if (err) {
            console.error('Error al crear el archivo', err);
        } else {
            console.log('Archivo creado correctamente');
        }
    });
};
createJSON()
module.exports = createJSON;

