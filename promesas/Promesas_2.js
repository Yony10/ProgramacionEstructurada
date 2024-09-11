function edadPersona(edad) {
    return new Promise((resolve, reject)=>{
        if (edad >= 18) {
            resolve ("Edad válida para acceder al contenido")
        } else {
            reject("Edad insuficiente para acceder al contenido")
        }
    })
}
//Mensaje positivo
edadPersona(18)
.then(res=>{
    console.log("Mensaje:"+ res);
})
.catch(error=>{
    console.log("Error:"+ error);
})