// Tipos de datos primitivos

// String

let mensaje: string;
mensaje = 'Hola Mundo!';

let variableRepe: string;
// let variableRepe: string; let no permite variables repetidas

// Number

let resultado: number;
resultado = 9;

// Booleans

let mayorEdad: boolean;
mayorEdad = true;

// Arrays

let frutas: string[];
let coches: Array<string>;

frutas = ['pera','manzana'];

// Any (para eliminar inferencia);

let edad = 'cuarenta';

let edadE: any;
edadE = 'treinta';
edadE = 45;

// Enum sin valores

enum TallaPantalon { small, medium, large}

let pantalaon: TallaPantalon = TallaPantalon.small //  devuelve 0

// Enum con valores

enum TallaZapato {uk4=40, uk5=42};

let zapatilla: TallaZapato = TallaZapato.uk4;

// Void

function saludo(): void {
    // return 'Hola Mundo!'; error
    console.log('Hola');
}

// Undefined

let indefinida:undefined = null;

// Tipado de objetos sin clases

let jugador1: object;

jugador1 = {
    nombre: 'Rafa',
    apellidos: 'Nadal'
}

let jugador2: {nombre: string, edad: number}

jugador2 = {
    nombre: 'Roger Federer',
    edad: 35
}

// Tipos de unión

type tipoId = string | number;

let id: tipoId;

id = '0000123';
id = 1234;

// Tipos de unión complejos

type perro = 'Pastor Alemán' | 'Mastín' | 'Dogo';

let toby: perro = 'Mastín';

// Tipos en funciones
function suma (a: number, b: number): number {
    return a + b;
}

suma(2,4);

// Parámetros opcionales

function multip (a:number, b: number, mensaje?: string ): string {
    const resultado = a * b;
    return mensaje ? mensaje + resultado : `El resultado es ${resultado}`;
}

// Tipo genérico

function devResultado<T> (a:T): T {
    // código
    return a;
}

devResultado<string>('Aprobado');

devResultado<number>(12);

devResultado(2);


