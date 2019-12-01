/*
console.log(arregloDosDimensiones[0].length)

let indice2 = arregloDosDimensiones[1].length-1;

console.log(indice2)

for(let i = 0; i<=arregloDosDimensiones[0].length-1;i++){
    console.log("Entre al for"+i+indice2)
    suma = ((arregloDosDimensiones[0][i])*(arregloDosDimensiones[1][indice2]))+suma;
    indice2--;
}

console.log(suma);
*/
/*
arregloDosDimensiones[0][0] //1
arregloDosDimensiones[0][1] //2
arregloDosDimensiones[1][0] //3
arregloDosDimensiones[1][1] //4

*/
function productoCruz(vectores) {
    let suma = 0;
    let indice2 = vectores[1].length - 1;
    for (let i = 0; i <= vectores[0].length - 1; i++) {
        suma = ((vectores[0][i]) * (vectores[1][indice2])) + suma;
        indice2--;
    }
    return [0, 0, suma];
}
function main() {
    let resultado = [];
    const arregloDosDimensiones = [
        //i,j
        [1, 2, 3, 4],
        [4, 5, 6, 7]
    ];
    resultado = productoCruz(arregloDosDimensiones);
    console.log(resultado);
}
