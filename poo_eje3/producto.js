export default class Producto{
    constructor(d,p,s){
        this.descripcion = d
        this.precio_venta = p
        this.select = s
    }
    //metodo
    guardar_producto(){
        let nuevo_producto = {
            descripcion: this.descripcion,
            precio_venta: this.precio_venta,
            select: this.select    
        }
        if ("Productos" in localStorage) {
            //convertimos el JSON obtenido desde el storage en una exprecion nativa de javascript
            let lista_productos = JSON.parse(localStorage.getItem("Productos"))
            lista_productos.push(nuevo_producto)
            localStorage.setItem("Productos",JSON.stringify(lista_productos))
        }else{
            let lista_productos = []
            lista_productos.push(nuevo_producto)

            //guardar en el storage
            localStorage.setItem("Productos",JSON.stringify(lista_productos))
        }
       
    }
    obtener_producto(){

    }
}