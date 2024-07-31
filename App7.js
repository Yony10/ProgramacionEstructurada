let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)
rl.question("Ingrese el texto: ", (texto)=> {
    const textoInvertido = texto.split('').reverse().join('');
    console.log(`El texto invertido es:, ${textoInvertido}`);
    rl.close();
})