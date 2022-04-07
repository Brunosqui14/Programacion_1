function calcular(d1){
    const radio = Math.pow(d1,2);
    const resultado = Math.PI * radio;
    return resultado;  
}
function mostrar(){
    const dato1 = document.getElementById("inp_radio").value;
    const respuesta = calcular(dato1);
    document.getElementById("h1").textContent = respuesta;
}