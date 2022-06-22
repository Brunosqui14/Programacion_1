const weas = async () => {
    const datos_resibidos = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
    const provincias = await datos_resibidos.json()
    let filas = []
    provincias.provincias.forEach((element,index) => {
        let fila = 
        `<tr>
            <td>${index+1}</td>
            <td>${element.nombre}</td>
        </tr>`
        filas.push(fila)
    });
document.getElementById("id").innerHTML = filas.join('')
}
weas()
