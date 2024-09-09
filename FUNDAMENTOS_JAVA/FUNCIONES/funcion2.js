function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

let radioCirculo = 7;
let areaCirculo = calcularAreaCirculo(radioCirculo);

console.log('El área del círculo con radio ' + radioCirculo + ' es: ' + areaCirculo);