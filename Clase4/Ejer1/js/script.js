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
