import GetData from "../helpers/getData.js";
import {PRODUCTS_URL} from "../helpers/rutas.js";
import showProductos from "../module/showProducts.js";

const container = document.querySelector('.products');

let product = [];

document.addEventListener('DOMContentLoaded', async () => {

   let dataProducts =  await GetData(PRODUCTS_URL);
   console.log(dataProducts)

   showProductos(dataProducts, container)


document.addEventListener('click', ({target})=>{
  if(target.classList.contains('imj')){
    let target_id = target.id;
    const elemento = dataProducts.find(item => item.id == target_id)
    product.push(elemento)
    showProductos(product, container);
  }
})
})









// toast

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}