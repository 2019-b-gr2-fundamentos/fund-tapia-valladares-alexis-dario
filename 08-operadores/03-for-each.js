"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foreach(arreglo, funcion) {
    var arregloForEach = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
    }
    return arregloForEach;
}
exports.foreach = foreach;
