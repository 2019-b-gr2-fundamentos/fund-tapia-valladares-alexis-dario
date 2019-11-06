console.log("Hoy no Circula");
const placaString = prompt("Ingrese el ultimo digito de su placa: ");
const placa = Number(placaString);

if(placa == 1 || placa == 2){
    console.log("Usted no puede circular el Lunes");
}else if(placa == 3 || placa == 4){
    console.log("Usted no puede circular el Martes");
}else if(placa == 5 || placa == 6){
    console.log("Usted no puede circular el Miercoles");
}else if(placa == 7 || placa == 8){
    console.log("Usted no puede circular el Jueves");
}else if(placa == 9 || placa == 0){
    console.log("Usted no puede circular el Viernes");
}else{
    console.log("Error al ingresar el ultimo digito");
}