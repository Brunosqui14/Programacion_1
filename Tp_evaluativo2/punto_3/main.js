
const obj = () => {
    const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
   lenguaje: 'TypeScript',
   patron: 'MVVM',
   spa: 'si'
    }
   }
   const{titulo, nombre} = framework
    const{lenguaje, patron, spa} = framework.características
    console.log(`
    ${titulo}
    ${nombre}
    caracteristicas:
    ${lenguaje}
    ${patron}
    ${spa}
    `)}
document.getElementById("boton").addEventListener("click",obj)