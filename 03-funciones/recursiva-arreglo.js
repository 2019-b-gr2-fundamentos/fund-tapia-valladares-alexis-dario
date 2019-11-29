function recorrerArregloDsc(arreglo, tamano) {
    if (tamano < 0) {
        console.log("\N" + "FIN");
    }
    else {
        console.log(`\n${arreglo[(tamano - 1)]}\n`);
        tamano--;
        recorrerArregloDsc(arreglo, tamano);
    }
}
function recorrerArregloAsc(arreglo, indice) {
    const tamano = arreglo.length;
    if (indice == tamano) {
        console.log("\N" + "FIN");
    }
    else {
        console.log(`\n${arreglo[indice]}\n`);
        indice++;
        recorrerArregloAsc(arreglo, indice);
    }
}
function main() {
    const arreglo = [1, 2, 3, 4, 5, 6];
    recorrerArregloDsc(arreglo, 6);
    recorrerArregloAsc(arreglo, 0);
}
