//Armar una tabla con los datos del array persona

addEventListener("load", leerEventos, false);

function leerEventos()
{
    var boton = document.getElementById("btnCargar");
    boton.addEventListener("click", crearTabla, false);
}

function crearTabla()
{
    var div = document.getElementById("info");
    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1px");
    div.appendChild(tabla);
    crearCabecera(tabla);
    crearDetalle(tabla);
}

function crearCabecera(tabla)
{
    var filaCabecera = document.createElement("tr");
    var atributo;
    var columna;
    var texto;
    tabla.appendChild(filaCabecera);
    for(atributo in personas[0])
    {
        columna = document.createElement("th");
        filaCabecera.appendChild(columna);
        texto = document.createTextNode(atributo);
        columna.appendChild(texto);
    }
}

function crearDetalle(tabla)
{
    for(var i = 0; i < personas.length; i++)
    {
        var filaCabecera = document.createElement("tr");
        var atributo;
        var columna;
        var texto;
        tabla.appendChild(filaCabecera);
        for(atributo in personas[i])
        {
            columna = document.createElement("td");
            filaCabecera.appendChild(columna);
            texto = document.createTextNode(personas[i][atributo]);
            columna.appendChild(texto);
        }
    }
}