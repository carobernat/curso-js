
//---------------------Crear una función que permita buscar un alumno [Pieza del Workshop I]--------------------------//
/* Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre o apellido, si lo encuentra
deberá devolver la posición en el Array del alumno, en caso contrario -1. La función solo encuentra coincidencias exactas,
por ejemplo encuentra Fernandez, pero no Fer o fernandez.
Probar que funcione correctamente.

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

var name = prompt("Ingrese el nombre el estudiante");
var lastName = prompt("Ingrese el apellido del estudiante");
var studentPos = -1;

function searchStudent(studentName, studentLastName, studentsArray){

    for (var i = 0; i < studentsArray.length; i++) {

        if(studentName === studentsArray[i].firstName && studentLastName === studentsArray[i].lastName){

            studentPos = i;
            break;
        }
    }
    return studentPos;
}

searchStudent(name, lastName, studentsList);

if (studentPos > 0) {
    console.log("La posición del estudiante es: " + studentPos);
} else {
    console.log("No se han encontrado resultados");
}

*/
