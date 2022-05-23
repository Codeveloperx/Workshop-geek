function showProductos(data, container){
    container.innerHTML = '';
    data.forEach((productos) => {
        const {id, name, price, img} = productos;
        const {url_1} = img;
        container.innerHTML += `
            <div class="card text-center">
                <a><img id="${id}" class="card-img" src=${url_1} alt="imagenes de camisa fresh" class="card-img-top"></a>
                <div class="card-body">
                    <p class="card-text"><strong>${name}<br>$${price}</strong></p>
                </div>
            </div>
        ` 
    });

}

export default showProductos;
