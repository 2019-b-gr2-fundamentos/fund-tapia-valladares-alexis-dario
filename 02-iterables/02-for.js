//for 
//1) Delcarar una variable
//2) Condicion (Expresion)
//3) Incrementar / Disminuir
for (let numeroExDeMiCrush = 7; numeroExDeMiCrush > 0; numeroExDeMiCrush--) {
    console.log(`ES CAN DA LO!`, numeroExDeMiCrush);
}
//ARREGLOS
// 1 Elemento (Variable const numero = 1)
// Conjuntos del MISMO ELEMNTO ( [ 1, 2, 3, 4...])
// Conjunto DIFERENTES ELEMENTOS ( [ 1, "abc", true...])
const arregloNumeros = [1, 2, 3, 4, 5];
arregloNumeros.push(6);
console.log('arregloNumeros', arregloNumeros);
arregloNumeros.pop();
console.log('arregloNumeros', arregloNumeros);
//Arreglo
// 1) Elementos
// 2) Indices (0 index based) -> POSICION
// 3) Longitud -> # Elementos
console.log(arregloNumeros.length);
const indiceElmentoUno = 0;
arregloNumeros[indiceElmentoUno];
//FOR   
// 1) let tamanio = arregloNumeros.length -> 5
// 2) tamanio >= 0
// 3) --
const indiceElementoCinco = 4;
console.log(arregloNumeros[indiceElementoCinco]);
