//jquery(document); //referencia a la página
//$(document) //$ es una abreviatura de jquery

$(document).ready(inicializarManejadores);

function inicializarManejadores()
{
    $("#miH1").click(function ()
    {
        //alert("Click en H1");
       $(this).css("color", "red");
       $(this).text("OTRO TEXTO");
       //alert($(this).text());
    });

    $("#miH1").dblclick(function ()
    {
        //alert("Click en H1");
       $(this).css("color", "black");
       $(this).text("HOLA MUNDO");
    });

    var parrafos = $("p");
    
    parrafos.click(cambiarTexto);
    $("#p3").attr("class", "rojos");

    var elementosRojos = $(".rojos");

    elementosRojos.click(function ()
    {
        $(this).css("color", "red");
    });

    $("div").html("<input type='text'>");

    alert($("#p1").attr("id"));

}

function cambiarTexto()
{
    $(this).text("Me cambiaron");
}