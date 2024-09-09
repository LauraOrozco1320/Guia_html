function generarColorAleatorio() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Función para cambiar el color de fondo del cuadro clickeado
function cambiarColorFondo(event) {
    // Cambia el color de fondo del cuadro clickeado
    event.target.style.backgroundColor = generarColorAleatorio();
}

// Obtén todos los elementos con la clase 'cuadrado'
const cuadrados = document.querySelectorAll('.cuadrado');

// Asocia el manejador de eventos a cada cuadro
cuadrados.forEach(cuadro => {
    cuadro.addEventListener('click', cambiarColorFondo);
});