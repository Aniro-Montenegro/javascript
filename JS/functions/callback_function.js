
function meuIntrumento(instrumento){
    console.log("Antes da chamada")
    instrumento()
    console.log("Depois da chamada")
}

meuIntrumento(()=>{
    console.log("Violao")
})
