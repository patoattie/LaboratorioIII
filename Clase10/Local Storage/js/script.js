persona = 
{
    nombre: "Pepe",
    edad: 44,
};

localStorage.setItem("persona", JSON.stringify(persona));
console.log(localStorage.getItem("persona"));
console.log(JSON.parse(localStorage.getItem("persona")));