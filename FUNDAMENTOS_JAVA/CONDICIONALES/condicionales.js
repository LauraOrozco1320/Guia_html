function verificarNumero(numero) {
    if (numero > 0) {
        console.log(numero + " es positivo.");
    } else if (numero < 0) {
        console.log(numero + " es negativo.");
    } else {
        console.log(numero + " es cero.");
    }
}
let numero = 0; // Puedes cambiar este valor para probar otros números
verificarNumero(numero);
