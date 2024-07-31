let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("Ingrese el texto:", (texto)=>{
    const palabras = texto.trim().split(/\s+/);
    const totalPalabras = palabras.length;

    console.log(`El total de palabras en el texto ingresado es de: ${totalPalabras}`);
    rl.close()
})