console.log("Combinacion ingles");
const diasString = prompt("Ingrese el numero de dias que desea combinar: ");
const dias = Number(diasString);

switch(dias){
    case 1:
        console.log("Aun puede combinar su horario");
        break;
    case 2:
        console.log("Su horario de combinacion debe ser igual en los dos dias");
        break;
    default:
        console.log("No se puede combinar mas de dos dias")
        break;
}   