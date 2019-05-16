function Saludar()
{
    //alert("Hola Mundo"); //Si es un metodo de la clase window, se puede omitir dicha clase
    //document.write("<h1>Hola Mundo</h1>");
    //document.getElementById("p1").innerHTML = "Hola Mundo";
    //console.log("Hola Mundo");

    var cadena = "Hola Mundo";
    var x = 23;
    var pi = 3.14;
    var b = true;
    var c2 = new String();
    var arr = []; //array literal
    var arr2 = new Array(); //array mediante constructor
    var obj = {nombre:"Juan", edad:34}; //objeto literal
    var fecha = new Date(); //fecha
    var f = function sumar()
    {
        return 20;
    }
    var noExiste;

    console.log(typeof cadena); //string
    console.log(typeof x); //number
    console.log(typeof pi); //number
    console.log(typeof b); //boolean
    console.log(typeof c2); //object
    console.log(typeof arr); //object
    console.log(typeof arr2); //object
    console.log(typeof obj); //object
    console.log(typeof fecha); //object
    console.log(typeof noExiste); //undefined
}

var x = function (nombre)
{
    alert("Hola " + nombre);
}; //funcion anonima con delegado (x)

//(function(nombre) {alert("Hola " + nombre)})("Julio"); //funcion autoinvocada.

var unaFuncion = new Function("a", "b", "return a + b"); //funcion constructora

function f1 (a, b)
{
    //if (!b) //Si b es undefined entonces valida la comparacion como false
    if (typeof b != "number")
    {
        b = 1;
    }
    return a * b;
}

function f2 ()
{
    console.log(arguments);
}

//alert(unaFuncion(6, 7));
//alert(f1(4,"2"));
//f2(23, "juan", true, -5);

/*var v1;
var v2 = null;
console.log(v1 == v2); //true
console.log(v1 === v2); //false
*/

/*var persona1 = {};
var persona2 = new Object();

persona1.nombre = "Juan";
persona1.Saludar = function()
{
    return "Hola, soy " + this.nombre;
};

//alert(persona1.Saludar());

var persona3 = {nombre:"Jose", apellido:"Perez"};
console.log(persona3.apellido + ", " + persona3.nombre);
*/

/*function Persona(nombre, apellido, edad) //Constructor del objeto Persona
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Persona.prototype.DNI = 1234; //Agrego un parametro a nivel de "clase" (prototype)

var persona1 = new Persona("Jose", "Perez", 39);
var persona2 = new Persona("Ana", "Gomez", 28);
var persona3 = new Persona("Oscar", "Garcia", 55);
var prop = "apellido";
console.log(persona1.apellido + ", " + persona1.nombre + " - Edad: " + persona1.edad);
console.log(persona2[prop] + ", " + persona2["nombre"] + " - Edad: " + persona2["edad"]);

for(propiedad in persona3)
{
    console.log(propiedad + ": " + persona3[propiedad]);
}
persona3.localidad = "Avellaneda";
console.log(Object.keys(persona3));
console.log(Object.keys(persona3).length);
console.log(Object.keys(persona2));
console.log(Object.keys(persona2).length);
*/

//Manejador de eventos viejo
/*window.onload = function()
{
    function cambiarTexto(e)
    {
        e.target.innerHTML = "Otro parrafo";
    }
    
    var parrafo = document.getElementsByTagName("p")[0];
    
    parrafo.onclick = cambiarTexto;
}*/

//Manejador de eventos estandar W3C
addEventListener("load", asignarManejadores, false); //es de la clase window, mismo criterio que alert

//true -> Encadenamiento de eventos natural (de padre a hijos descendente y luego de hijo a padre ascendente)
//false -> Encadenamiento de eventos corto (de hijo a padre ascendente solamente)

function asignarManejadores()
{
    document.getElementById("p1").addEventListener("click", cambiarTexto, false);
    document.getElementById("div1").addEventListener("click", cambiarColor, false);
    document.getElementsByTagName("body")[0].addEventListener("click", cambiarColorFondo, false);
    document.getElementById("p1").addEventListener("dblclick", resetearTexto, false);
}

function cambiarTexto(e)
{
    //e.target.innerHTML = "Otro parrafo";
    alert("p");
}

function resetearTexto(e)
{
    e.target.innerHTML = "Esto es un parrafo";
    e.target.style.color = "black";
    e.target.style.backgroundColor = "white";
}

function cambiarColor(e)
{
    e.target.style.color = "green";
    alert("div");
}

function cambiarColorFondo(e)
{
    e.target.style.backgroundColor = "red";
    alert("body");
}
