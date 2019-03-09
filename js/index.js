/*
Calculadora

var num1 = parseInt(prompt("Primer número"));
var sign = prompt("Operación");
var num2 = parseInt(prompt("Segundo número?"));

switch(sign) {
    case "+":
        alert(num1 + num2);
        break;
    case "-":
        alert(num1 - num2);
        break;
    case "*":
        alert(num1 * num2);
        break;
    case "/":
        alert(num1 / num2);
        break;
    default:
        alert("No pusiste ningún signo válido!")
}

Ejercicio switch:

var day = prompt("Qué día querés chequear?").toUpperCase()

switch(day) {
    case "LUNES":
    case "MARTES":
    case "MIERCOLES":
    case "JUEVES":
    case "VIERNES":
        alert("El día ingresado es hábil");
        break;
    case "SABADO":
    case "DOMINGO":
        alert("El día ingresado no es hábil");
        break;
    default:
        alert("El dato ingresado no es válido");
        break;
}
*/

var gender = prompt("Are you male or female?").toLowerCase();
var age = parseInt(prompt("How old are you?"));
var isOldEnough = true;

if (age < 18 && gender === "female") {
    alert("Srta. Usted es menor de edad y no puede ingresar");
} else if (age > 18 && gender === "female") {
    alert();
} else if (age < 18 && gender === "male") {
    alert();
} else if (age > 18 && gender === "male") {
    alert();
} else {
    console.log("Every input is needed")
}




