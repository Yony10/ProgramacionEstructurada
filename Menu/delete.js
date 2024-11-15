const fs = require('fs')
const fileName = 'estudiantes.json'

function deleteJSON() {
    fs.readFile(fileName,'utf8', (err,data)=>{
        if (err) {
            console.error('Error al leer el archivo', err);
            return;
        }
        const estudiantes = JSON.parse(data)
        const pocisionAEliminar = 0 ;
    
        if (pocisionAEliminar >=0 && pocisionAEliminar < estudiantes.length) {
            estudiantes.splice(pocisionAEliminar, 1);
    
            fs.writeFile(fileName,JSON.stringify(estudiantes, null, 2), (error)=>{
                if (error) {
                    console.error('Error al escribir el archivo JSON', error);
                    return;
                }
                console.log('Estudiante eliminado');  
            });
        }else{
            console.log('La posicion proporcionada es invalida');
        }
    });
}
module.exports = deleteJSON;