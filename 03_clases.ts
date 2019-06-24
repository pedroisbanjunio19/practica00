class Jugador {
    public nombre: string;
    dorsal: number; // sería public
    public goles: number = 0;

    constructor(nombre: string, dorsal: number){
        this.nombre = nombre;
        this.dorsal = dorsal;
    }

    marcarGol(): void {
        this.goles++;
    }
}

let jugador1 = new Jugador('Sergio Ramos', 4);

jugador1.marcarGol();

// Constructor breve

class Player {

    constructor(public nombre:string, 
                public dorsal:string,
                public goles?:number) {}

    marcarGol(): void {
        this.goles++;
    }
    
}

// Implementación de interfaces

interface DatosMaestros {
    razonSocial: string;
    cif: string;
}

class Cliente implements DatosMaestros {
    razonSocial: string; // obligatorias por la
    cif: string;        // interfaz
    formaPago: string;

    constructor(razonSocial: string,
                 cif: string,
                 formaPago: string){
                     this.razonSocial = razonSocial;
                     this.cif = cif;
                     this.formaPago = formaPago;
                 }
}