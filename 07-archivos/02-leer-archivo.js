"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(path) {
    var resultado = fs.readFileSync(path, 'utf-8');
    console.log(resultado);
    return resultado;
}
exports.leerArchivo = leerArchivo;
