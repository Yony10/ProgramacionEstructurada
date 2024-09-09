function codigoDescuento(codigo) {
    return new Promise((resolve, reject)=>{
        if (codigo ==="DESCUENTO2024") {
            resolve("Código de descuento válido")
        } else {
            reject("Código de decuento inválido")
        }
    })
}
//Mensaje válido
codigoDescuento("DESCUENTO2024")
.then(res=>{
    console.log("Mensaje:"+ res);
})
.catch(error=>{
    console.log("Error:"+ error)
})