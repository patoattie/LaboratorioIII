addEventListener("load", asignarManejadores, false);

function asignarManejadores()
{
    document.getElementById("btnGetPersona").addEventListener("click", traerPersona, false);
}

function traerPersona()
{
    var txtNombre = document.getElementById("txtNombre");
    var txtApellido = document.getElementById("txtApellido");
    var txtEdad = document.getElementById("txtEdad");
    var personas = [];
    var lista = "";

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
            info.innerHTML = "";
            if(this.status == 200) // Estado OK
            {
                personas = JSON.parse(this.responseText); //Respuesta de texto del servidor (JSON), lo convierto a objeto

                for(var i in personas)
                {
                    info.innerHTML += "<p>" + personaToString(personas[i]) + "</p>";
                }
            }
        }
        else
        {
            info.appendChild(spinner);
        }
};

    xhr.open("GET", "http://localhost:3000/traerPersonas", true); // true para que sea asincronico, debe ir el protocolo en forma explicita
    xhr.send(); //se envia la peticion al servidor
}

function personaToString(persona)
{
    var cadena = "";

    for(var prop in persona)
    {
        cadena += "<b>" + prop + ":</b> " + persona[prop] + " ";
    }

    return cadena;
}