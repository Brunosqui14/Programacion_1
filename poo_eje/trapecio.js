export default class Trapecio{
    
    constructor(d1,d2,d3){
        this.d1 = d1
        this.d2 = d2
        this.d3 = d3
    }
    
    mostrar_datos(){
        const cal = parseInt(this.d1) + parseInt(this.d2)
        const cal2 = (cal*this.d3)/2
        return cal2
    }   
}