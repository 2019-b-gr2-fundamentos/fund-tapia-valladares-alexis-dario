console.log("CALCULADORA");
const primerNumeroString = prompt("Ingrese el primer numero: ");
const segundoNumeroString = prompt("Ingrese el segundo numero: ");
const primerNumero = Number(primerNumeroString);
const segundoNumero = Number(segundoNumeroString);
const suma = primerNumero + segundoNumero;
const stringSuma = `La suma de ${primerNumero} + ${segundoNumero} = ${suma}`;
const resta = primerNumero - segundoNumero;
const stringResta = `La resta de ${primerNumero} - ${segundoNumero} = ${suma}`;
const multiplicacion = primerNumero * segundoNumero;
const stringMultiplicacion = `La multiplicacion de ${primerNumero} * ${segundoNumero} = ${multiplicacion}`;
const division = primerNumero / segundoNumero;
const stringDivision = `La division de ${primerNumero} / ${segundoNumero} = ${division}`;
const parteEntera = Math.trunc(suma / 2);
const parteEnteraString = `La parte entera del promedio de ${primerNumero} y ${segundoNumero} = ${parteEntera}`;
console.log("Que operacion desea hacer:\n1) Suma\n2) Resta\n3) Multipplicacion\n4) Division\n5) Parte Entera del Promedio");
const operacion = prompt("Su opcion es: ");
switch (operacion) {
    case "1":
        console.log(stringSuma);
        break;
    case "2":
        console.log(stringResta);
        break;
    case "3":
        console.log(stringMultiplicacion);
        break;
    case "4":
        console.log(stringDivision);
        break;
    case "5":
        console.log(parteEnteraString);
        break;
    default:
        console.log("Esa opcion no existe");
        break;
}
