var boton;
var boton2;
var contador = 1;

addEventListener("load", function()
{
    boton = document.getElementById("btnRun");
    boton.addEventListener("click", ejecutar, false);
    boton2 = document.getElementById("btnRun2");
    boton2.addEventListener("click", ejecutar2, false);
}, false);

function ejecutar()
{
    var div = document.getElementById("miDiv");
    //var parrafo = document.createElement("p"); //Creo un nodo elemento
    var enlace = document.createElement("a"); //Creo un nodo elemento
    //var nodoTexto = document.createTextNode("Esto es un parrafo dinamico");
    var nodoTexto = document.createTextNode("Ir a Google");

    //parrafo.appendChild(nodoTexto);
    enlace.appendChild(nodoTexto);
    //div.appendChild(parrafo);
    enlace.setAttribute("href", "http://www.google.com.ar"); //Agrego el atributo href
    enlace.setAttribute("target", "_blank"); //Agrego el atributo target para que abra el enlace en una nueva pestaña
    //enlace.setAttribute("class", "red");
    enlace.classList.add("red"); //Agrego varias clases a un solo elemento
    enlace.classList.add("white");
    enlace.setAttribute("id", "a" + contador);
    contador++;

    div.appendChild(enlace);
}

function ejecutar2()
{
    var enlaces = document.getElementsByTagName("a");
    /*console.log(enlace.getAttribute("href"));

    if (enlace.hasAttribute("href"))
    {
        enlace.setAttribute("class", "blue");
        enlace.removeAttribute("href"); //Remuevo el atributo href
    }

    console.log(enlace.getAttribute("href"));*/

    for (var i = 0; i < enlaces.length; i++)
    {
        enlaces[i].classList.toggle("red");
        enlaces[i].classList.toggle("white");
    }
}