let consolas =['PlayStation','Xbox','Nintendo Game Code','Seco DranCast','Game Boy Avanced']
const pos = 2;
const numeroelementos = 2;
consolas.splice(pos,numeroelementos)
consolas.push('Nintendo 64')
consolas.unshift('Nintendo Wii')
console.log(consolas)
const bruno = () => {
    const longitud = consolas.length;
    const ultimo = consolas[longitud-1]
    const xbox = consolas[2]
    document.getElementById("p").textContent = 'La longitud del arreglo es: '+longitud+ ' El ultimo elemento es: '+ultimo+ 'Xbox aquí: '+xbox
}
document.getElementById("boton").addEventListener("click",bruno)
function tablear(){
    let filas = []
    consolas.forEach((element,index) => {
        let fila = 
        `<tr>
            <td>${index+1}</td>
            <td>${element}</td>
        </tr>`
        filas.push(fila)
    });
    document.getElementById("id").innerHTML = filas.join('')
}
tablear()