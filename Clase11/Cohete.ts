namespace Espacial
{
    export class Cohete
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
}

//npm install -g typescript
//tsc --init
//tsc -w
//npm install -s @types jquery
//tsc --outFile ./dist/appfull.js Destinos.ts Cohete.ts Nasa.ts Subsidiaria.ts app.ts