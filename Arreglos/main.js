let series = ['breaking bad','okupas','narco','casados con hijos','naruto']
const longitud = series.length
console.log('longitud: '+longitud)
const primero = series[0]
console.log('primer elemento: '+primero) 
const ultimo = series[longitud-1]
console.log(ultimo)
series.forEach( (element,index) => {
    console.log(index+'-'+element)
});

series.push('Dragon ball')
console.log(series)
series.pop()
console.log(series)
series.unshift("Grey's anatomy")
console.log(series)
series.shift()
console.log(series)
const indice = series.indexOf("casados con hijos")
console.log('indice obtenido: '+indice)
series.splice(indice,1)
console.log(series)
const posicion = 1;
const numeroElemento = 2;
const elementosEliminados = series.splice(posicion,numeroElemento)
console.log(elementosEliminados)
console.log(series)
let copia = series.slice()
copia.push("Dragon ball")
console.log(series)
console.log(copia)
