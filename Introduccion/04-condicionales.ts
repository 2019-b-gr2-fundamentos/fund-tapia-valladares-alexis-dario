//Condicionales
const casado = true;
if(casado != true){ //Expresion => boolean
    console.log("No estoy casado");
}else{
    console.log("Si estoy casado");
}

if(casado == true){
    console.log("No estoy casado");
}else{
    console.log("Si estoy casado");
}

const tengoMosa = true;
if(casado == true && tengoMosa == true){
    console.log("Casado y Mosero");
}else {
    console.log("O casado o Mosero o Nada");
}

const casadoYMosero = casado == true && tengoMosa == true;
if(casadoYMosero){
    console.log("Casado y Mosero");
}else {
    console.log("O casado o Mosero o Nada");
}

/*AND -> &&
    TRUE Y TRUE = TRUE
    TRUE Y FALSE = FALSE
    FALSE Y TRUE = FALSE
    FALSE Y FALSE = FALSE
*/

/*OR -> || -> PIPES
    TRUE Y TRUE = TRUE
    TRUE Y FALSE = TRUE
    FALSE Y TRUE = TRUE
    FALSE Y FALSE = FALSE 
*/

//apago la primera alarma me hago
//bolita y lloro hasta la segunda
//alarma y me levanto
//celularDescargado == true
//celularDañado == true
//amaneceMuerto == true
//estaActivadaLaAlarma != true
//estaEnModoSilencio == true

//const seAtrasoAClase = celularDescargado == true || celularDañado == true || amaneceMuerto == true || estaActivadaLaAlarma != true || estaEnModoSilencio == true
/*Si el celular se descargo o el celular se daño o
    amenecci muerto o no esta activa la alarma o esta en modo silencio
    entonces llegue tarde, pero si no pasa nada de eso me poongo a llorar 
    porque me levante temprano.
*/