const calcular = (leo,bruno,guille) => {
    const grados = parseInt(leo) + parseInt(bruno) + parseInt(guille)
    const si = (grados==180) ? ("Es un triangulo") : ("no es un triangulo")
    return si
}
const mostrar = () => {
    const grado1 = document.getElementById("grado1").value
    const grado2 = document.getElementById("grado2").value
    const grado3 = document.getElementById("grado3").value
    calcular(grado1,grado2,grado3)
    const respuesta = calcular(grado1,grado2,grado3)
    document.getElementById("h1").textContent = respuesta
}
const boton = document.getElementById("Calcular")
boton.addEventListener("click",mostrar)