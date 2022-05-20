const obtener_usuario = async () => {
    const cripto = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const megacripto = await cripto.json()
    let filas = []
    megacripto.forEach(element => {
        let fila = 
        `<tr>
            <td><img src="${element.image}"></td>
            <td>${element.name}</td>
            <td>${element.symbol}</td>
            <td>${element.current_price}</td>
            <td>${element.total_volume}</td>
        </tr>`
        filas.push(fila)
    });
    document.getElementById("willy").innerHTML = filas.join('')
}
//invocamos un demonio ahhh no te creas xd solo invocamos la funcion flecha
obtener_usuario()      