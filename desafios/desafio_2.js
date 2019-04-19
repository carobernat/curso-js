// Crear un programa que muestre un mensaje personalizado
/* Pedir al usuario mediante prompt que ingrese su género y luego su edad. Luego mostrar un mensaje en consola que diga
Sr., Sra. o Sx.según corresponda y que también evalue si es mayor de edad o no al momento de construir el mensaje.
 Por ejemplo si el usuario ingresa male y 16, el mensaje debería ser Sr. usted es menor de edad no puede ingresar, si
 ingresa female y 34 el mensaje sería Sra. usted es mayor de edad puede ingresar.



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

*/
