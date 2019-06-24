// Interfaces definen estructuras
// de objetos literales

interface Jugador {
    nombre: string;
    apellidos: string;
    edad?: number; // propiedad opcional
}

let jugador1: Jugador = {
    nombre: 'Rafa',
    apellidos: 'Nadal'
}