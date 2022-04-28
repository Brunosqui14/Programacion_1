let lenguajes = ['Python', 'JavaScript', 'Csharp', 'C++' , 'Java' , 'PHP' , 'Ruby']

function jiji(){
    const longitud = lenguajes.length
    const ult = lenguajes[longitud-1]
    const ter = lenguajes[2]
    document.getElementById("h1").textContent = 'la longitud: '+longitud+' el ultimo es: '+ult +' el tercero es: '+ter

    
}
const boton = document.getElementById("hola")
boton.addEventListener("click",jiji)

function jaja(){
    lenguajes.forEach( (element,index) => {
    console.log(index+'-'+element)
    })
}
lenguajes.push("go")
lenguajes.shift()
lenguajes.unshift("Kotlin")
const indice = lenguajes.indexOf("java")
lenguajes.splice(indice,2)
console.log(lenguajes)