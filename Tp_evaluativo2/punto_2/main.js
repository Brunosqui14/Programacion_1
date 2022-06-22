let criptos = [`Bitcoin`, `Ethereum`, `Tether`, `BNB`, `Cardano`, `Dai`, `Helium`, `Shiba Inu`, `Tron`, `Cronos`, `Solana`]

criptos.unshift('Stellar')
const indice = criptos.indexOf("Shiba Inu")
const numeroelementos = 2;
criptos.splice(indice,numeroelementos)
criptos.push('Gate')
function mostrar(){
    const longitud = criptos.length;
    const ultimo = criptos[longitud-1]
    const indice = criptos.indexOf("Helium")
    const helium = criptos[indice]
    const respuesta = 'a) la longitud del arreglo es de: ' +longitud+ ' b) Ultimo elemento: ' +ultimo + ' c) Criptomoneda halium aqui: '+helium
    document.getElementById("p").textContent = respuesta
}
document.getElementById("botom").addEventListener("click",mostrar)
function recorrer(){
    let filas = []
    criptos.forEach(element => {
        let fila = 
        `<li class="list-group-item">${element}</li>`
        filas.push(fila)
    });
    document.getElementById("list").innerHTML = filas.join('')
}
document.getElementById("botom2").addEventListener("click",recorrer)