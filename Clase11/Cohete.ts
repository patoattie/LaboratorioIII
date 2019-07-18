class Cohete
{
    nombre:string;
    precio:number;
    destino:typeof Destinos[0];

    constructor(nombre:string, precio:number)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.destino = Destinos[Destinos.luna];
    }

    launch()
    {
        console.log("Lanzando el cohete " + this.nombre + " con destino a " + this.destino);
    }
}

//C:\TEST\pattie\LaboratorioIII\Clase11>C:\TEST\pattie\node-v12.3.1-win-x64\npm install -s @types jquery
//tsc -out ./dist/appfull.js Destinos.ts Cohete.ts Nasa.ts Subsidiaria.ts app.ts