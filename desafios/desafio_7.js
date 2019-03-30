/*
Crear una función que cree un nodo alumno [Pieza del Workshop I]

Crear una función que reciba como parámetro un objeto alumno y devuelva como resultado un nodo <li> con los datos del alumno.

var studentNode = createStudentNode(newStudent)
Resultado ejemplo:

<li class="list-group-item" id="22999333">
  <h1>
    Juan Peréz
  </h1>
  <h3>
    DNI: 22999333
  </h3>
  <p>
    E-mail: juan@gmail.com
  </p>
</li>
*/

var student = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
}

var ul = document.createElement('ul');
document.body.append(ul);
ul.className = "list-group";


function createStudentNode(studentObject) {
    var li = document.createElement('li');
    li.className = "list-group-item";
    li.id = studentObject.dni;

    var h1 = document.createElement('h1');
    h1.textContent = studentObject.firstName + " " + studentObject.lastName;
    li.appendChild(h1);

    var h3 = document.createElement('h3');
    h3.textContent = "DNI: " + studentObject.dni;
    li.appendChild(h3);

    var p = document.createElement('p');
    p.textContent = "EMAIL: " + studentObject.email;
    li.appendChild(p);

    return li;
}

ul.appendChild(createStudentNode(student));
