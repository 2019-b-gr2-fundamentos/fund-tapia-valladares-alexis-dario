//import * as prompts from 'C:/Users/USREPS/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts';
import * as prompts from 'C:/Users/sampe_000/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts';
//import * as prompts from ''
import { Vengador } from './Interfaces/vengadores.interfaces';
let id = 1;
let Vengadores: Vengador[] = [];

async function crearDatosSuperHeroes(){
    const preguntasVengador = [
        {
            type: 'text',
            name: 'Nombre',
            message: 'Inserte el nombre real del vengador'
        },
        {
            type: 'text',
            name: 'SuperHeroe',
            message: 'Inserte el nombre de super heroe del vengador'
        },
        {
            type: 'text',
            name: 'Poder',
            message: 'Inserte el superpoder del vengador'
        },
        {
            type: 'text',
            name: 'Grupo',
            message: 'Inserte los grupo a los que pertece'
        },
        {
            type: 'text',
            name: 'Ciudad',
            message: 'Ciudad natal del vengador'
        }
];
    const respuestaPreguntas = await prompts(preguntasVengador);
    const nuevoRegistroVengador = {
        Aid: id,
        Nombre: respuestaPreguntas.Nombre,
        SuperHeroe: respuestaPreguntas.SuperHeroe,
        SuperPoder: respuestaPreguntas.Poder,
        Grupo: respuestaPreguntas.Grupo,
        Ciudad: respuestaPreguntas.Ciudad
    };
    id = id + 1;
    Vengadores.push(nuevoRegistroVengador);
    queDeseaHacer().then().catch();

};
async function queDeseaHacer(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: '¿Que desea hacer? \n 1-crear otro registro \n 2-leer los registros actuales \n 3-actualizar datos \n 4-eliminar registros \n 5-SALIR'
    });
    const respuesta1 = preguntas.respuestas;
    if(respuesta1 == 1){
        crearDatosSuperHeroes().then().catch();
        
    }else if(respuesta1 == 2){
        leerRegistros().then().catch();

    }else if(respuesta1 == 3){
        editarRegistro().then().catch();

    }else if(respuesta1 == 4){
        eliminarRegistro().then().catch();

    }else if(respuesta1 == 5){
        console.log('ADIOS');
    }else{
        console.log('Elija una opcion valida');
        queDeseaHacer().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('Registro de Vengadores:', Vengadores);
    queDeseaHacer().then().catch();
};
async function editarRegistro(){
    const AidAEditar = await prompts({
        type: 'number',
        name: 'Aid',
        message: 'Ingrese el Aid del Vengador cuya informacion desea editar'
    });
    const AidEncontrado = Vengadores.findIndex(
        function(valorActual){
        return valorActual.Aid == AidAEditar.Aid
        }
    );
    const queDeseaEditar = await prompts({
        type: 'text',
        name: 'campoAEditar',
        message: '¿Que campo desea editar?'
    });
    const respuestaCampo = queDeseaEditar.campoAEditar;
    if(respuestaCampo == 'Nombre'){
        const nuevoNombre = await prompts({
            type: 'text',
            name: 'nuevoNombre',
            message: 'Ingrese el nombre real del nuevo Vengador'
        });
        Vengadores[AidEncontrado].Nombre = nuevoNombre.nuevoNombre;
    }else if(respuestaCampo == 'SuperHeroe'){
        const nuevoSuperHeroe = await prompts({
            type: 'text',
            name: 'nuevoSuper',
            message: 'Ingrese el nobre de SuperHeroe del nuevo vengador'
        });
        Vengadores[AidEncontrado].SuperHeroe = nuevoSuperHeroe.nuevoSuper;
    }else if(respuestaCampo == 'SuperPoder'){
        const nuevoSuperPoder = await prompts({
            type: 'text',
            name: 'nuevoPoder',
            message: 'Ingrese el nuevo SuperPoder'
        });
        Vengadores[AidEncontrado].SuperPoder = nuevoSuperPoder.nuevoPoder;
    }else if(respuestaCampo == 'Grupo'){
        const nuevoGrupo = await prompts({
            type: 'text',
            name: 'newGroup',
            message: 'Ingrese el nuevo grupo al que pertenece el Vengador'
        });
        Vengadores[AidEncontrado].Grupo = nuevoGrupo.newGroup;
    }else if(respuestaCampo == 'Ciudad'){
        const nuevaCiudad = await prompts({
            type: 'text',
            name: 'City',
            message: 'Ingrese la nueva ciudad'
        });
        Vengadores[AidEncontrado].Ciudad = nuevaCiudad.City;
    }else{
        console.log('Ingrese un campo valido');
    };
    console.log('El registro de Vengadores actualizado es:', Vengadores);
    queDeseaHacer().then().catch();
    return Vengadores
};
async function eliminarRegistro(){
    const AidAEliminar = await prompts({
        type: 'number',
        name: 'Aid',
        message: 'Ingrese el Aid del Vengador cuya informacion desea eliminar'
    });
    const AidEncontrado = Vengadores.findIndex(
        function(valorActual){
        return valorActual.Aid == AidAEliminar.Aid
        }
    );
    Vengadores.splice(AidEncontrado, 1);
    console.log('El nuevo registro de Vengadores es:', Vengadores);
    queDeseaHacer().then().catch();
    return Vengadores
}

function main(){
    crearDatosSuperHeroes().then().catch();

}

main();