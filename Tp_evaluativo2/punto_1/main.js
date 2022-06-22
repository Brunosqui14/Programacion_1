const provincias = async () =>{
    const api = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    const elementos = await api.json()
    let filas = []
    elementos.forEach((element,index) => {
        let fila = 
        `<tr>
            <td>${index+1}</td>
            <td>${element.casa.nombre}</td>
            <td>$${element.casa.compra}</td>
            <td>$${element.casa.venta}</td>
        </tr>`
    filas.push(fila)
    });
document.getElementById("id").innerHTML = filas.join('')
}
provincias()
