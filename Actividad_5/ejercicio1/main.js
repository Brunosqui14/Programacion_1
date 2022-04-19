function calcular(guille) {
    const one = (guille * 1.8) + 32
    return one
}
function mostrar() {
    const dato = document.getElementById("juas").value;
    const respuesta = calcular(dato);
    document.getElementById("h1").textContent = respuesta;
}