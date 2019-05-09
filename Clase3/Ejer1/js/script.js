//var formulario;

window.addEventListener('load', inicializarEventos); //Manejador para el evento load de la página.

function inicializarEventos()
{
    //a) formulario = document.getElementById('idformulario');
    //b) formulario = document.getElementsByTagName('form')[0];
    //c)formulario = document.forms[0];
    //  formulario.addEventListener('submit');
    
    document.forms[0].addEventListener('submit', manejarSubmit); //forma más performante de atrapar el evento submit.
}

function manejarSubmit(e)
{
    e.preventDefault(); //Bloquea el comportamiento por defecto de un evento.
    var informacion = "";
    informacion += "Nombre: " + document.getElementById('txtNombre').value + "<br>";
    informacion += "Contraseña: " + document.getElementById('txtClave').value;

    if (document.getElementById('chkCss').checked) //si checked es true es que está chequeado.
    {
        informacion += "<br>Sabe CSS";
    }
    else
    {
        informacion += "<br>No sabe CSS";
    }

    if (document.getElementById('chkJs').checked) //si checked es true es que está chequeado.
    {
        informacion += "<br>Sabe JS";
    }
    else
    {
        informacion += "<br>No sabe JS";
    }

    if (document.getElementById('chkHtml').checked) //si checked es true es que está chequeado.
    {
        informacion += "<br>Sabe HTML";
    }
    else
    {
        informacion += "<br>No sabe HTML";
    }

    if (document.getElementById('rdoMasculino').checked) //si checked es true es que está chequeado.
    {
        informacion += "<br>Sexo Masculino";
    }
    else
    {
        informacion += "<br>Sexo Femenino";
    }

    document.getElementById('info').innerHTML = informacion;
}