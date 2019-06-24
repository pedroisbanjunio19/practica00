// Tipos de datos primitivos
// String
var mensaje;
mensaje = 'Hola Mundo!';
var variableRepe;
// let variableRepe: string; let no permite variables repetidas
// Number
var resultado;
resultado = 9;
// Booleans
var mayorEdad;
mayorEdad = true;
// Arrays
var frutas;
var coches;
frutas = ['pera', 'manzana'];
// Any (para eliminar inferencia);
var edad = 'cuarenta';
var edadE;
edadE = 'treinta';
edadE = 45;
// Enum sin valores
var TallaPantalon;
(function (TallaPantalon) {
    TallaPantalon[TallaPantalon["small"] = 0] = "small";
    TallaPantalon[TallaPantalon["medium"] = 1] = "medium";
    TallaPantalon[TallaPantalon["large"] = 2] = "large";
})(TallaPantalon || (TallaPantalon = {}));
var pantalaon = TallaPantalon.small; //  devuelve 0
// Enum con valores
var TallaZapato;
(function (TallaZapato) {
    TallaZapato[TallaZapato["uk4"] = 40] = "uk4";
    TallaZapato[TallaZapato["uk5"] = 42] = "uk5";
})(TallaZapato || (TallaZapato = {}));
;
var zapatilla = TallaZapato.uk4;
// Void
function saludo() {
    // return 'Hola Mundo!'; error
    console.log('Hola');
}
// Undefined
var indefinida = null;
// Tipado de objetos sin clases
var jugador1;
jugador1 = {
    nombre: 'Rafa',
    apellidos: 'Nadal'
};
var jugador2;
jugador2 = {
    nombre: 'Roger Federer',
    edad: 35
};
var id;
id = '0000123';
id = 1234;
var toby = 'Mastín';
// Tipos en funciones
function suma(a, b) {
    return a + b;
}
suma(2, 4);
// Parámetros opcionales
function multip(a, b, mensaje) {
    var resultado = a * b;
    return mensaje ? mensaje + resultado : "El resultado es " + resultado;
}
// Tipo genérico
function devResultado(a) {
    // código
    return a;
}
devResultado('Aprobado');
devResultado(12);
devResultado(2);
