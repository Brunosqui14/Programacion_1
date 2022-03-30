function mostrar_mensaje(){
    alert("probando mi funcionamiento")
}
function mostrar_en_consola(){
    const nombre_apellido = "Bruno Quezada"
    
console.log("nombre_apellido: "+nombre_apellido)

console.log(`
    Nombre y apellido: ${nombre_apellido}
    DNI: 46482645
    Direccion: si
    `)
}
function validar(){
    const calificacion=parseInt(prompt("ingrese su nota pa"));
    /*if(calificacion>=7){
        alert("ta aprodabo mi rey")
    } else {
        alert("Pa diciempre pa")
    }*/
    (calificacion>=7) ? alert("estas aprobado") : alert("desaprobado")
}
function calcular(){
    const number = prompt('ingresa un numero: ');
    const resultado = number*10
    return resultado
}
function visualizar(){
    const respuesta = calcular()
    alert(respuesta)
}