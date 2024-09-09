// Seleccionar los párrafos y el botón usando querySelector
const parrafo1 = document.querySelector('#miPárrafo1');
const parrafo2 = document.querySelector('#miPárrafo2');
const boton = document.querySelector('#miBoton');

// Función para cambiar el texto de los párrafos
function cambiarTextos() {
    parrafo1.textContent = 'ADIOS JUAN.';
    parrafo2.textContent = 'ADIOS ANA.';
}

// Añadir un evento de clic al botón
boton.addEventListener('click', cambiarTextos);