const fs = require('fs')
const fileName = 'estudiantes.json'

function addJSON() {
    fs.readFile(fileName,'utf8', (err,data)=>{
        if (err) {
            console.error('Error al leer el archivo');
        }

        const estudiantes = JSON.parse(data)
        const nuevoEstudiante={nombre:'Carlos', edad:19,carrera:'Ing. Industrial'}
        estudiantes.push(nuevoEstudiante)
    
        fs.writeFile(fileName,JSON.stringify(estudiantes, null, 2),(err)=>{
            if (err) {
                console.error('Error al escribir en el archivo JSON', err);
            }
            console.log('Nuevo estudiante agregado en el archivo JSON.');
        });
    });
}
module.exports=addJSON;