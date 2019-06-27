var vec = [5,4,3,6,7,3,2];

var personas = [{nombre = 'Juan', edad = 20},{nombre = 'Lucia',edad = 23},{nombre = 'Pedro',edad = 30}];

/*var contador = 0;

for(var i = 0; i < vec.length; i++)
{
    contador += vec[i];
}

console.log("Total: " + contador);*/

var x = vec.reduce(function (previo, actual, indice)
{
    console.log("previo: " + previo + " actual: " + actual + " indice: " + indice);
    return previo + actual;
}, 0);

/*var totalEdad = personas.reduce(function (prev, actual)
{
    prev.total += actual.edad;
    return prev;
}, {total:0});

console.log(prev);*/
