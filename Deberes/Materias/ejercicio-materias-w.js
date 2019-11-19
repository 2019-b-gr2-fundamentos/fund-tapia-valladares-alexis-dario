/*
1 Analisis
2 Algebra
3 Compiladores
5 Programacion
7 Calculo
11 Fisica
13 Ingles
*/
let deberes = 0;
let Analisis = 0;
let Algebra = 0;
let Compiladores = 0;
let Programacion = 0;
let Calculo = 0;
let Fisica = 0;
let Ingles = 0;
while (deberes < 1000) {
    deberes++;
    if ((deberes % 13) == 0) {
        Ingles++;
    }
    else if ((deberes % 11) == 0) {
        Fisica++;
    }
    else if ((deberes % 7) == 0) {
        Calculo++;
    }
    else if ((deberes % 5) == 0) {
        Programacion++;
    }
    else if ((deberes % 3) == 0) {
        Compiladores++;
    }
    else if ((deberes % 2) == 0) {
        Algebra++;
    }
    else if ((deberes % 2) != 0) {
        Analisis++;
    }
}
console.log(`\nTotal Deberes = ${deberes}\n`);
console.log(`Deberes de Analisis = ${Analisis}`);
console.log(`Deberes de Algebra = ${Algebra}`);
console.log(`Deberes de Compiladore = ${Compiladores}`);
console.log(`Deberes de Programacion = ${Programacion}`);
console.log(`Deberes de Calculo = ${Calculo}`);
console.log(`Deberes de Fisica = ${Fisica}`);
console.log(`Deberes de Ingles = ${Ingles}`);
