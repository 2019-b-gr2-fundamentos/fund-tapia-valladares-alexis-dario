Math.floor(Math.random() * 11); // [0 ,11[
// 1) Crear arreglo 5 elementos
const arreglo = [];
const arreglo2 = [];
// 2) Cada elemento 1 o 0
for (let indice = 0; indice < 10; indice++) {
    arreglo[indice] = Math.floor(Math.random() * 2);
}
console.log(arreglo);
for (let i = 0; i < 10; i++) {
    arreglo.push(Math.floor(Math.random() * 2));
}
console.log(arreglo2);
// [0 ,2[
// Ej: [0, 0, 1, 1, 0]
// 3) Existe al menos un elementos = 1
