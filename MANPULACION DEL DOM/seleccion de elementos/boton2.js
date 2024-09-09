const parrafo = document.querySelector('#miParrafo');
const boton = document.querySelector('#miBoton');

// Función para cambiar el texto del párrafo
function cambiarTexto() {
    parrafo.textContent = '¡Texto Modificado!';
}

// Añadir un evento de clic al botón
boton.addEventListener('click', cambiarTexto);