let numeroUnoString = "0"; //String
let numeroDosString = "0"; //String
let operacion = "0";
let numeroUno = Number(numeroUnoString);
let numeroDos = Number(numeroDosString);
const stringSeleccionOperacion ="Ingrese el numero de la opcion deseada: ";
const stringPrimerNumero = "Ingrese el primer numero: ";
const stringSegundoNumero = "Ingrese el segundo numero: ";
const suma = `La suma de ${numeroUno} + ${numeroDos} = ${numeroUno+numeroDos}`
const resta = `La resta de ${numeroUno} - ${numeroDos} = ${numeroUno-numeroDos}`
const multiplicacion = `La multiplicacion de ${numeroUno} * ${numeroDos} = ${numeroUno*numeroDos}`
const division = `La division de ${numeroUno} + ${numeroDos} = ${numeroUno/numeroDos}`
console.log("\n1)Suma\n2)Resta\n3)Multiplicacion\n4)Division\n5)...\n");
console.log(operacion = prompt(stringSeleccionOperacion));

if(operacion == 1){
    console.log(numeroUnoString = prompt(stringPrimerNumero));
    console.log(numeroDosString = prompt(stringSegundoNumero));
    console.log(suma);
}else{
    if(operacion == 2){
        console.log(numeroUnoString = prompt(stringPrimerNumero));
        console.log(numeroDosString = prompt(stringSegundoNumero));
        console.log(resta);
    }else{
        if(operacion == 3){
            console.log(numeroUnoString = prompt(stringPrimerNumero));
            console.log(numeroDosString = prompt(stringSegundoNumero));
            console.log(multiplicacion);
        }else{
            if(operacion == 4){
                console.log(numeroUnoString = prompt(stringPrimerNumero));
                console.log(numeroDosString = prompt(stringSegundoNumero));
                console.log(division);
            }else{  
                if(operacion == 5){
                    console.log("A la espera de la operacion");
                }else{
                    console.log("La opcion ingresada no es valida");
                }
            }
        }
    }
}
        
    

