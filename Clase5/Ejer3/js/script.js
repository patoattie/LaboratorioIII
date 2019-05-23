var boton;
addEventListener("load", function()
{
    boton = document.getElementById("btnRun");
    boton.addEventListener("click", ejecutar, false);
}, false);

function ejecutar()
{
    var div = document.getElementById("miDiv");
    var primerHijo = div.firstElementChild; //Retorna el primer hijo de tipo elemento
    var ultimoHijo = div.lastElementChild; //Retorna el ultimo hijo de tipo elemento
    //var hermano = primerHijo.nextElementSibling; //Retorna el proximo hermano de tipo elemento. Si no encuentra devuelve null.

    //console.log(primerHijo);
    //console.log(primerHijo.childNodes[0].nodeValue); //nodeValue solamente se puede usar en nodos de tipo texto
    //console.log(primerHijo.textContent); //valor del nodo de tipo texto que depende del nodo de tipo elemento

    /*while (primerHijo)
    {
        console.log(primerHijo);
        primerHijo = primerHijo.nextElementSibling;
    }*/

    while (ultimoHijo)
    {
        ultimoHijo.textContent = ultimoHijo.textContent + ".......";
        ultimoHijo = ultimoHijo.previousElementSibling;
    }

    //console.log(primerHijo);
    //console.log(ultimoHijo);
    //console.log(hermano);
}