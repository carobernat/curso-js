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

/*
Ejercicios:

var name = prompt("Cuál es tu nombre?");
var num = prompt("Qué número querés sumar?");
var num2 = 2;
var num3 = prompt("Qué número querés restar?");
var num4 = prompt("Qué número querés sumar?");
var num5 = prompt("Con qué otro número?");

console.log("Hola " + name);
console.log(parseInt(num) + num2);
console.log(parseInt(num3) - num2);
console.log(parseInt(num4) + parseInt(num5));


Calculadora:

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


/*
//===== WHILE =====
//Mientras que counter sea mayor a 0, imprime el mensaje y le resta 1.

var counter = 5;

while(counter >0) {
    console.log("Hola!");
    counter--;
}

//===== FOR ======
//Acá i vale 1, mientras que i sea menor a 10, aumentar el valor de i en 1

for(var i = 1; i < 10; i++){
    console.log(i);
}

//Acá se declara un array con los 7 días de la semana y la variable i con valor 0 (primer posición del array). Mientras i valga menos
//que la cantidad de posiciones en el array, va a imprimir el índicie del array con el mismo valor que i, y le va a sumar 1 a i.

var daysOfTheWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

for (var i = 0; i < daysOfTheWeek.length; i++){
    console.log(daysOfTheWeek[i]);
}


// Calculadora

//==== WHILE IF ====
var sign = prompt("Qué operación querés hacer?");
var isCorrect = false;          // isCorrect es false por default


while (!isCorrect){             // Si isCorrect es false
    if (sign === "+"){          // Si el signo es +, alerta y cambia el valor de isCorrect. Como pasa a true, se corta el loop.
        alert("Signo +");
        isCorrect = true;
    } else if (sign === "-"){
        alert("Signo -");
        isCorrect = true;
    } else {
        sign = prompt("Signo incorrecto");      //Si isCorrect sigue siendo false
    }
}

//==== WHILE SWITCH ====
while (!isCorrect) {
    switch (sign) {
        case "+":
        case "-":                //Se pueden evaluar dos casos en simultáneo si se va a hacer lo mismo con la respuesta
            alert("signo +");
            isCorrect = true;
            break;          //Se puede usar continue para que ignore el caso especificado y continúe con el for
        default:
            sign = prompt("Signo incorrecto");
    }
}

// === DO WHILE ===

var i = 0;

do {
    i++;
} while (i < 5);

console.log(i);

var num = 5;
var isMore = true;

do {
    var suma = parseInt(prompt("Dame un número"));
    num += suma;
    var more = parseInt(prompt("Otro más?"));

    if(more === "n"){
        isMore = false;
    }
} while (isMore);

console.log(num);



function hello(name) {
    console.log("Hola " + name + "!");
}

hello("Caro");

var names = [
    "Max", "Tom", "Barbara", "Allison"
];

for (var i = 0; i < names.length; i++) {
    hello(names[i]);
}


function suma(num1, num2) {
    return num1 + num2;
}

suma(23, 25);

*/

/*
Crear una función que calcule el promedio de un array
Debe recibir como parámetro un array de números y devolver el calculo del promedio de todos los números.
Probar la función.
 */

var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]
var average = sumArray(examResults);

function sumArray(score){
    var sumResult = 0;
    for(var i = 0; i < score.length; i++){
        sumResult += score[i];
        result = sumResult / score.length;
    }
    return result;
}

alert("El promedio de las notas del examen es: " + average);


var otherResults = [];
var stillAdd = true;

while(stillAdd) {
    var num = parseInt(prompt("Agregar números"));
    otherResults.push(num);     // para agregarle elementos a un array
    var answer = prompt("Sigue?");

    if (answer == "no") {
        stillAdd = false;
    }
}

alert(sumArray(otherResults));


/*
Crear una función que calcule el promedio de un array
Debe recibir como parámetro un array de números y devolver el calculo del promedio de todos los números.
Probar la función.
 */

var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]
var average = sumArray(examResults);

function sumArray(score){
    var sumResult = 0;
    for(var i = 0; i < score.length; i++){
        sumResult += score[i];
        result = sumResult / score.length;
    }
    return result;
}

alert("El promedio de las notas del examen es: " + average);


var otherResults = [];
var stillAdd = true;

while(stillAdd) {
    var num = parseInt(prompt("Agregar números"));
    otherResults.push(num);     // para agregarle elementos a un array
    var answer = prompt("Sigue?");

    if (answer == "no") {
        stillAdd = false;
    }
}

alert(sumArray(otherResults));



