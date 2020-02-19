import {filter} from "./02-filter";
import {foreach} from "./03-for-each"
function main(){
    const arregloEstudiante:any= [
        {id:1, nombre:"Adrian",nota:7},
        {id:2, nombre:"Vicente",nota:4},
        {id:3, nombre:"Adrian",nota:3},
        {id:4, nombre:"Jose",nota:10},
        {id:5, nombre:"Carlos",nota:6.5}
    ];
    const respuestaForEach=arregloEstudiante
        .forEach(
            function(valorActual,indice,arreglo){
            console.log(valorActual.nota);
            valorActual.nota20=valorActual.nota*2;
           }
        )
    console.log('Respuesta For Each',respuestaForEach);

    const respuestaNuestroForEach = foreach(
        arregloEstudiante,
        function(valorActual, i, arr){
            console.log(valorActual.nota)
            return respuestaForEach;
        }
    );
    console.log('respuestaFilterNuestro',respuestaNuestroForEach);
    console.log('arregloEstudiantes', arregloEstudiante);
    //Map -> transformar el arreglo
    //ENVIAMOS -> el valor actual modifficado
    //Recibimos -> el nnuevo arreglo con valores modif.
    const respuestaMap = arregloEstudiante
           .map(
               function(valorActual,i,arreglo){
                   const nuevoObjeto={
                    cambiodeid:valorActual.id,
                    nombre:valorActual.nombre,
                    nota20:valorActual.nota*2
                   };
                   return nuevoObjeto;
                }
           );
    console.log('Respuesta MAP',respuestaMap);
    console.log('arreglo de estudaintes',arregloEstudiante);
    

    //Filter -> filtra el arreglo
    //ENVIAMOS -> CONDICION
    //RECIBIMOS ->Nuevo arreglo con valores filtrados

    const respuestaFilter = arregloEstudiante
                .filter(
                    function(valorActual,i,arreglo){
                        return valorActual.nota >6;
                    }
                );
    console.log('Respuesta Filter',respuestaFilter);
    console.log('arreglo de estudaintes',arregloEstudiante);

    const respuestaFilterNuestro = filter(
            arregloEstudiante,
            function(valorActual, i, arr){
                console.log('Valor: ', valorActual);
                console.log('Indice: ', i );
                console.log('Arreglo: ', arr);
                return valorActual.nota > 7;
            }
        );
    console.log('respuestaFilterNuestro',respuestaFilterNuestro);
    console.log('arregloEstudiantes', arregloEstudiante);


    //SOME -> OR Duevulve verdadero dependiedno de la condicion (uno cumpla)
    //          si alguno cumple devuelve TRUE
    //Recibimos -> Booleano
    const respuestaSome = arregloEstudiante
        .some(
            function(valorActual,i,arr){
                const condicion = valorActual.nota <7;
                return condicion;
            }
        );
    console.log('Respuesta Some',respuestaSome);
    console.log('arreglo de estudaintes',arregloEstudiante);   
    
    //Every-> todos
    const respuestaEvery = arregloEstudiante
        .every(
            function(valorActual,i,arr){
                const condicion = valorActual.nota >= 4;
                return condicion;
            }
        );
    console.log('Respuesta Every',respuestaEvery);
    console.log('arreglo de estudaintes',arregloEstudiante);  

    //Reduce ->  Devuelve un valor
    //Enviamos -> Calculo
    //Recibimos -> Valor
    const respuestaReduce = arregloEstudiante
        .reduce(
            function(acumulador,valorActual,i,arr){
                const calculo = acumulador + valorActual.nota;
                return calculo;
            },
            0//valor inicial del acumulador
        );
    console.log('Respuesta Reduce',respuestaReduce);
    console.log('arreglo de estudaintes',arregloEstudiante);  

    
}
main();