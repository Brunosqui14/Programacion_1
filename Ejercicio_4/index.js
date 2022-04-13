const calcular = (a,b,c) => {//camilita<3
    const bloque1 = (b*b)-(4*a*c)
    const bloque2a = Math.sqrt(bloque1) + (-b)
    const bloque2b = Math.sqrt(bloque1) - (-b)
    const resultadoA = bloque2a/(2*a)
    const resultadoB = bloque2b/(2*a)
    return 'raiz 1= '+resultadoA+ 'raiz 2= '+resultadoB
}
const mostrar = () => {
    const dato1 = document.getElementById("dato1").value
    const dato2 = document.getElementById("dato2").value
    const dato3 = document.getElementById("dato3").value
    const respuesta = calcular(dato1,dato2,dato3)
    document.getElementById("h1").textContent = respuesta
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)