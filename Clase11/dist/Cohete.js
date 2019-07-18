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
//C:\TEST\pattie\LaboratorioIII\Clase11>C:\TEST\pattie\node-v12.3.1-win-x64\npm install -s @types jquery
//tsc -out ./dist/appfull.js Destinos.ts Cohete.ts Nasa.ts Subsidiaria.ts app.ts
