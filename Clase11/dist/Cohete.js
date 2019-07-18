var Espacial;
(function (Espacial) {
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
    Espacial.Cohete = Cohete;
})(Espacial || (Espacial = {}));
//npm install -g typescript
//tsc -init
//tsc -w
//npm install -s @types jquery
//tsc -out ./dist/appfull.js Destinos.ts Cohete.ts Nasa.ts Subsidiaria.ts app.ts
