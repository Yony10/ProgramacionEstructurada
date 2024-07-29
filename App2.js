let readline = require('readline')

let dato = readline.createInterface(
    process.stdin,
    process.stdout
)

dato.question('Escriba su nombre:',(nombre)=>{
    dato.question('Escriba su apellido:',(apellido)=>{
        console.log(`Bienvenido, ${nombre} ${apellido}`)
        process.exit()
    })
})