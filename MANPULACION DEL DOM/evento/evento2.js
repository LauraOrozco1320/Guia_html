const campoTexto = document.getElementById('campoTexto');
const boton = document.getElementById('miBoton');

function mostrarAlerta() {
    const texto = campoTexto.value;
    alert('El texto ingresado es: ' + texto);
}

boton.addEventListener('click', mostrarAlerta);