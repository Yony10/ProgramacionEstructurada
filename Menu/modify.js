const fs = require('fs');
const fileName = 'estudiantes.json';

function modifyJSON(params) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo', err);
            return;
        }
        const estudiantes = JSON.parse(data);
        estudiantes[0].edad = 20;
    
        
        fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
            if (err) {
                console.error('Error al modificar en el archivo JSON', err);
                return;
            }
            console.log('Modificado correctamente.');
        });
    });
}
module.exports=modifyJSON;