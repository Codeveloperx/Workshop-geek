function product_Reference(data, container){
    container.innerHTML = '';
    data.forEach((productos) => {
        const {id, name, price, img, size, description } = productos;
        const {url_1, url_2, url_3} = img;
        const {size_s, size_m, size_l, size_xl, size_xxl} = size;
        container.innerHTML = `
        <!--aside list-->

        <div class="d-flex justify-content-between">
            <div id="item-detalle" class="d-flex flex-column p-3 gap-3" id="list-example" class="list-group">
                <a class="list-group-item list-group-item-action" href="#list-item-1"><img
                        src=${url_1} alt="imagen 1"></a>
                <a class="list-group-item list-group-item-action" href="#list-item-2"><img
                        src=${url_2} alt=""></a>
                <a class="list-group-item list-group-item-action" href="#list-item-3"><img
                        src=${url_3} alt=""></a>
                <a class="list-group-item list-group-item-action" href="#list-item-4"><img
                        src=${url_1} alt=""></a>
            </div>

            <!-- imagen-->
            <div id="detalle" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
                class="scrollspy-example d-flex flex-column mb-3" tabindex="0">

                <!-- Imagenes -->
                <h4 id="list-item-1"><img class="img-fluid" src=${url_1} alt="imagen 1">
                </h4>

                <h4 id="list-item-2"><img class="img-fluid" src=${url_2} alt=""></h4>

                <h4 id="list-item-3"><img class="img-fluid" src=${url_3} alt=""></h4>

                <h4 id="list-item-4"><img class="img-fluid" src=${url_2} alt=""></h4>

            </div>
        </div>

        <!--Info producto rigth aside-->

        <div id="descripcion-detalle" class="d-flex flex-column w-50 m-5">
            <h1>${name}</h1>
            <h2>$${price}</h2>
            <h3>Size</h3>
            <ul>
                <li>${size_s}</li>
                <li>${size_m}</li>
                <li>${size_l}</li>
                <li>${size_xl}</li>
                <li>${size_xxl}</li>
            </ul>
            <button id="${id}">ADD TO CART</button>
            <button id="${id}" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">
                BUY IT NOW
            </button>

            <!--Off Canvas que aparece al dar click al botón Buy it now-->

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <div>
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Crown Sweatshirt</h5>
                    </div>

                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like,
                        text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--Fin del offcanvas-->

            <p>${description}</p>
            <a href="">Click for sizing</a>

        </div>
        `
        
    });

}

export default product_Reference;