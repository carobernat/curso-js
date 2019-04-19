
/*
Crear una programa que devuelva la operación pedida
* El programa debe:
* Pedir la operación a realizar.
* Pedir el primer parámetro y pedir el segundo, en caso de haber elegido división y cero volver a pedir el segundo parámetro hasta que ingrese un numero distinto de cero


var num1 = parseInt(prompt("Primer número?"));
var sign = prompt("Signo?");
var num2;
var result;


do {
    num2 = parseInt(prompt("Segundo número?"))
} while (sign === "/" && num2 === 0);

switch (sign) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Todos los datos son necesarios";
}

alert(result);

*/
