var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Destinos;
(function (Destinos) {
    Destinos[Destinos["marte"] = 0] = "marte";
    Destinos[Destinos["luna"] = 1] = "luna";
})(Destinos || (Destinos = {}));
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
var Espacial;
(function (Espacial) {
    var Nasa = /** @class */ (function () {
        function Nasa(director, creacion) {
            this.director = director;
            this.creacion = creacion;
            this.cohetes = [];
        }
        Nasa.prototype.agregarCohete = function (rocket) {
            this.cohetes.push(rocket);
        };
        Nasa.prototype.lanzarCohete = function (rocket) {
            rocket.launch();
        };
        return Nasa;
    }());
    Espacial.Nasa = Nasa;
})(Espacial || (Espacial = {}));
var Espacial;
(function (Espacial) {
    var Subsidiaria = /** @class */ (function (_super) {
        __extends(Subsidiaria, _super);
        function Subsidiaria(director, creacion, nombre) {
            var _this = _super.call(this, director, creacion) || this;
            _this.nombre = nombre;
            return _this;
        }
        return Subsidiaria;
    }(Espacial.Nasa));
    Espacial.Subsidiaria = Subsidiaria;
})(Espacial || (Espacial = {}));
var laNasa = new Espacial.Nasa("John Smith", 1945);
var unCohete = new Espacial.Cohete("Apolo XI", 100000000);
laNasa.agregarCohete(unCohete);
laNasa.lanzarCohete(unCohete);
function f1(a, b) {
    return a + b;
}
var unaFuncion;
unaFuncion = f1;
console.log(unaFuncion(15, " pepe"));
//npm install -g typescript
//tsc --init
//tsc -w
//npm install -s @types jquery
//tsc --outFile ./dist/appfull.js Destinos.ts Cohete.ts Nasa.ts Subsidiaria.ts app.ts
