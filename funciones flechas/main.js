const calcular = (n1,n2) => {//camilita<3
    const resultado = n1 * n2
    return resultado
}
const mostrar = () => {
    const dato1 = document.getElementById("dato1").value
    const dato2 = document.getElementById("dato2").value
    const respuesta = calcular(dato1,dato2)
    document.getElementById("h1").textContent = respuesta
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)