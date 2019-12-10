/*
    Pseudocodigo
    1) Crear el conjunto de nombres
    2) Preguntar si se quiere añadir un elemento
    4) Preguntar si se quiere borar un elemento
    5) Preguntar si se desea realizar otra vez el proceso
    6) Salir
*/
function aniadirEliminar( arreglo: string[]): void{
    console.log("Por el momento el Arreglo Frutas esta compuesto por:\n"+arreglo);
    console.log("1) Aniadir\n2) Eliminar\n3) Salir");
    let opcion = +prompt("Ingrese el # de la opcion: ");
    do{
        console.log("1) Aniadir\n2) Eliminar\n3) Salir");
        let opcion = +prompt("Ingrese el # de la opcion: ");
        if(opcion==1){
            for(let i=0;i<=arreglo.length;i++){
                console.log("Posicion #"+(i+1)+" -> "+arreglo[i]);
            }
            let posicion = +prompt("En que posicion desea aniadir mas nombres: ");
            posicion=posicion-1;
            let nuevoNombre = prompt("Ingrese el nombre que desea aniadir: ");
            arreglo.splice(posicion,1,nuevoNombre);
            console.log("\nEl arreglo se ha actualizado:\n"+arreglo);
        }else if(opcion==2){
            for(let i=0;i<=arreglo.length;i++){
                console.log("Posicion #"+(i+1)+" -> "+arreglo[i]);
            }
            let borrar = +prompt("Que elemento desea borar, ingrese la posicion: ");
            borrar=borrar-1;
            arreglo.splice(borrar,1);
            console.log("\nEl arreglo se ha actualizado:\n"+arreglo);

        }else{
            console.log("Esa opcion no existe");
        }
    }while(opcion!=1 && opcion!=2);
}

function main(){
    const frutas = ["Pera","Manzana","Durazno"];
    aniadirEliminar(frutas);
}
