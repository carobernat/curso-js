
/* Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre o apellido, si lo encuentra
deberá devolver la posición en el Array del alumno, en caso contrario -1. La función solo encuentra coincidencias exactas,
por ejemplo encuentra Fernandez, pero no Fer o fernandez.
Probar que funcione correctamente. */


var studentsList = [
    {
        firstName: 'Juan',
        lastName: 'Pérez',
        dni: 45678987
    },
    {
        firstName: 'Ana',
        lastName: 'Fernandez',
        dni: 45678989
    },
    {
        firstName: 'Pedro',
        lastName: 'Mármol',
        dni: 45678956
    },
    {
        firstName: 'Pablo',
        lastName: 'Picapiedras',
        dni: 45678983
    }
]

var name = prompt("Cuál es tu nombre?");
var lastName = prompt("Cuál es tu apellido?");
var studentPosition = searchStudent(name, lastName, studentsList)

function searchStudent(studentName, studentLastName, studentArray){

    var studentPos = -1;

for (var i = 0; i < studentArray.length; i++) {

    if(studentName === studentArray[i].firstName && studentLastName === studentArray[i].lastName){

        studentPos = studentArray[i];
        break;
    }
}
    return studentPos;
    }

console.log(studentPosition);
