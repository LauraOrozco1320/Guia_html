// Seleccionar el boton y el elemento
const boton = document.querySelector('#cambiarColor');
const elemento = document.querySelector('#miElemento');

// Funcion para cambiar el color de fondo
function cambiarColorFondo() {
elemento.style.backgroundColor = getRandomColor();
}

// Generar un color hexadecimal aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Agregar un evento de clic al botón
boton.addEventListener('click', cambiarColorFondo);