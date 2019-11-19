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

//TRUTY & FALSY
if(undefined){
    console.log("Truty");
}else{
    console.log("Falsy");
}

//SWITCH
/*const calculo = "sumar";    
switch(calculo){
    case sumar:
        break;
    case restar:
        break;
    case multiplicar:
        break;
    case dividir:
        break;
    default:
        break;
    }
}
*/
const edadString = prompt("Ingrese la edad: ");
const edad = Number(edadString);

if(edad>0 && edad<=6){
    console.log("Guagua");
}else if (edad>6 && edad<=18){
    console.log("Guambra");
}else if (edad>18 && edad <= 65){
    console.log("Longo");
}else if(edad >65){
    console.log("Ruko");
}else if(edad <0){
    console.log("Edad en rango incorreccto")
}

if(edad>0 && edad<=6){
    console.log("Guagua");
}else{
    if(edad>6 && edad<=18){
        console.log("Guambra");
    }else{
        if(edad>18 && edad <=65){
            console.log("Longo");
        }else{
            if(edad>65){
                console.log("Ruko");
            }else{
                console.log("Edad incorercta");
            }
        }
    }
}
