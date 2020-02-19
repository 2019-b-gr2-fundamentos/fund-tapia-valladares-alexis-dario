// Referencias
function main(){
    let uno = 1;
    let dos = uno; // Valor
    let tres = dos; // Valor
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);

    const arreglito = [1,2,3];
    let miOtroArreglito = [];
    let a = arreglito[0]; // Valor
    let b = arreglito[1]; // Valor
    console.log('arreglito', arreglito);
    console.log('a' ,a);
    console.log('b', b);

    miOtroArreglito = [
        ...arreglito, 
        //...arreglito,  ( se puede copiar varios arreglos)
        //...arreglito,  ( si se desea.                   )
        //...arreglito, 
        //...arreglito, 
        //...arreglito, 
        //...arreglito, 
        //...arreglito
    ]; // Ref -> Direccion Memoria
    // ASIGNAR A MI OTRO ARREGLITO UNA NUEVA DIRECCION DE MEMORIA
    // 1-> For llenamos un nuevo arreglo
    // 2-> Filter -> Siempre true -> Nuevo arreglo
    // 3-> Map -> Nuevo arreglo

    // INMUTABILIDAD 
    // JS -> Arreglos o Objetos -> Clon!
    // CLON DEL ARREGLO -> CLON TRABAJAR
    
    miOtroArreglito.push(2);
    arreglito[0] = 9;
    arreglito[1] = 10;
    console.log('arreglito', arreglito);
    console.log('miOtroArreglito', miOtroArreglito);
    console.log('a' ,a);
    console.log('b', b);

    const adrian = {
        id:1,
        nombre: 'Adrian',
        sueldo: 1.12
    };
    const soloElNombre = {
        ...adrian
    };
    const copUno = {
        ...adrian
    };
    const copDos = {
        ...soloElNombre
    };
    const copTres = {
        ...adrian
    };
    console.log('adrian',adrian);
    console.log('soloElNombre',soloElNombre);
    delete adrian.nombre; // ELIMINAR EL NOMBRE DEL OBJETO
    soloElNombre['edad'] = 22;
    // soloElNombre.edad = 22;
    console.log('adrian',adrian);
    console.log('soloElNombre',soloElNombre);
    console.log('copUno',copUno);
    console.log('copDos',copDos);
    console.log('copTres',copTres);
}

main();