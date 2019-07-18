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
