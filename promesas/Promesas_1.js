function numeroCinco(numero) {
    return new Promise((resolve, reject)=>{
        if (numero==="5") {
            resolve ("El número es 5")
        }else{
            reject ("El número no es 5")
        }
    })
}
//mensaje positivo
numeroCinco("5")
.then(res=>{
    console.log("Mensaje:"+ res);
})
.catch(error=>{
    console.log("Error:"+ error);
})