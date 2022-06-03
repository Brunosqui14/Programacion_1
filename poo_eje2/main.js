import Batman from "./batman.js"
function batiman(){
    const batman = new Batman()
    batman.mostrar()
}
document.getElementById("boton").addEventListener("click",batiman)
