import Trapecio from "./trapecio.js";

function invocar(){
    const d1 = document.getElementById("inp_1").value;
    const d2 = document.getElementById("inp_2").value;
    const d3 = document.getElementById("inp_3").value;
    const trapecio = new Trapecio(d1,d2,d3)
    trapecio.mostrar_datos()   
}
document.getElementById("boton").addEventListener("click",invocar)
