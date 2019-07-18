var Espacial;
(function (Espacial) {
    var Nasa = (function () {
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
