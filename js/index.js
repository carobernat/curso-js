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

