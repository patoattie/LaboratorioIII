var personas = [
    {
        nombre = "Juan",
        edad = 20
    },
    {
        nombre = "Pedro",
        edad = 30
    },
];

var vec = [4,3,6,5,7,9,11,8,10];

/*var pares = [];

for(var i = 0; i < vec.length; i++)
{
    if(vec[i] % 2 == 0)
    {
        pares.push(vec[i]);
    }
}*/

//si el callback devuelve true, el elemento pertenece al array, sino no
var pares = vec.filter(function (elemento)
{
    return (elemento % 2 == 0);
});

console.log(pares);

console.log(personas.filter(function (p) {
    return p.nombre === "Juan";
}));
