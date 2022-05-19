const consumir_datos = async () => {
    const datos_reaibidos = await fetch('https://jsonplaceholder.typicode.com/users')
    const lista_usuarios = await datos_reaibidos.json()
    let items = []
    lista_usuarios.forEach(usuario => {
        let li = `<li class="list-group-item">${usuario.name}</li>`
        items.push(li)
    });
    document.getElementById("list_usuar").innerHTML = items.join('')
}
consumir_datos()