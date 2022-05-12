
function calculo(){
    const auto = document.getElementById("selector").value
    if(auto==1){
        const calculo = (1750000*5)/100
        const dato = 1750000-calculo
        document.getElementById("h1").textContent ='$'+dato
    } else {
        if(auto==2){
            const calculo = (1950000*10)/100
            const dato = 1950000-calculo
            document.getElementById("h1").textContent = dato
        } else {
            const calculo = (2560000*15)/100
            const dato = 2560000-calculo
            document.getElementById("h1").textContent = '$'+dato
        }
    }
}