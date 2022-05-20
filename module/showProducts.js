function showProductos(data, container){
    container.innerHTML = '';
    data.forEach((productos) => {
        const {id, name, price,img, description } = productos;
        const {url_1} = img;
        const div = document.createElement('div');
        // div.classList.add('product');
        // div.setAttribute('id', id)
        div.innerHTML = `
        <div class="card">
            <div class="title">${name}</div>
            <div class="image">
              <img src=${url_1}/>
            </div>
          <button id="${id}"class="buy-button details">Ver Detalle</button>
        </div>`

    container.appendChild(div);

        
    });

}

export default showProductos;