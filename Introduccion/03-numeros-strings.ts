let numeroUno = 1; //camelCase
const NUMERO_UNO =1;
// NUMEROUNO -> TODO MAYUSCULA (SEPARACION NO)
// NUMERO_UNO -> mayusculas con guion bajo
// NumeroUno
// numerouno
// numero_uno -> PYTHON
// numerOunO
let resultado;

//SUMA
resultado = 1 + 2;
//RESTA
resultado = 1 - 2;
//MULTIPLICAR
resultado = 1 * 2;
//DIVIDIR
resultado = 1 / 2;
//EXPONENCIAL
resultado = 1 ^ 2;
//MOD -> residuo de division
resultado = 4 % 2; // = 0
resultado = 4 % 3; // = 1
resultado = 7 % 3; // = 1

console.log("pera" + 2);

//STRINGS
const mensaje = "\"Hola Mundo\"";
const saludo = "\"Adios Mundo\"";

//console.log(mensaje +"1\t\t\t 3\n"+ saludo);

//template strings
const edad = 30;
const saludoEdad = `Mi edad es: ${edad}`
const saludoCompleto = `${mensaje} \n${saludo}`
console.log(saludoEdad);
console.log(saludoCompleto);

//Contamos elementos
const nombreLongitud = "Alexis Tapia";
console.log(nombreLongitud.length);

//Eliminar espacios al principio y al final
console.log(nombreLongitud.trim());

//Cambiar a mayusculas o minusculas
console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLocaleLowerCase());

//Reemplazar
console.log(nombreLongitud);
console.log(nombreLongitud.replace("i","a"));
console.log(nombreLongitud);

//Buscar caracter
console.log(nombreLongitud.search("z"));
console.log(nombreLongitud.search("e"));

//Separar
console.log(nombreLongitud.slice(0,3));

//Indice de
console.log(nombreLongitud.indexOf("l"));
console.log(nombreLongitud.indexOf("z"));

console.log(nombreLongitud.includes("T"));//booleano
console.log(nombreLongitud.includes("z"));//booleano

console.log(nombreLongitud.endsWith("x"));//booleano
console.log(nombreLongitud.startsWith("x"));//booleano

console.log(nombreLongitud.substring(0,6));// =slice