export default class Batman{
    
    constructor(){
    }
    
    async mostrar(){
        const datos_resibidos = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        const batman = await datos_resibidos.json()
        for (const Element of batman.Search) {
            console.log(`
                ${Element.imdbID}
                ${Element.Title}
                ${Element.Year}
                ${Element.Poster}
            `)
        }
    }   
}