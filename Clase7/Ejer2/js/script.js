window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {

    document.getElementById('getPersonas').addEventListener('click', traerPersonasJQ, false);

    document.forms[0].addEventListener('submit', e => {
        e.preventDefault();
        agregarPersonaJQ(newPersona());
    }, false);

    document.forms[1].addEventListener('submit', e => {
        e.preventDefault();
        modificarPersona(newPersona());
    }, false);

    document.forms[2].addEventListener('submit', e => {
        e.preventDefault();
        eliminarPersona(newPersona());
    }, false);

}

function agregarPersona(persona) {
    var info = document.getElementById('sep');

    var personaRta;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                personaRta = JSON.parse(xhr.responseText);

                document.getElementById('id').value = personaRta.id;
                document.getElementById('nombre').value = personaRta.nombre;
                document.getElementById('apellido').value = personaRta.apellido;
                document.getElementById('edad').value = personaRta.edad;

                info.innerHTML = " ";

                //traerPersonas();

            }

        }
        else
        {
            info.appendChild(ponerSpinner()); //mientras no responde positivo muestra manejador
        }

    };

    xhr.open('POST', 'http://localhost:3000/altaPersona', true); //abre la conexion( metodo , URL, que sea asincronico y no se quede esperando el retorno)

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));

    // con POST LOS DATOS PASAR POR SEND
}

function modificarPersona(persona) {
    var info = document.getElementById('sepm');

    var personaRta;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                personaRta = JSON.parse(xhr.responseText);

                document.getElementById('idm').value = personaRta.id;
                document.getElementById('nombrem').value = personaRta.nombre;
                document.getElementById('apellidom').value = personaRta.apellido;
                document.getElementById('edadm').value = personaRta.edad;

                info.innerHTML = " ";

                //traerPersonas();

            }

        }
        else
        {
            info.appendChild(ponerSpinner()); //mientras no responde positivo muestra manejador
        }

    };

    xhr.open('POST', 'http://localhost:3000/modificarPersona', true); //abre la conexion( metodo , URL, que sea asincronico y no se quede esperando el retorno)

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));

    // con POST LOS DATOS PASAR POR SEND
}


function newPersona(formulario) {
    var persona = {};
    persona.nombre = document.getElementById('txtNombre').value;
    persona.apellido = document.getElementById('txtApellido').value;
    persona.edad = document.getElementById('txtEdad').value;
    return persona;
}

function traerPersonas() {

    var personas = [];

    var info = document.getElementById('info');
    var xhr = new XMLHttpRequest();
    info.innerHTML = "";

    xhr.onreadystatechange = function() {

        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                personas = JSON.parse(xhr.responseText);

                info.innerHTML = "";
                for (var i in personas) {
                    info.innerHTML += "<p>" + personaToString(personas[i]) + "</p>";
                }

            } else {
                console.log("error: " + xhr.status);
            }

        } else {
            info.appendChild(ponerSpinner()); //mientras no responde positivo muestra manejador
        }

    };

    xhr.open('GET', 'http://localhost:3000/traerPersonas', true); //abre la conexion( metodo , URL, que sea asincronico y no se quede esperando el retorno)
    xhr.send(); // con POST LOS DATOS PASAR POR SEND


}

function personaToString(persona) {
    var cadena = '';
    for (var prop in persona) {
        cadena += "<b>" + prop + "</b> : " + persona[prop] + " ";
    }
    return cadena;
}

function ponerSpinner() {
    var spinner = document.createElement('img');
    spinner.setAttribute('src', 'image/preloader.gif');
    spinner.setAttribute('alt', 'spinner');

    return spinner;
}

function traerPersonasJQ()
{
    $.get("http://localhost:3000/traerPersonas", 
    function(data, status)
    {
        console.log(data);
        console.log(typeof data);
        //console.log(status);

        var objPersona = JSON.parse(data);
        console.log(objPersona);
        console.log(typeof objPersona);
    });
}

function agregarPersonaJQ(persona) {
    //var info = document.getElementById('sep');

    var personaRta;

    /*var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                personaRta = JSON.parse(xhr.responseText);

                document.getElementById('id').value = personaRta.id;
                document.getElementById('nombre').value = personaRta.nombre;
                document.getElementById('apellido').value = personaRta.apellido;
                document.getElementById('edad').value = personaRta.edad;

                info.innerHTML = " ";

                //traerPersonas();

            }

        }
        else
        {
            info.appendChild(ponerSpinner()); //mientras no responde positivo muestra manejador
        }

    };

    xhr.open('POST', 'http://localhost:3000/altaPersona', true); //abre la conexion( metodo , URL, que sea asincronico y no se quede esperando el retorno)

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));*/

    // con POST LOS DATOS PASAR POR SEND

    $.ajax({
        url: 'http://localhost:3000/altaPersona',
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify(persona),
        beforeSend: function()
        {
            $("#sep").spinner({redius: 3, width: 2, height: 2, length: 4});
        },
        success: function(info)
        {
            console.log(info);

            $('#id').attr("value", personaRta.id);
            $('#nombre').attr("value", personaRta.nombre);
            $('#apellido').attr("value", personaRta.apellido);
            $('#edad').attr("value", personaRta.edad);
    },
        error: function(xhr, estado, error)
        {
            console.log(estado);
            console.log(error);
        },
        complete: function(xhr, estado)
        {
            console.log(estado);
            $("#sep").html(" "); //Limpio el spinner
        },
        timeout: 10000,
    });
}
