const calcular = (dato1) => {
    if(13<dato1 && dato1<33){
        const resultado = ("Temperatura baja")
        return resultado
    } else {
        if(31<dato1 && dato1<69){
            const resultado = ("Temperatura adecuada")
            return resultado
        } else {
            if(67<dato1 && dato1<97){
                const resultado = ("Temperatura alta")
                return resultado
            } else {
                const resultado = ("Temperatura desconocida")
                return resultado
            }
        }
    }
}

const mostrar = () =>{
    const d1 = document.getElementById("inp_1").value
    const respuesta= calcular(d1)
    document.getElementById("h1").textContent = respuesta;
}
const boton = document.getElementById("calcular")
boton.addEventListener("click",mostrar)