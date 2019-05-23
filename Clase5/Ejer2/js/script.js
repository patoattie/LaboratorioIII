var boton;
addEventListener("load", function()
{
    boton = document.getElementById("btnRun");
    boton.addEventListener("click", ejecutar, false);
}, false);

function ejecutar()
{
    var parrafo = document.getElementsByTagName("p")[0];
    //console.log(parrafo);
    var padre = parrafo.parentNode; //devuelve el nodo padre
    //console.log(padre);
    padre.style.backgroundColor = "blue";
}