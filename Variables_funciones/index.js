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
    const calificacion=parseInt(prompt("ingrese su nota pa"))
    if(calificacion>=7){
        alert("ta aprodabo mi rey")
    } else {
        alert("Pa diciempre pa")
    }
}