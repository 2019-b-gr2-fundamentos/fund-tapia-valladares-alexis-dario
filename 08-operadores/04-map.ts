export function map(
    arreglo:any[],
    funcion:(
        valorActual:any,
        indice?:number,
        arreglo?:any[]) => any
): any[] {
    const arregloMap = [];
    for(let i = 0; i < arreglo.length; i++ ){
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo,
        );
        if(respuestaFuncion == true){
            arregloMap.push(arreglo[i]);
        }
    }
    return arregloMap;
}