function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function main() {
    calculadora();
}
function calculadora() {
    const operacion = prompt('Selecciona una operacion:\n1) Suma\n2) Resta\n3) Multiplicacion\n4) Division\n5) FIN');
    const esSuma = operacion == "suma" || operacion == "1" || operacion == "suma-1";
    const esResta = operacion == "resta" || operacion == "2" || operacion == "resta-2";
    const esMultiplicacion = operacion == "multiplicacion" || operacion == "3" || operacion == "multiplicacion-3";
    const esDivision = operacion == "division" || operacion == "4" || operacion == "division-4";
    const fin = operacion == "fin" || operacion == "5" || operacion == "fin-5";
    const estaValida = esSuma || esResta || esDivision || esMultiplicacion;
    console.log('\n' + esDivision + '\n' + esSuma);
    if (estaValida) {
        const numUno = +prompt("Numero 1: ");
        const numDos = +prompt("Numero 2: ");
        let resultado = 0;
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        if (esResta) {
            resultado = restar(numUno, numDos);
        }
        if (esMultiplicacion) {
            resultado = multiplicar(numUno, numDos);
        }
        if (esDivision) {
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
        calculadora();
    }
    else {
        if (fin) {
            console.log("ADIOS :'(");
        }
        else {
            calculadora();
        }
    }
}
