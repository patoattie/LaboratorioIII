function ejecutar()
{
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() //0 al 4 son los estados, 4 es el estado DONE
    {
        if(this.readyState == XMLHttpRequest.DONE) //XMLHttpRequest.DONE = 4
        {
            if(this.status == 200) // Estado OK
            {
                document.getElementById("info").innerHTML = this.responseText; //Archivo de texto del servidor
            }
        }
    };

    xhr.open("GET", "localhost:3000/lista.txt", true);
}