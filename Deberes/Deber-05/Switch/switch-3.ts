console.log("Multa Hoy No Circula");
const ocasion = prompt("Ingrese el numero de veces que ha sido sancionado: ");
const primeraVez = 57.90;
const segundaVez = 96.50;
const terceraVez = 193;
switch(ocasion){
    case "1":
        console.log(`La multa a pagar es: ${primeraVez}`);
        break;
    case "2":
        console.log(`La multa a pagar es: ${segundaVez}`);
        break;
    case "3":
        console.log(`La multa a pagar es: ${terceraVez}`);
        break;
    default:
        console.log("Error al momento de ingresar el numero de sanciones")
        break;
}     

