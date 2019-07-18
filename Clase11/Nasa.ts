namespace Espacial
{
    export class Nasa
    {
        director:string;
        creacion:number;
        cohetes:Cohete[];

        constructor(director:string, creacion:number)
        {
            this.director = director;
            this.creacion = creacion;
            this.cohetes = [];
        }

        agregarCohete(rocket:Cohete)
        {
            this.cohetes.push(rocket);
        }

        lanzarCohete(rocket:Cohete)
        {
            rocket.launch();
        }
    }
}
