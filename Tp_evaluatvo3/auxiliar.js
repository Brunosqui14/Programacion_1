function almacenar_indice(index){
    localStorage.setItem("indice",index)

}
function editar(index){
    let lista_productos = JSON.parse(localStorage.getItem("Productos"))
    document.getElementById("desc").value = lista_productos[index].descripcion
    document.getElementById("precio").value = lista_productos[index].precio_venta
    document.getElementById("select").value = lista_productos[index].select
    document.getElementById("url").value = lista_productos[index].url

    localStorage.setItem("indice",index)
    //apagar el boton
    document.getElementById("boton").style.display = "none"
    //encender el boton
    document.getElementById("boton2").style.display = "block"
}