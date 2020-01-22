// 02-crud.ts create read update delete
// const prompts = require('prompts');
import * as prompts from 'prompts';
import { RespuestaEdad } from './interfaces/respuesta-edad.interface';
import { RespuestaNombre } from './interfaces/respuesta-nombre.interface';

function main(){
    // npm uninstall -g tsc -> WINDOWS
    // npm uninstall -g typescript -> WINDOWS
    // npm install -g typescript -> WINDOWS
    // sudo npm uninstall -g tsc -> LINUX O MAC
    // sudo npm install -g typescript -> LINUX O MAC

    // obtenerDatosAnimalPerrito(); // Asincrona
    obtenerDatosAnimalPerritoSincrono()
    .then()
    .catch(); // -> PROMESA // Sincrona
}

async function obtenerDatosAnimalPerritoSincrono(){
    console.log('Inicio');
    const preguntas = [
        {
            type: 'number',
            name: 'edad',
            message: 'Puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        },
        {
            type: 'text',
            name: 'Cedula',
            message: 'Puedes darme tu cedula?'
        }
    ]
    const respuestaEdad = await prompts(preguntas);
    console.log('Respuesta', respuestaEdad);
    console.log('Fin');
}

main();