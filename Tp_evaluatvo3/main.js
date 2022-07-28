import Producto from "./producto.js"
    
function guardar(){
    let descripcion = document.getElementById("desc").value
    let precio_venta = document.getElementById("precio").value
    let select = document.getElementById("select").value
    let url = document.getElementById("url").value
    let detalle = document.getElementById("detalle").value
    let producto = new Producto(descripcion,precio_venta,select,url,detalle)
    /*Invocamos(ejecutamos) al metodo guardar_producto(),
    perteneciente a la clase producto*/
    producto.guardar_producto()
}
document.getElementById("boton").addEventListener("click",guardar)

function listar() {
    let producto=new Producto() 
    producto.obtener_producto()
}
listar()
function eliminar() {
    let indice = localStorage.getItem("indice")
    //creamos una instancia 
    //para acceder a los metodos y atributos de la clase producto
    let producto = new Producto()
    //haciendo uso de la instancia
    //invocamos al metodo eliminar_producto()s
    producto.eliminar_productos(indice)
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar(){
    //acá creamos la instancia producto
    let producto = new Producto()
    /*
        y a traves de la instancia accedemos o invocamos el metodo 
        actualizar_producto() existente en el archivo producto.js
    */
    producto.actualizar_producto()
}
document.getElementById("boton2").addEventListener("click",actualizar)