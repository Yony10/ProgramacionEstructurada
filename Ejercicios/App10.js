const { join } = require('path')
let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)
rl.question("Ingrese el texto:", (texto)=>{
    const letraCapital = texto
    .split(' ')
    .map(texto => texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase())
    .join(' ')

    console.log(`El resultado del texto con la primera letra capitalizada: ${letraCapital}`);
    rl.close()
})