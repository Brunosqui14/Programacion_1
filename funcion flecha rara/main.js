async function obtener_datos(){
    //fetch realiza una solisitud HTTP a traves del metodo GET
    const datos = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos_definitivos = await datos.json()
    datos_definitivos.forEach(element => {
        console.log(element.title)    
    });
}
obtener_datos()