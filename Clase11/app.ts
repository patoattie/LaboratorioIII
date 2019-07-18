let laNasa = new Espacial.Nasa("John Smith", 1945);
let unCohete = new Espacial.Cohete("Apolo XI", 100000000);

laNasa.agregarCohete(unCohete);
laNasa.lanzarCohete(unCohete);

function f1(a:number, b:string):string
{
    return a + b;
}

let unaFuncion:(number, string)=>string;

unaFuncion = f1;