const tareas = [
    {
        nombre:'testeando soft',
        duracion:25
    },
    {
        nombre:'implementación de alta cliente',
        duracion:90
    },
    {
        nombre:'Actualiza cliente',
        duracion:40
    },
    {
        nombre:'Deploy de soft',
        duracion:120
    },
    {
        nombre:'Correccion de bug',
        duracion:180
    }
]
//uso de metodo map()
let nombres = []
tareas.forEach(element => {
    
    nombres.push(element.nombre)
});
//aplicando map()
let nombre2 = tareas.map( tarea=>{
    return tarea.nombre
})
//resumido en una linea 

//let nombre2 = tareas.map( tarea=>tarea.nombre)

/*
* USO DE FILTER
*/
let tareas_prolongadas = []
tareas.forEach(element => {
    if(element.duracion >= 120){
        tareas_prolongadas.push(element)
    }    
});
console.log(tareas_prolongadas)
//filtrar haciendo uso del metodo filter()
const tareas_prolongadas2 = tareas.filter(tarea=>tarea.duracion >= 120)