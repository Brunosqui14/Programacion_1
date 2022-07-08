export default class Producto{
    constructor(d,p,s,u){
        this.descripcion = d
        this.precio_venta = p
        this.select = s
        this.url = u
    }
    //metodo
    guardar_producto(){
        let nuevo_producto = {
            descripcion: this.descripcion,
            precio_venta: this.precio_venta,
            select: this.select,
            url: this.url    
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
        /*invoco nuevamente el metodo obtener_producto() para lograr reconstruir la tabla, y 
        así reflejar los datos actualizados que provienen del locarstorage, espesificamente 
        del item "Productos"
        */
       this.obtener_producto()
       this.vaciar_formulario()
    }
    obtener_producto(){
        /*recolectamos todos los productos alojados en el Item "Productos"
        que estan en notacion JSON. Debemos convertirlo en una exprecion 
        nativa de JavaScript (es decir, hacemos un JSON.parse())*/
        let lista_productos = JSON.parse(localStorage.getItem("Productos"))

        let filas = []
        lista_productos.forEach((element,index) => {
            let fila = `
            <tr class="table-success">
                <td>${index+1}</td>
                <td>${element.url}</td>
                <td>${element.descripcion}</td>
                <td>${element.precio_venta}</td>
                
                <td>
                    <button onclick="almacenar_indice(${index})" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#mymodal">
                        <i class="fa fa-trash"></i>                    
                    </button>
                    <button onclick="editar(${index})" class="btn btn-primary btn-sm">
                        <i class="fa fa-edit"></i> 
                    </button>
                </td>
            </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }
    eliminar_productos(indice){
        let lista_productos = JSON.parse(localStorage.getItem("Productos"))
        lista_productos.splice(indice,1)
        localStorage.setItem("Productos", JSON.stringify(lista_productos))
        this.obtener_producto()
    }
    actualizar_producto(){
        let indice = localStorage.getItem("indice")
        let lista_productos = JSON.parse(localStorage.getItem("Productos"))
        lista_productos[indice].url = document.getElementById("url").value
        lista_productos[indice].descripcion = document.getElementById("desc").value
        lista_productos[indice].precio_venta = document.getElementById("precio").value
        lista_productos[indice].select = document.getElementById("select").value

        localStorage.setItem("Productos",JSON.stringify(lista_productos))
        this.obtener_producto()
        this.vaciar_formulario()

        document.getElementById("boton").style.display = "block"
        document.getElementById("boton2").style.display = "none"
    }
    vaciar_formulario(){
        document.getElementById("form_producto").reset()
    }
}
