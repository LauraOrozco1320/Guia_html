
const boton = document.querySelector('#miBoton');
const mensaje = document.querySelector('#mensaje');

function mostrarMensaje() {
    mensaje.textContent = '¡Has hecho clic en el boton, felicidades!';
}

boton.addEventListener('click', mostrarMensaje);