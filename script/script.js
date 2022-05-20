
const imagenes = new Array(
    ['https://i.ibb.co/t22Htvh/imagen6.png'],
    ['https://i.ibb.co/b3g3Q5R/imagen16.png'],
    ['https://i.ibb.co/gr9DbsF/imagen9.png']
);
const imagenes1 = new Array(
    ['https://i.ibb.co/f2d1NTC/imagen10.png'],
    ['https://i.ibb.co/BLGJDTt/imagen11.png'],
    ['https://i.ibb.co/G2388p9/imagen7.png']
   );
const imagenes2 = new Array(
    ['https://i.ibb.co/MGvnCy6/imagen12.png'],
    ['https://i.ibb.co/st4H94r/imagen14.png'],
    ['https://i.ibb.co/Wc9W89W/imagen15.png']
);
let contador = 0;

//Funcion para cambiar la imagen

function rotarImagenes(){
    contador++
    document.getElementById('imagen').src=imagenes[contador%imagenes.length][0];
    document.getElementById('imagen1').src=imagenes1[contador%imagenes1.length][0];
    document.getElementById('imagen2').src=imagenes2[contador%imagenes2.length][0];
}

onload = function(){
    rotarImagenes();
    setInterval(rotarImagenes,3000);
}