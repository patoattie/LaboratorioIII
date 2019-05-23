var boton;
addEventListener("load", function()
{
    boton = document.getElementById("btnRun");
    boton.addEventListener("click", ejecutar, false);
}, false);

function ejecutar()
{
    var parrafo = document.getElementsByTagName("p")[0];
    console.log(parrafo);
    var div = parrafo.parentNode;
    console.log(div);
}