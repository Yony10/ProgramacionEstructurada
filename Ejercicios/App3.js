let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese el texto:',(texto)=>{
    const numCaracteres = texto.length
    console.log(`El numero de caracteres del exto es: ${numCaracteres}`)
    process.exit()
})