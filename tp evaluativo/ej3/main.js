function calcular(dato1,dato2){
    const suma = parseInt(dato1*dato1) + parseInt(dato2*dato2)
    const resultado = Math.sqrt(suma)
    return resultado 
}
function mostrar(){
    const d1 = document.getElementById("d1").value
    const d2 = document.getElementById("d2").value
    const respuesta= calcular(d1,d2)
    document.getElementById("h4").textContent = respuesta;
}