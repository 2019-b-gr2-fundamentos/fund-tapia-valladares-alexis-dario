//Persona
//Animal -> nombre cientifico, color, f.naciemiento
//peso, genero, altura

//CASI TODOS LOS LLENGUAJES
//Struct -> Estructura de datos
//Clase -> estructuras de datos -> metodos
const edad =20;
const estructura ={
    nombreCientifico: 'canis lupus familiaris',
    "llave":"valor",
    noEsNecesario: true, //ultima coma OK
    enojo: undefined,
    edadActual: edad
}
//ESTRUCTURA DE DATOS EN LENGUAJE NO TIPADO
const poliPerro = {
    nombreCientifico: 'canis lupus familiaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela','Zorida'],
    vacunado: true,
}
//ESTRUCTURA DE DATOS EN LENGUAJE TIPADO
import {AnimalPerrito} from './interfaces/animal-perrito.interface';
import { Duenio } from './interfaces/duenio.interface';
const poliPerroAmarrillo : AnimalPerrito = {
    nombreCientifico: 'Cannis',
    nombre: 'Amarrillo',
    clan: 'poli',    
}

const duenioPoliPerroAmarillo : Duenio = {
    nombre:'Alexis',
    apellido: 'Tapia',
    cedula: '1726503103',
    fechaNacimiento: 12,
    mascotasPerro:[poliPerroAmarrillo]
}

