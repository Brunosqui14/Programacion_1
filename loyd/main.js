const obtener_productos = async (dato) =>{

    const datardos = await fetch("https://fakestoreapi.com/products/category/"+dato)
    const elementos = await datardos.json()
    let columnas = []
    elementos.forEach(element => {
        let columna = 
        `<div class="col-lg-3">
            <div class="card">
                <img height="300" src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">$${element.price}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                    <br></br>
                    <p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample_${element.id}" aria-expanded="false" aria-controls="collapseWidthExample">
                            Descripcion
                        </button>
                    </p>
                    <div style="min-height: 120px;">
                    <div class="collapse-horizontal collapse" id="collapseWidthExample_${element.id}" style="">
                      <div class="card card-body" style="width: 300px;">
                        ${element.description}
                      </div>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>`
        columnas.push(columna)
    });
    document.getElementById("catalogo").innerHTML = columnas.join('')
}
 
