console.log(personas);
//Armar una tabla con los datos del array persona

addEventListener("load", leerEventos, false);

function leerEventos()
{
    var boton = document.getElementById("btnCargar");
    boton.addEventListener("click", cargarDatos, false);
}

function cargarDatos()
{
    var div = document.getElementById("info");
    var tabla = document.createElement("table");
    div.appendChild(tabla);
}
