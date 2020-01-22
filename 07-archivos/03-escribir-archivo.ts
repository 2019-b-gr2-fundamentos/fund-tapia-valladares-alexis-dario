import * as fs from 'fs';
export function escribirArchivo(path:string,contenido:string){
    fs.writeFileSync(
        './ejemplo.txt',
        'NUEVO CONTENIDO :D' + contenido,
        'utf-8'
    );
}