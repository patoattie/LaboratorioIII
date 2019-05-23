var boton;
addEventListener("load", function()
{
    boton = document.getElementById("btnRun");
    boton.addEventListener("click", ejecutar, false);
}, false);

function ejecutar()
{
    var parrafo = document.getElementById("p1");
    var nodoTexto = document.createTextNode("Hola mundo");
    parrafo.appendChild(nodoTexto); //Agrega un nodo hijo

    console.log(parrafo.childNodes.length);
}