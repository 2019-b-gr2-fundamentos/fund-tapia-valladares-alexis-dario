function imprimirNVeces(mensaje : any, nVeces : number):void{
    if(nVeces==0){
        console.log("Se termino");
    }else{
        console.log(`\n${mensaje}\n`);
        nVeces--;
        imprimirNVeces(mensaje,nVeces);
    }
}

function main(){
    imprimirNVeces('hola',3);
}