import {propiedadesDigimon} from './interfaces/propiedades.interface'
import {eliminarArchivo} from './read&write/borrar';
import {escribirArchivo} from './read&write/escribir';
import {leerArchivo} from './read&write/leer';
import * as prompts from 'prompts';

let id = 0;
const contenidoArchivo = leerArchivo('./registroDigimon.txt');
let arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
let minimoAid = -1;
    arregloCargadoDeArchivo
        .forEach(
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoAid){
                    minimoAid = idActual;
                }
            }
        );
    minimoAid = minimoAid + 1;
            id = minimoAid;
let arregloDigimones: propiedadesDigimon[] = arregloCargadoDeArchivo;

async function nuevoDigimon(){

    const arregloPreguntas = [
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
    const digimones = await prompts(arregloPreguntas);
    const nuevoDigimon = {
        id: id,
        nombre: digimones.nombre,
        raza: digimones.raza,
        atributo: digimones.atributo,
        evolucion: digimones.evolucion, 
        temporada: digimones.temporada
    };
    id = id+1;
    arregloDigimones.push(nuevoDigimon);
    const arregloTexto = JSON.stringify(arregloDigimones);
    // JSON.stringify -> Convierte objeto o arreglo en memoria
    //                -> a texto
    escribirArchivo(
        './registroDigimon.txt',
        arregloTexto
    );
    menu().then().catch();
}

async function menu(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: '¿Que opcion desea? \n\t1)Añadir Digimon\n\t2)Observar los digimons\n\t3)Actualizar algun Digimon\n\t4)Borrar algun Digimon\n\t5)Salir'
    });
    const opcionElegida = preguntas.respuestas;
    if(opcionElegida == 1){
        nuevoDigimon().then().catch();
        
    }else if(opcionElegida == 2){
        listaDeDigimons().then().catch();

    }else if(opcionElegida == 3){
        actualizarDigimon().then().catch();

    }else if(opcionElegida == 4){
        boorrarDigimon().then().catch();

    }else if(opcionElegida == 5){
        console.log('Adios =)');
    }else{
        console.log('Opcion Invalida');
        menu().then().catch();
    };
};

async function listaDeDigimons(){
    console.log('Lista de Digimones:', arregloDigimones);
    menu().then().catch();
};

async function actualizarDigimon(){
    const recorderis =await prompts({
        type: 'number',
        name: 'opcion',
        message: 'Desea ver la lista de Digimones antes?\n\t1)SI\t2)NO'
    });
    if(recorderis.opcion==1){
        console.log('Lista de Digimones:', arregloDigimones);
    }
    const idDigimon = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el Id del Digimon: '
    });
    const digimonEncontrado = arregloDigimones.findIndex(
        function(valorActual){
        return valorActual.id == idDigimon.id
        }
    );
    const propiedadAEditar = await prompts({
        type: 'number',
        name: 'propiedadAEditar',
        message: '\nPropiedades:\n\t1)Nombre\n\t2)Raza\n\t3)Atributo\n\t4)Evolucion\n\t5)Temporoda\n¿Que propiedad desea cambiar?'
    });
    const propiedadEdicion = propiedadAEditar.propiedadAEditar;
    if(propiedadEdicion == 1){
        const nuevoNombre = await prompts({
            type: 'text',
            name: 'nuevoNombre',
            message: 'Ingrese el nuevo nombre del Digimon: '
        });
        arregloDigimones[digimonEncontrado].nombre = nuevoNombre.nuevoNombre;
    }else if(propiedadEdicion == 2){
        const nuevaRaza = await prompts({
            type: 'text',
            name: 'nuevaRaza',
            message: 'Ingrese la nueva raza del Digimon: '
        });
        arregloDigimones[digimonEncontrado].raza = nuevaRaza.nuevaRaza;
    }else if(propiedadEdicion == 3){
        const nuevoAtributo = await prompts({
            type: 'text',
            name: 'nuevoAtributo',
            message: 'Ingrese el nuevo Atributo'
        });
        arregloDigimones[digimonEncontrado].atributo = nuevoAtributo.nuevoAtributo;
    }else if(propiedadEdicion == 4){
        const nuevaEvolucion = await prompts({
            type: 'text',
            name: 'nuevaEvolucion',
            message: 'Ingrese la nueva Evolucion: '
        });
        arregloDigimones[digimonEncontrado].evolucion = nuevaEvolucion.nuevaEvolucion;
    }else if(propiedadEdicion == 5){
        const nuevaTemporada = await prompts({
            type: 'number',
            name: 'nuevaTemporada',
            message: 'Ingrese la nueva temporada: '
        });
        arregloDigimones[digimonEncontrado].temporada = nuevaTemporada.nuevaTemporada;
    }else{
        console.log('Esa Propiedad no existe');
    };
    console.log('Actualizacion existosa del Digimon :', arregloDigimones[digimonEncontrado]);
    const arregloTexto = JSON.stringify(arregloDigimones);
    // JSON.stringify -> Convierte objeto o arreglo en memoria
    //                -> a texto
    escribirArchivo(
        './registroDigimon.txt',
        arregloTexto
    );
    menu().then().catch();
    return arregloDigimones
};
async function boorrarDigimon(){
    const idToErase = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id del Digimon que desea borrar: '
    });
    const digimonEncontrado = arregloDigimones.findIndex(
        function(valorActual){
        return valorActual.id == idToErase.id
        }
    );
    arregloDigimones.splice(digimonEncontrado, 1);
    
    console.log('El nuevo registro de arregloDigimones es:', arregloDigimones);
    const arregloTexto = JSON.stringify(arregloDigimones);
    // JSON.stringify -> Convierte objeto o arreglo en memoria
    //                -> a texto
    escribirArchivo(
        './registroDigimon.txt',
        arregloTexto
    );
    menu().then().catch();
    return arregloDigimones
}

function main(){
    
    menu().then().catch();

}

main();