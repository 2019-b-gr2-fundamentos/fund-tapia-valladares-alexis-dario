console.log("Procesadores");
const procesadorString = prompt("Ingrese el modelo de su procesador INTEL: ");

if(procesadorString == "i3"){
    console.log("Procesador gama baja");
}else if(procesadorString == "i5"){
    console.log("Procesador gama media");
}else if(procesadorString == "i7"){
    console.log("Procesador gama media-alta");
}else if(procesadorString == "i9"){
    console.log("Procesador gama alta");
}