
var auto = {
    color: "blue",
    brand: "ford",
    model: "ka"
}

var usuario = {
    name: "Marcos",
    apellido: "Perez",
    ubicacion:{             //los objetos pueden tener objetos anidados
        lat: 124.343,
        lng: 4353.342,
    }
}


// Funciones constructoras

function Person(name, surname, age) {
    var numOld = 18;
    this.name = name; //El atributo name del objeto se va a igualar al que se le pase como parámetro name.
    this.surname = surname;
    this.age = age;

    if(age <= numOld) {
        this.isOldEnough = false;
    } else {
        this.isOldEnough = true;
    }
}

var eddie = new Person("Eddie", "Dominguez", 30);

console.log(eddie)



function Calculadora(num1, num2){
    this.num1 = num1;
    this.num2 = num2;

    function isEven(result) {
        if(num1 % 2 === 0) {
            return "Es un número par.";
        } else {
            return "Es un número impar.";
        }
    }

    this.suma = function(){
        var resSuma = num1 + num2;
        return "El resultado es: " + resSuma + ". " + isEven(resSuma);
    }

    this.resta = function(){
        var resResta = num1 - num2;
        return "El resultado es: " + resResta + ". " + isEven(resResta);    }
}

var calc = new Calculadora(43, 54);
console.log(calc);


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

students.push(studentA, studentB, studentC);

console.log("El id del estudiante " + studentA.fullName() + " es " + studentA.getId());
console.log("El id del estudiante " + studentB.fullName() + " es " + studentB.getId());
console.log("El id del estudiante " + studentC.fullName() + " es " + studentC.getId());
*/

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var personAttr = prompt("Nombre - Apellido - Edad");

var attrs = personAttr.split(' ');

var person = new Person(attrs[0], attrs[1], attrs[2]);

console.log(person);

/* Con esto, se toma el prompt como todo un string y se separa con split después.
Cada uno de esos attrs que nos dio el split se manda a una posición del array después
 */

function Videogame(title, year, console){
    var launchYear = 2000;
    this.title = title;
    this.year = year;
    this.console = console;

    if(year <= launchYear) {
        this.isRetro = true;
    } else {
        this.isRetro = false;
    }
}


var pacman = new Videogame("PacMan", "1980", "Atari");

console.log(pacman);
