addEventListener("load", asignarManejadores, false);
var personas = [];
var personaSeleccionada = [];

function asignarManejadores()
{
    document.getElementById("btnGetPersona").addEventListener("click", traerPersona, false);
    document.getElementById("btnAltaPersona").addEventListener("click", altaPersona, false);
    document.getElementById("btnEditarPersona").addEventListener("click", editarPersona, false);
}

function traerPersona()
{
    var txtNombre = document.getElementById("txtNombre");
    var txtApellido = document.getElementById("txtApellido");
    var txtEdad = document.getElementById("txtEdad");
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
                crearTabla();
                crearFormulario();

                document.getElementById("btnGetPersona").removeAttribute("disabled", "");
                document.getElementById("btnAltaPersona").removeAttribute("disabled", "");
                //document.getElementById("btnEditarPersona").removeAttribute("disabled", "");
            }
        }
        else
        {
            document.getElementById("btnGetPersona").setAttribute("disabled", "");
            document.getElementById("btnAltaPersona").setAttribute("disabled", "");
            document.getElementById("btnEditarPersona").setAttribute("disabled", "");
            info.appendChild(spinner);
        }
    };

    xhr.open("GET", "http://localhost:3000/traerPersonas", true); // true para que sea asincronico, debe ir el protocolo en forma explicita
    xhr.send(); //se envia la peticion al servidor

    //return personas;
}

function crearTabla()
{
    var div = document.getElementById("info");
    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1px");
    tabla.style.borderCollapse = "collapse"
    tabla.setAttribute("id", "tablaPersonas");
    div.appendChild(tabla);
    crearCabecera(tabla);
    crearDetalle(tabla);
}

function crearFormulario()
{
    var div = document.getElementById("info");
    var formulario = document.createElement("form");
    var grupo = document.createElement("fieldset");
    var leyenda = document.createElement("legend");
    var tabla = document.createElement("table");
    var botonAceptar = document.createElement("input");
    var botonCancelar = document.createElement("input");

    formulario.setAttribute("action", "#");
    formulario.setAttribute("id", "formularioPersonas");
    formulario.style.display = "none";
    div.appendChild(formulario);
    formulario.appendChild(grupo);
    grupo.appendChild(leyenda);
    grupo.appendChild(tabla);
    leyenda.textContent = "Persona";

    for(var atributo in personas[0])
    {
        var fila = document.createElement("tr");
        var columnaEtiqueta = document.createElement("td");
        var columnaTexto = document.createElement("td");
        var etiqueta = document.createElement("label");
        var atributoCapitalizado = atributo.charAt(0).toUpperCase() + atributo.slice(1).toLowerCase(); //Primer letra en mayuscula, resto minuscula
        var cuadroTexto = document.createElement("input");

        tabla.appendChild(fila);
        fila.appendChild(columnaEtiqueta);
        fila.appendChild(columnaTexto);
        etiqueta.setAttribute("for", "txt" + atributoCapitalizado);
        etiqueta.textContent = atributoCapitalizado + ": ";
        cuadroTexto.setAttribute("type", "text");
        cuadroTexto.setAttribute("id", "txt" + atributoCapitalizado);

        columnaEtiqueta.appendChild(etiqueta);
        columnaTexto.appendChild(cuadroTexto);
    }

    botonAceptar.setAttribute("type", "button");
    botonAceptar.setAttribute("id", "btnAceptar");
    botonAceptar.value = "Aceptar";
    botonCancelar.setAttribute("type", "button");
    botonCancelar.setAttribute("id", "btnCancelar");
    botonCancelar.value = "Cancelar";
    botonCancelar.addEventListener("click", ocultarFormulario, false);
    grupo.appendChild(botonAceptar);
    grupo.appendChild(botonCancelar);
}

function crearCabecera(tabla)
{
    var filaCabecera = document.createElement("tr");
    var columna;
    var texto;
    tabla.appendChild(filaCabecera);
    for(var atributo in personas[0])
    {
        columna = document.createElement("th");
        columna.textContent = atributo;
        filaCabecera.appendChild(columna);
    }
}

function crearDetalle(tabla)
{
    for(var i = 0; i < personas.length; i++)
    {
        var filaDetalle = document.createElement("tr");
        var atributo;
        var columna;
        var radio;
        var texto;
        filaDetalle.addEventListener("click", pintarFila, false);
        tabla.appendChild(filaDetalle);

        for(atributo in personas[i])
        {
            columna = document.createElement("td");
            columna.setAttribute("class", atributo);
            columna.textContent = personas[i][atributo];
            filaDetalle.appendChild(columna);
        }
    }
}

function pintarFila()
{
    var atributo;

    document.getElementById("btnEditarPersona").removeAttribute("disabled", "");
    blanquearFilas();
    
    this.setAttribute("class", "filaSeleccionada");
    atributo = this.firstElementChild;

    do
    {
        personaSeleccionada[atributo.getAttribute("class")] = atributo.childNodes[0];
        atributo = atributo.nextElementSibling;
    } while(atributo != null);
}

function blanquearFilas()
{
    var filaPintada = document.getElementsByClassName("filaSeleccionada");

    for(var i = 0; i < filaPintada.length; i++)
    {
        filaPintada[i].removeAttribute("class");
    }
}

function altaPersona()
{
    document.getElementById("btnAltaPersona").setAttribute("disabled", "");
    document.getElementById("btnEditarPersona").setAttribute("disabled", "");

    document.getElementById("tablaPersonas").style.display = "none";
    document.getElementById("formularioPersonas").style.display = "initial";

    mostrarFormulario();
}

function editarPersona()
{
    document.getElementById("btnAltaPersona").setAttribute("disabled", "");
    document.getElementById("btnEditarPersona").setAttribute("disabled", "");

    document.getElementById("tablaPersonas").style.display = "none";
    document.getElementById("formularioPersonas").style.display = "initial";

    mostrarFormulario(personaSeleccionada);
}

function mostrarFormulario()
{
    var datos;

    if(typeof arguments[0] == "object")
    {
        datos = arguments[0];
    }

    for(var atributo in personas[0])
    {
        var atributoCapitalizado = atributo.charAt(0).toUpperCase() + atributo.slice(1).toLowerCase(); //Primer letra en mayuscula, resto minuscula

        if(typeof datos == "object")
        {
            document.getElementById("txt" + atributoCapitalizado).value = datos[atributo].nodeValue;

            if(atributo === "id")
            {
                document.getElementById("txt" + atributoCapitalizado).setAttribute("readonly", "");
            }
        }
        else
        {
            document.getElementById("txt" + atributoCapitalizado).value = "";
        }
    }
}

function ocultarFormulario()
{
    document.getElementById("btnAltaPersona").removeAttribute("disabled");
    document.getElementById("btnEditarPersona").removeAttribute("disabled");

    blanquearFilas();

    document.getElementById("tablaPersonas").style.display = "table";
    document.getElementById("formularioPersonas").style.display = "none";
}