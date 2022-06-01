//nombre de la clase con mayuscula
export default class Vehiculo {

    //aca irian los atributos
    //el constructor siempre se va a ejecutar primero
    constructor(km,marca){
        this.marca = marca
        this.kilometros = km
    }
    
    //no ponemos funcion porque es un metodo
    mostrar_km(){
        alert(this.kilometros)
    }

}