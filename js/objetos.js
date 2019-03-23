
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
