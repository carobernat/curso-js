
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

*/

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



































