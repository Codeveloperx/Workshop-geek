import GetData from "../helpers/getData.js";
import {PRODUCTS_URL} from "../helpers/rutas.js";
import product_Reference from "../module/product_reference.js";
import showProductos from "../module/showProducts.js";

const container = document.querySelector('#product');
const cont_product = document.querySelector('.section-card');

let product = [];

document.addEventListener('DOMContentLoaded', async () => {

   let dataProducts =  await GetData(PRODUCTS_URL);
  //  product_Reference(dataProducts, container)

   showProductos(dataProducts, cont_product)

document.addEventListener('click', ({target})=>{
  if(target.classList.contains('card-img')){
    let target_id = target.id;
    const elemento = dataProducts.find(item => item.id == target_id)
    product.push(elemento)
    console.log(product)
    product_Reference(product, container);
  }
})
})









// Carrito de compras funcionalidad
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').addEventListener('click', ()=>{
  shoppingCart.classList.toggle('active');
})






// const imagenes = new Array(
//   ['https://i.ibb.co/t22Htvh/imagen6.png'],
//   ['https://i.ibb.co/b3g3Q5R/imagen16.png'],
//   ['https://i.ibb.co/gr9DbsF/imagen9.png']
// );
// const imagenes1 = new Array(
//   ['https://i.ibb.co/f2d1NTC/imagen10.png'],
//   ['https://i.ibb.co/BLGJDTt/imagen11.png'],
//   ['https://i.ibb.co/G2388p9/imagen7.png']
//  );
// const imagenes2 = new Array(
//   ['https://i.ibb.co/MGvnCy6/imagen12.png'],
//   ['https://i.ibb.co/st4H94r/imagen14.png'],
//   ['https://i.ibb.co/Wc9W89W/imagen15.png']
// );
// let contador = 0;

// //Funcion para cambiar la imagen

// function rotarImagenes(){
//   contador++
//   document.getElementById('imagen').src=imagenes[contador%imagenes.length][0];
//   document.getElementById('imagen1').src=imagenes1[contador%imagenes1.length][0];
//   document.getElementById('imagen2').src=imagenes2[contador%imagenes2.length][0];
// }

// onload = function(){
//   rotarImagenes();
//   setInterval(rotarImagenes,3000);
// }