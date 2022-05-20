import GetData from "../helpers/getData.js";
import showProductos from "../module/showProducts.js";

const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', async () => {

   let dataProducts =  await GetData("http://localhost:4000/products");
   console.log(dataProducts)

   showProductos(dataProducts, container)

})