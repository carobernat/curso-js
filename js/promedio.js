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
