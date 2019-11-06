console.log("Saber si un numero es positivo o negativo");
const numeroString = prompt("Ingrese un numero: ");
const numero = Number(numeroString);

if(numero > 0){
    console.log("El numero es positivo");
}else if(numero < 0){
    console.log("El numero es negativo");
}else{
    console.log("El 0 se le considera neutro");
}