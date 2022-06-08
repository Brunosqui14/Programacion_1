export default class Batman{
    
    constructor(){
    }
    
    async mostrar(){
        const datos_resibidos = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        const batman = await datos_resibidos.json()
        let Batman = []
        for (const Element of batman.Search) {
            let robin = `
                <div class="col-lg-3">
                <div class="card">
                <img height="300" src="${Element.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Titulo:${Element.Title}</h5>
                    <p class="card-text">Año de lanzamiento:${Element.Year}</p>
                  </div>
                </div>
            </div>
        </div>`
        Batman.push(robin)
        }
        document.getElementById("bat").innerHTML = Batman.join('')
    }
}