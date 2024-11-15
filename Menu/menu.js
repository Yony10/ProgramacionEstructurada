const readline =require('readline')

const createJSON = require('./create')
const addJSON = require('./add')
const readJSON = require('./read')
const modifyJSON= require('./modify')
const deleteJSON = require('./delete')
const countJSON = require('./count')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n---Menu---');
    console.log('1. Crear el archivo JSON con Estudiantes');
    console.log('2. Leer el archivo JSON de Estudiantes');
    console.log('3. Agregar nuevo Estudiante');
    console.log('4. Actualizar informacion de Estudiante');
    console.log('5. Eliminar un estudiante');
    console.log('6. Contar estudiantes');
    console.log('7. Salir');
}

function handleMenuOptions(option) {
    switch (option) {
        case '1':
            createJSON()
            break;
        case '2':
            readJSON()
            break;
        case '3':
            addJSON()
            break;
        case '4':
            modifyJSON()
            break;
        case '5':
            deleteJSON()
            break;
        case '6':
            countJSON()
            break;
        case '7':
            console.log('Saliendo del programa...');
            rl.close();
            return;
        default:
            console.log('Opcion no válida. Intentelo de nuevo');
            break;
    }
    setTimeout(promptMenu, 3000)
}

function promptMenu() {
    showMenu();
    rl.question('Seleccione una opcion:', handleMenuOptions)
}

promptMenu();




