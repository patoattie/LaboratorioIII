addEventListener("load", asignarManejadores, false);
var personas = [];
var personaSeleccionada = [];
var spinner = document.createElement("img");

function asignarManejadores()
{
    document.getElementById("btnGetPersona").addEventListener("click", traerPersona, false);
    document.getElementById("btnAltaPersona").addEventListener("click", altaPersona, false);
    document.getElementById("btnEditarPersona").addEventListener("click", editarPersona, false);

    crearSpinner();
}

function crearSpinner()
{
    spinner.setAttribute("src", "image/preloader.gif");
    spinner.setAttribute("alt", "Espere mientras se procesa la petición...");
    spinner.setAttribute("height", "48px");
    spinner.setAttribute("width", "48px");
    spinner.setAttribute("id", "spinner");
}

function traerPersona()
{
    var xhr = new XMLHttpRequest();
    var info = document.getElementById("info");

    info.innerHTML = "";

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

                document.getElementById("btnGetPersona").removeAttribute("disabled");
                document.getElementById("btnAltaPersona").removeAttribute("disabled");
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
}

function opcionAgregarPersona()
{
    agregarPersona(construirPersona());
}

function construirPersona()
{
    var persona = [];

    for(var atributo in personas[0])
    {
        var atributoCapitalizado = atributo.charAt(0).toUpperCase() + atributo.slice(1).toLowerCase(); //Primer letra en mayuscula, resto minuscula
        persona[atributo] = document.getElementById("txt" + atributoCapitalizado).value;
    }

    return persona;
}

function agregarPersona(persona)
{
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if (this.readyState == XMLHttpRequest.DONE)
        {
            info.innerHTML = "";
            if (this.status == 200)
            {
                crearDetalle(document.getElementById("tablaPersonas"), JSON.parse(xhr.responseText));
//console.log(JSON.parse(xhr.responseText));
            }
            else
            {
                console.log("error: " + xhr.status);
            }

        }
        else
        {
            info.appendChild(spinner);
        }

    };

    xhr.open('POST', 'http://localhost:3000/altaPersona', true); //abre la conexion( metodo , URL, que sea asincronico y no se quede esperando el retorno)
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));
console.log(JSON.stringify(persona));
    ocultarFormulario();

    // con POST LOS DATOS PASAR POR SEND
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
    crearDetalle(tabla, personas);
}

function crearFormulario()
{
    var div = document.getElementById("info");
    var formulario = document.createElement("form");
    var grupo = document.createElement("fieldset");
    var leyenda = document.createElement("legend");
    var tabla = document.createElement("table");
    var botonAgregar = document.createElement("input");
    var botonModificar = document.createElement("input");
    var botonBorrar = document.createElement("input");
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

    botonAgregar.setAttribute("type", "button");
    botonAgregar.setAttribute("id", "btnAgregar");
    botonAgregar.value = "Agregar";
    botonAgregar.addEventListener("click", opcionAgregarPersona, false);

    botonModificar.setAttribute("type", "button");
    botonModificar.setAttribute("id", "btnModificar");
    botonModificar.value = "Modificar";

    botonBorrar.setAttribute("type", "button");
    botonBorrar.setAttribute("id", "btnBorrar");
    botonBorrar.value = "Borrar";

    botonCancelar.setAttribute("type", "button");
    botonCancelar.setAttribute("id", "btnCancelar");
    botonCancelar.value = "Cancelar";
    botonCancelar.addEventListener("click", ocultarFormulario, false);

    grupo.appendChild(botonAgregar);
    grupo.appendChild(botonModificar);
    grupo.appendChild(botonBorrar);
    grupo.appendChild(botonCancelar);
}

function crearCabecera(tabla)
{
    var filaCabecera = document.createElement("tr");
    var columna;
    tabla.appendChild(filaCabecera);
    for(var atributo in personas[0])
    {
        columna = document.createElement("th");
        columna.textContent = atributo;
        filaCabecera.appendChild(columna);
    }
}

function crearDetalle(tabla, datos)
{
    for(var i = 0; i < datos.length; i++)
    {
        var filaDetalle = document.createElement("tr");
        var atributo;
        var columna;
        filaDetalle.addEventListener("click", pintarFila, false);
        tabla.appendChild(filaDetalle);

        for(atributo in datos[i])
        {
            columna = document.createElement("td");
            columna.setAttribute("class", atributo);
            columna.textContent = datos[i][atributo];
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

        document.getElementById("btnAgregar").style.display = "none";
        document.getElementById("btnModificar").style.display = "initial";
        document.getElementById("btnBorrar").style.display = "initial";
    }
    else
    {
        document.getElementById("btnAgregar").style.display = "initial";
        document.getElementById("btnModificar").style.display = "none";
        document.getElementById("btnBorrar").style.display = "none";
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

            if(atributo === "id")
            {
                document.getElementById("txt" + atributoCapitalizado).removeAttribute("readonly");
            }
        }
    }
}

function ocultarFormulario()
{
    document.getElementById("btnAltaPersona").removeAttribute("disabled");
    document.getElementById("btnEditarPersona").setAttribute("disabled", "");

    blanquearFilas();

    document.getElementById("tablaPersonas").style.display = "table";
    document.getElementById("formularioPersonas").style.display = "none";
}