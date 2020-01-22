import{AnimalPerrito}from'./animal-perrito.interface';

export interface Duenio {
    nombre: string;
    apellido: string;
    cedula?: string;
    fechaNacimiento ?: number;
    mascotasPerro?: AnimalPerrito[];
}