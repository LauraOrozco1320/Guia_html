function imprimirTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

imprimirTablaMultiplicar(3); // Imprime la tabla de multiplicar que desea
