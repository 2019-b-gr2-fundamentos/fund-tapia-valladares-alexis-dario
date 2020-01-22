import {Duenio} from './duenio.interface';

export interface AnimalPerrito { //interface -> Struct
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number;    //? -> opcionales
    //hijos?: null;
    perritas?: string[];
    vacunado?: boolean;
    duenio?: Duenio;
}