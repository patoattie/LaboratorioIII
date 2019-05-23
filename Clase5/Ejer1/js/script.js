var boton;
addEventListener("load", function()
{
    boton = document.getElementById("btnRun");
    boton.addEventListener("click", ejecutar, false);
}, false);

function ejecutar()
{
    //alert("Hola mundo");
    var lista = document.getElementById("lista"); //referencia a la lista.
    //console.log(lista.childNodes.length); //childNodes trae todos los hijos sin importar si son de tipo elemento o texto
    //console.log(lista.childElementCount); //childElementCount trae la cantidad de hijos de tipo elemento
    //console.log(lista.children.length); //children trae solo los hijos de tipo elemento
    //console.log(lista.childNodes); //childNodes trae todos los hijos sin importar si son de tipo elemento o texto
    //console.log(lista.children); //children trae solo los hijos de tipo elemento

    var hijos = lista.childNodes;
    for (var i = 0; i < hijos.length; i++)
    {
        //console.log(hijos[i].nodeType); //devuelve un define de la clase Node. 1->ELEMENT_NODE 3->TEXT_NODE 8->COMMENT_NODE
        if(hijos[i].nodeType == Node.ELEMENT_NODE)
        {
            console.log(hijos[i]);
        }
    }
}