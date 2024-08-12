const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin, // entrada por el teclado
    output: process.stdout  //salida por la consola
})

function celsiusF(celsius) {
    return (celsius * 9/5) + 32;
}

rl.question("Ingrese la temperatura en grados Celsius:",(respuesta) =>{
    const celsiuss = parseFloat(respuesta);
    const fahrenheit = celsiusF(celsiuss);
    console.log(`${celsiuss}°C es igual a ${fahrenheit}°F`);
    rl.close();
})
