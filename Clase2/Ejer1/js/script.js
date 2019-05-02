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

    document.getElementById('info').innerHTML = informacion;
}