let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese el texto:', (textoSubcadena)=>{
    const cadena= textoSubcadena.substring(0, 10);
    console.log(`Su texto convertido a subcadena es: ${cadena}`)
    process.exit()
})