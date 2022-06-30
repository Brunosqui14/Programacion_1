import Producto from "./producto.js"
    
function guardar(){
    let descripcion = document.getElementById("desc").value
    let precio_venta = document.getElementById("precio").value
    let select = document.getElementById("select").value
    let producto = new Producto(descripcion,precio_venta,select)
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