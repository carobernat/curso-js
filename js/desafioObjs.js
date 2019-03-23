/*
Crear una función constructora de objetos Student
Crear una función que permita crear un objeto Student mediante el constructor new, el objeto deberá tener las siguientes propiedades:
Publicas:
firstName
lastName
dni
email
Privadas:
id generada automáticamente al crear el objeto.
El objeto deberá tener las siguientes métodos:
Públicos:
getId deberá devolver el id del objeto
getFullName deberá devolver un String con el nombre completo del objeto, salvando los casos donde el firstName olastName sea undefined.
Crear tres alumnos usando los datos de prueba y probar sus métodos.
*/

var studentList = [];

function Student(firstName, lastName, dni, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;

    var id = getRandomInt(20);

    this.fullName = function(){
        if(firstName !== undefined || lastName !== undefined ){
            return firstName + " " + lastName;
        } else {
            return null;
        }
    }

    this.getId = function() {
        return id;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

studentList.push(new Student("Ezequiel", "Sosa", 32421169, "eze@gmail.com"));
studentList.push(new Student("Damian", "Zucchi", 31727993, "dami@gmail.com"));
studentList.push(new Student("Carolina", "Bernat", 35349062, "caro@gmail.com"));


for(var i = 0; i < studentList.length; i++) {
    console.log("El id del estudiante " + studentList[i].fullName() + " es " + studentList[i].getId());
}

/*
DRY!!
var studentA = new Student("Ezequiel", "Sosa", 32421169, "eze@gmail.com");
var studentB = new Student("Damian", "Zucchi", 31727993, "dami@gmail.com");
var studentC = new Student("Carolina", "Bernat", 35349062, "caro@gmail.com");

studentList.push(studentA, studentB, studentC);

console.log("El id del estudiante " + studentA.fullName() + " es " + studentA.getId());
console.log("El id del estudiante " + studentB.fullName() + " es " + studentB.getId());
console.log("El id del estudiante " + studentC.fullName() + " es " + studentC.getId());
*/






