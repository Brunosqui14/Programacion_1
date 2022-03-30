function calcular(){
    const number = parseInt(prompt('ingresa la base menor: '))
    const number2 = parseInt(prompt('ingresa la base mayor: '))
    const number3 = parseInt(prompt('ingresa la altura: '))
    const tuki = number + number2
    const toki = tuki * number3
    const resultado = toki/2
    return resultado
}
function visualizar(){
    const respuesta = calcular()
    alert(respuesta)
}