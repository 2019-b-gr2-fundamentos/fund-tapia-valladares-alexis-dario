const arregloMatriz = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9]
];
const arreglo2Matriz = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];
for (let i = 0; arregloMatriz.length; i++) {
    if (arregloMatriz[i].length != arregloMatriz[i + 1].length) {
        console.log("no son iguales");
    }
}
for (let i = 0; arreglo2Matriz.length; i++) {
    if (arreglo2Matriz[i].length != arreglo2Matriz[i + 1].length) {
        console.log("no son iguales");
    }
}
