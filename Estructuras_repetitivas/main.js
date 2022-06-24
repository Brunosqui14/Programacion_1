let numeros = [1,2,3,4,5,6,7,8,9,10]
let filas = []
numeros.forEach((element,index) => {
    const res = element%2
    if (res==0) {
    const par = index+1
    filas.push(par)
}
});
console.log('forEach: '+filas)

let forof =[]
for (const numero of numeros) {
    if (numero>2 && numero<9) {
        forof.push(numero)
    }
}
console.log('forof: '+forof)