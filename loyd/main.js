function electrons(){
    const datos = await fetch('https://fakestoreapi.com/docs')
    const lista = await datos.json()
    let items = []
    lista.forEach(element => {
        let fila = 
        `<div>
            
        </div>`
        filas.push(fila)
    });
    document.getElementById("list_usuar").innerHTML = items.join('')
}
consumir_datos()
}