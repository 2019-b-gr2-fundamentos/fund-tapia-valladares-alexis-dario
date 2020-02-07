"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcular(funcion, numUno, numDos) {
    var valorInicial = 10;
    return funcion(numUno, numDos, valorInicial);
}
exports.calcular = calcular;
function sumar(numUno, numDos, valorInicial) {
    return numUno + numDos;
}
exports.sumar = sumar;
function restar(numUno, numDos, valorInicial) {
    return numUno - numDos;
}
exports.restar = restar;
calcular(sumar, 1, 2);
calcular(restar, 5, 3);
function filter(arreglo, funcion) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}
exports.filter = filter;
