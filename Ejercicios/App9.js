let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("Ingrese la palabra:", (palabra)=>{
    const vocales = 'aeiouAEIOU';

    let totalVocales = 0;
    for (let i = 0; i < palabra.length; i++) {
       if (vocales.includes(palabra[i])) {
        totalVocales++;
        console.log(`El total de vocales en la palabra ingreasada es de: ${totalVocales}`);
        rl.close()
       }
    }
})