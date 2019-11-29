function imprimirNVeces(mensaje, nVeces) {
    if (nVeces == 0) {
        console.log("Se termino");
    }
    else {
        console.log(`\n${mensaje}\n`);
        nVeces--;
        imprimirNVeces(mensaje, nVeces);
    }
}
function main() {
    imprimirNVeces(8984.556, 3);
}
