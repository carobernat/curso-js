/*
Crea una función que permita levantar una lista del localStorage
La función tiene que recibir como parámetro una key y buscar en el localStorage por esa key devolviendo un objeto de JavaScript,
si no existe el elemento debe devolver un Array vacío. La función tiene que validar los parámetros que recibe, en caso de que
alguno sea incorrecto no debe romper ni borrar nada.
var studentsList = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]
*/

function init() {
    var studentsList = ["Caro", "Mike", "Diego", "Miguel", "Milena"];
    var studentsJson = JSON.stringify(studentsList);
    localStorage.setItem('students', studentsJson);
}

function search(key){
    var students = JSON.parse(localStorage.getItem('students'));
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if(students[i].indexOf(key) != -1) {
            result.push(students[i]);
        }
    }
    return result;
}

if(localStorage.getItem('students')){
    console.log("Ya existen registros en el localstorage.");
} else {
    init();
}

var result = search("Mi");
console.log(result);
