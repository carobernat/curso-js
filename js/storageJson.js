/*
/!*
var list = "['Eddie', 'Dami']"; // Así lo toma como array

localStorage.setItem('list', list);


var isLogged = localStorage.getItem('isLogged');

if(isLogged) {
    console.log("Usuario logeado! " + isLogged);
    var destroy = prompt("Logout?");
    if (destroy === "si") {
        localStorage.removeItem("isLogged");  // Remueve el registro isLogged
    }
} else {
    var user = prompt("Cuál es tu usuario?");
    localStorage.setItem('isLogged', user);
}

JSON (JavaScript Object Notation) es una forma de escribir objetos de JavaScript y sus propiedades como texto plano


var person = {
    firstName: "Carolina",
    lastName: "Bernat",
    age: 29,
}

var personJson = JSON.stringify(person);   //Transforma al objeto js person en un json

console.log(person);
console.log(personJson);



var person = {
    firstName: "Carolina",
    lastName: "Bernat",
    age: 29,
}

var personJson = JSON.stringify(person);   //Transforma al objeto js person en un json
var personObj = JSON.parse(personJson);    //Transforma al json en objeto js

console.log(person);
console.log(personJson);
console.log(personObj);

var tweet = '{"author": "Caro", "tweet": {"text": "blah", "date": "30042019120001"}}';

var tweetObj = JSON.parse(tweet);
console.log(tweetObj);


// Aumentar en 1 la edad de la persona cada vez que se refresca la página

    if(localStorage.getItem('person')) {
        person = JSON.parse(localStorage.getItem('person'));

    } else {
        person = {
            firstName: "Caro",
            lastName: "Bernat",
            age: 15
        }
    }

    person.age++;
    var personJson = JSON.stringify(person);
    localStorage.setItem("person", personJson);
    console.log(person.firstName + " tiene " + person.age + " años.");

*!/

// Pide un nombre en cada refresh y lo agrega al json array en el localstorage

var names = [];

if(localStorage.getItem('names')) {
    names = JSON.parse(localStorage.getItem('names'));
}

var name = prompt("Name?");
if (names === "") {
    alert();
    } else {
        names.push(name);
    }

var namesJson = JSON.stringify(names);

localStorage.setItem('names', namesJson);

console.log(names);


*/
