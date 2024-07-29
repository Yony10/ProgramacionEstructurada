let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese el texto:', (textoMayuscula)=>{
    const mayuscula= textoMayuscula.toUpperCase();
    console.log(`Su texto convertido a mayuscula es: ${mayuscula}`)
    process.exit()
})