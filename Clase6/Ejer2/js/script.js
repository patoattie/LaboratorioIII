addEventListener("load", asignarManejadores, false);

function asignarManejadores()
{
    document.forms[0].addEventListener("submit", function(e)
    {
        e.preventDefault(); //Capturamos el evento por defecto del botón submit
        capturarSubmit();
    }, false); //Hago referencia al unico formulario de la pagina
}

function capturarSubmit()
{
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var datos = "nombre=" + nombre + "&apellido=" + apellido;
    var xhr = new XMLHttpRequest();
    var info = document.getElementById("info");
    info.innerHTML = "";
    var spinner = document.createElement("img");
    spinner.setAttribute("src", "image/preloader.gif");
    spinner.setAttribute("alt", "Espere mientras se procesa la petición...");
    spinner.setAttribute("height", "48px");
    spinner.setAttribute("width", "48px");

    xhr.onreadystatechange = function() //0 al 4 son los estados, 4 es el estado DONE
    {
        if(this.readyState == XMLHttpRequest.DONE) //XMLHttpRequest.DONE = 4
        {
            if(this.status == 200) // Estado OK
            {
                info.innerHTML = this.responseText; //Archivo de texto del servidor
            }
        }
        else
        {
            info.appendChild(spinner);
        }
    };

    xhr.open("GET", "http://localhost:3000/enviarDatos?" + datos, true); // true para que sea asincronico, debe ir el protocolo en forma explicita
    xhr.send(); //se envia la peticion al servidor
}