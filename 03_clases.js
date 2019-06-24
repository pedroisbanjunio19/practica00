var Jugador = /** @class */ (function () {
    function Jugador(nombre, dorsal) {
        this.goles = 0;
        this.nombre = nombre;
        this.dorsal = dorsal;
    }
    Jugador.prototype.marcarGol = function () {
        this.goles++;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Sergio Ramos', 4);
jugador1.marcarGol();
// Constructor breve
var Player = /** @class */ (function () {
    function Player(nombre, dorsal, goles) {
        this.nombre = nombre;
        this.dorsal = dorsal;
        this.goles = goles;
    }
    Player.prototype.marcarGol = function () {
        this.goles++;
    };
    return Player;
}());
var Cliente = /** @class */ (function () {
    function Cliente(razonSocial, cif, formaPago) {
        this.razonSocial = razonSocial;
        this.cif = cif;
        this.formaPago = formaPago;
    }
    return Cliente;
}());
