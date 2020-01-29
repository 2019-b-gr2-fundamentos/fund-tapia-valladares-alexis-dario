"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
var id = 1;
var arregloDigimones = [];
function nuevoDigimon() {
    return __awaiter(this, void 0, void 0, function () {
        var arregloPreguntas, digimones, nuevoDigimon;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    arregloPreguntas = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa nombre'
                        },
                        {
                            type: 'text',
                            name: 'atributo',
                            message: 'Ingresa atributo'
                        },
                        {
                            type: 'text',
                            name: 'evolucion',
                            message: 'Ingresa evolucion'
                        },
                        {
                            type: 'text',
                            name: 'raza',
                            message: 'Ingresa raza'
                        },
                        {
                            type: 'number',
                            name: 'temporada',
                            message: 'Ingresa temporada:'
                        }
                    ];
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 1:
                    digimones = _a.sent();
                    nuevoDigimon = {
                        id: id,
                        nombre: digimones.nombre,
                        raza: digimones.raza,
                        atributo: digimones.atributo,
                        evolucion: digimones.evolucion,
                        temporada: digimones.temporada
                    };
                    id = id + 1;
                    arregloDigimones.push(nuevoDigimon);
                    menu().then().catch();
                    return [2 /*return*/];
            }
        });
    });
}
function menu() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, opcionElegida;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'respuestas',
                        message: '¿Que opcion desea? \n\t1)Añadir Digimon\n\t2)Observar los digimons\n\t3)Actualizar algun Digimon\n\t4)Borrar algun Digimon\n\t5)Salir'
                    })];
                case 1:
                    preguntas = _a.sent();
                    opcionElegida = preguntas.respuestas;
                    if (opcionElegida == 1) {
                        nuevoDigimon().then().catch();
                    }
                    else if (opcionElegida == 2) {
                        listaDeDigimons().then().catch();
                    }
                    else if (opcionElegida == 3) {
                        actualizarDigimon().then().catch();
                    }
                    else if (opcionElegida == 4) {
                        boorrarDigimon().then().catch();
                    }
                    else if (opcionElegida == 5) {
                        console.log('Adios =)');
                    }
                    else {
                        console.log('Opcion Invalida');
                        menu().then().catch();
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
function listaDeDigimons() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Lista de Digimones:', arregloDigimones);
            menu().then().catch();
            return [2 /*return*/];
        });
    });
}
;
function actualizarDigimon() {
    return __awaiter(this, void 0, void 0, function () {
        var recorderis, idDigimon, digimonEncontrado, propiedadAEditar, propiedadEdicion, nuevoNombre, nuevaRaza, nuevoAtributo, nuevaEvolucion, nuevaTemporada;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'opcion',
                        message: 'Desea ver la lista de Digimones antes?\n\t1)SI\t2)NO'
                    })];
                case 1:
                    recorderis = _a.sent();
                    if (recorderis.opcion == 1) {
                        console.log('Lista de Digimones:', arregloDigimones);
                    }
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingrese el Id del Digimon: '
                        })];
                case 2:
                    idDigimon = _a.sent();
                    digimonEncontrado = arregloDigimones.findIndex(function (valorActual) {
                        return valorActual.id == idDigimon.id;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'propiedadAEditar',
                            message: '\nPropiedades:\n\t1)Nombre\n\t2)Raza\n\t3)Atributo\n\t4)Evolucion\n\t5)Temporoda\n¿Que propiedad desea cambiar?'
                        })];
                case 3:
                    propiedadAEditar = _a.sent();
                    propiedadEdicion = propiedadAEditar.propiedadAEditar;
                    if (!(propiedadEdicion == 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoNombre',
                            message: 'Ingrese el nuevo nombre del Digimon: '
                        })];
                case 4:
                    nuevoNombre = _a.sent();
                    arregloDigimones[digimonEncontrado].nombre = nuevoNombre.nuevoNombre;
                    return [3 /*break*/, 14];
                case 5:
                    if (!(propiedadEdicion == 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevaRaza',
                            message: 'Ingrese la nueva raza del Digimon: '
                        })];
                case 6:
                    nuevaRaza = _a.sent();
                    arregloDigimones[digimonEncontrado].raza = nuevaRaza.nuevaRaza;
                    return [3 /*break*/, 14];
                case 7:
                    if (!(propiedadEdicion == 3)) return [3 /*break*/, 9];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoAtributo',
                            message: 'Ingrese el nuevo Atributo'
                        })];
                case 8:
                    nuevoAtributo = _a.sent();
                    arregloDigimones[digimonEncontrado].atributo = nuevoAtributo.nuevoAtributo;
                    return [3 /*break*/, 14];
                case 9:
                    if (!(propiedadEdicion == 4)) return [3 /*break*/, 11];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevaEvolucion',
                            message: 'Ingrese la nueva Evolucion: '
                        })];
                case 10:
                    nuevaEvolucion = _a.sent();
                    arregloDigimones[digimonEncontrado].evolucion = nuevaEvolucion.nuevaEvolucion;
                    return [3 /*break*/, 14];
                case 11:
                    if (!(propiedadEdicion == 5)) return [3 /*break*/, 13];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'nuevaTemporada',
                            message: 'Ingrese la nueva temporada: '
                        })];
                case 12:
                    nuevaTemporada = _a.sent();
                    arregloDigimones[digimonEncontrado].temporada = nuevaTemporada.nuevaTemporada;
                    return [3 /*break*/, 14];
                case 13:
                    console.log('Esa Propiedad no existe');
                    _a.label = 14;
                case 14:
                    ;
                    console.log('Actualizacion existosa del Digimon :', arregloDigimones[digimonEncontrado]);
                    menu().then().catch();
                    return [2 /*return*/, arregloDigimones];
            }
        });
    });
}
;
function boorrarDigimon() {
    return __awaiter(this, void 0, void 0, function () {
        var idToErase, digimonEncontrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'id',
                        message: 'Ingrese el id del Digimon que desea borrar: '
                    })];
                case 1:
                    idToErase = _a.sent();
                    digimonEncontrado = arregloDigimones.findIndex(function (valorActual) {
                        return valorActual.id == idToErase.id;
                    });
                    arregloDigimones.splice(digimonEncontrado, 1);
                    console.log('El nuevo registro de arregloDigimones es:', arregloDigimones);
                    menu().then().catch();
                    return [2 /*return*/, arregloDigimones];
            }
        });
    });
}
function main() {
    nuevoDigimon().then().catch();
}
main();
