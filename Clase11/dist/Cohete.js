var Cohete = /** @class */ (function () {
    function Cohete(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.destino = Destinos[Destinos.luna];
    }
    Cohete.prototype.launch = function () {
        console.log("Lanzando el cohete " + this.nombre + " con destino a " + this.destino);
    };
    return Cohete;
}());
