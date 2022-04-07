function calcular(d1,d2){
    const resultado = d1*d2
    return resultado
}
function mostrar(){
    const dato1 = document.querySelector("#inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value
    const respuesta = calcular(dato1,dato2)
    document.getElementById("h_resultado").textContent = respuesta
}