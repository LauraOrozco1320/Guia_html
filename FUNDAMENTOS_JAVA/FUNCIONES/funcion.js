function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
let baseTriangulo = 10;
let alturaTriangulo = 5;
let areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);

console.log('El área del triángulo con base ' + baseTriangulo + ' y altura ' + alturaTriangulo + ' es: ' + areaTriangulo);