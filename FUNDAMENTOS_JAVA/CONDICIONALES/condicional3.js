function diaDeLaSemana(dia) {
    switch (dia) {
        case 1:
            console.log('Lunes');
            break;
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miercoles');
            break;
        case 4:
            console.log('Jueves');
            break;
        case 5:
            console.log('Viernes');
            break;
        case 6:
            console.log('Sábado');
            break;
        case 7:
            console.log('Domingo');
            break;
        default:
            console.log('Numero de dia inválido. Debe ser entre 1 y 7.');
    }
}

// Ejemplo de uso
let dia = 3;
diaDeLaSemana(dia);