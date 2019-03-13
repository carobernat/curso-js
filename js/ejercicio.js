var gender = prompt("Género: Sos hombre, mujer o indefinido?").toLowerCase();
var age = parseInt(prompt("Cuántos años tenés?"));

if (age < 18 && gender === "mujer") {
    alert("Srta. Usted es menor de edad y no puede ingresar");
} else if (age >= 18 && gender === "mujer") {
    alert("Srta. Usted es mayor de edad y puede ingresar");
} else if (age < 18 && gender === "hombre") {
    alert("Sr. Usted es menor de edad y no puede ingresar.");
} else if (age >= 18 && gender === "hombre") {
    alert("Sr. Usted es mayor de edad y puede ingresar");
} else if (age >= 18 && gender === "indefinido") {
    alert("Usted es mayor de edad y puede ingresar")
} else if (age < 18 && gender === "indefinido") {
    alert("Usted es menor de edad y no puede ingresar")
} else {
    alert("Todos los datos son necesarios")
}
