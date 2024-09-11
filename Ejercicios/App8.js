let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)
rl.question(`Escribe una palabra:`,(palabra)=>{
    const palabra1 = palabra.split("");
    const palabra2 = palabra1.reverse();
    const palabraPalindroma = palabra2.join("")

    if (palabra == palabraPalindroma) {
       console.log("Su palabra si es palindroma") 
    }else{
        console.log("Su palabra no es palindroma")  
    }
    process.exit()
})
