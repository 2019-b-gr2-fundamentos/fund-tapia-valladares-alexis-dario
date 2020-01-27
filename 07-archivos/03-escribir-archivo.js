"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirArchivo(path, contenido) {
    fs.writeFileSync('./ejemplo.txt', 'NUEVO CONTENIDO :D' + contenido, 'utf-8');
}
exports.escribirArchivo = escribirArchivo;
