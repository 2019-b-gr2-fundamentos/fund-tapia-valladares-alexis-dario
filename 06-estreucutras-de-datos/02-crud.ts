// 02-crud.ts create read update delete
// const prompts = require('prompts');
import * as prompts from 'prompts';
import {RespuestaEdad} from './interfaces/respuesta-edad.interface';
import {RespuestaNombre} from './interfaces/respuesta-nombre.interface';

function main(){
    //obtenerDatosAnimalPerrito();
    obtenerDatosAnimalPerritoSincrono().then().catch();

}
/*function obtenerDatosAnimalPerrito(){
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    const promesaEdad = prompts({ // PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
      });
    console.log(promesaEdad);
    promesaEdad
        .then( // OK
          (datos)=>{
              console.log('datos',datos); // AQUI PUEDO SEGUIR
              ////
                const promesaNombre = prompts({ // PROMESA
                    type: 'text',
                    name: 'nombre',
                    message: 'Puedes darme tu nombre?'
                });
                promesaNombre
                    .then( // OK
                        (datosNombre)=>{
                            console.log('Nombre', datosNombre); // AQUI PUEDO SEGUIR
                        }
                    )
                    .catch( // =( 
                        (error)=>{
                            console.log('Error',error);
                        }
                    );
              ///
          }
        )
        .catch( // =( 
            (error)=>{
                console.log('Error',error);
            }
        );
    
    console.log('Fin');
}
*/

async function obtenerDatosAnimalPerritoSincrono(){
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    /*const preguntas = [
        {
            type: 'number',
            name: 'edad',
            message: 'Puedes darme tu edad?' 
        },
        {

        }
    ]*/
    const edad: RespuestaEdad = await prompts({ // PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    const nombre: RespuestaNombre = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Puedes darme tu nombre?'
    });
    console.log('Edad', edad.edad);
    console.log('Nombre', nombre.nombre);                
    console.log('Fin'); 
}
main();