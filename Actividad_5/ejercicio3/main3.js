function calcular(guille,bruno,leo) {
    if(guille==1){
        const resultado = parseInt(bruno)+parseInt(leo)
        return resultado
    }else{
        if(guille==2){
            const resultado = (bruno-leo)
            return resultado
        }else{
            if(guille==3){
                const resultado = (bruno*leo)
                return resultado
            }else{
                const resultado = (bruno/leo)
                return resultado
            }
        }
    }
}

function mostrar() {
    const guille = document.getElementById("jl").value
    const bruno = document.getElementById("i").value
    const leo = document.getElementById("i2").value
    const respuesta= calcular(guille,bruno,leo)
    document.getElementById("h1").textContent = respuesta;
}