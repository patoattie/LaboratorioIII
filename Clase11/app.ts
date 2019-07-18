let laNasa = new Espacial.Nasa("John Smith", 1945);
let unCohete = new Espacial.Cohete("Apolo XI", 100000000);

laNasa.agregarCohete(unCohete);
laNasa.lanzarCohete(unCohete);

function f1(a:number, b:string):string
{
    return a + b;
}

let unaFuncion:(a:number, b:string)=>string;

unaFuncion = f1;

console.log(unaFuncion(15, " pepe"));

//npm install -g typescript
//tsc --init
//tsc -w
//npm install -s @types jquery
//tsc --outFile ./dist/appfull.js Destinos.ts Cohete.ts Nasa.ts Subsidiaria.ts app.ts