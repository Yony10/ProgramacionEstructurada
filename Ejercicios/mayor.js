const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin, // entrada por el teclado
    output: process.stdout  //salida por la consola
})

function maximoDeTres(n1, n2, n3) {
    return Math.max(n1, n2, n3);         //MAth es una clase de matematica que permite utilizar varios metodos
}

rl.question("Ingrese el primer número:",(n1)=>{
    rl.question("Ingrese el segundo número:",(n2)=>{
        rl.question("Ingrese el tercer número:",(n3)=>{

            const num1 = parseFloat(n1);
            const num2 = parseFloat(n2);
            const num3 = parseFloat(n3);

            const numMayor = maximoDeTres(num1, num2, num3)
            console.log(`El numero mayor de ${n1}, ${n2} y ${n3} es: ${numMayor}`);
            rl.close()
        })
    })
})
