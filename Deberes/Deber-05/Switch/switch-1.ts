console.log("Muatriculas EPN");
const matriculaString = prompt("Ingrese el numero de matricula de cualquier materia: ");
const matricula = Number(matriculaString);

switch(matricula){
    case 1:
        console.log("Aun tiene chance de segunda matricula");
        break;
    case 2:
        console.log("Cuidado puede perder su carrera en la EPN");
        break;
    case 3:
        console.log("Es su ultima oportunidad");
        break;
    default:
        console.log("Error al momento de ingresar el numero de matriculas")
        break;
}   