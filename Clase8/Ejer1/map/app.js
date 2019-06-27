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

//map no modifica el array original
var nombres = personas.map(traerNombre);

//reemplaza a la forma detallada
var n = personas.map(p => p.nombre);

function traerNombre(persona)
{
    return persona.nombre;
}

console.log(nombres);

console.log(personas.map(p => p.nombre));
