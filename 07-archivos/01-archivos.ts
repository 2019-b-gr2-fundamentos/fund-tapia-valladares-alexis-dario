import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";

function main(){
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = '\nTengo hambre :( \n';
    escribirArchivo('./ejemplo.txt','');
    
    console.log(textoLeido);
}

main();
