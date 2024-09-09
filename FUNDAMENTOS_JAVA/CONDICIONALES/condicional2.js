function rangoEdad(edad) {
    if (edad >= 0 && edad <= 12) {
        console.log('Niño');
    } else if (edad >= 13 && edad <= 17) {
        console.log('Adolecente');
    } else if (edad >= 18 && edad <= 64) {
        console.log('Adulto');
    } else if (edad >= 65) {
        console.log('Anciano');
    }
}
let edad = 17;
rangoEdad(edad);