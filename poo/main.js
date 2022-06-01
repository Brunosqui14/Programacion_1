//para que el archivo main se puedan importar cosas tiene que ser catalogado como modulo
import Vehiculo from "./vehiculo.js";
import Persona from "./persona.js";

function invocar(){
    let kilometros = 50000
    let marca = 'bruno'
    //crear la instancia de la clase vehiculo
    //al crear la instancia se ejecuta el constructor
    const vehiculo = new Vehiculo(kilometros,marca)
    vehiculo.mostrar_km()

    //creamos la instancia de la clase persona
    const persona = new Persona()
    persona.apellido = 'Perez'
    persona.nombre = 'Juan'
    persona.mostrar_datos()
}

/*const boton = document.getElementById("boton")
boton.addEventListener("click",invocar)*/

//otra forma

document.getElementById("boton").addEventListener("click",invocar)
