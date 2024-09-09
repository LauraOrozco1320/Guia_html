function generarColorAleatorio() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const cuadro = document.getElementById('cuadro');
const boton = document.getElementById('miBoton');

function cambiarTextoYColor() {
  
    cuadro.textContent = 'Texto Cambiado';

   
    cuadro.style.color = generarColorAleatorio();
}
boton.addEventListener('click', cambiarTextoYColor);