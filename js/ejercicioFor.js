//Crear un programa que muestre si un día es fin de semana
//
//
//
//
// TO-DO

/*
for(var i = 1; i < 10; i++){
    console.log(i);
}

var daysOfTheWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

for (var i = 0; i < daysOfTheWeek.length; i++){
    console.log(daysOfTheWeek[i]);
} */


//Crear una programa que devuelva la operación pedida

var num1 = parseInt(prompt("Primer número?"));
var sign = prompt("Signo?");
var num2;
var result;


do {
    num2 = parseInt(prompt("Segundo número?"))
} while (sign === "/" && num2 === 0);   // la idea sería poner la condición de repregunta acá, para que se itere la respuesta antes de llegar al resultado

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



