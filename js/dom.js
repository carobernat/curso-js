/*
var div = document.createElement('div'); //crea un nodo de html
var h1 = document.createElement('h1');

h1.textContent = "blahalblab"; //le agrega contenido de texto al nodo

document.body.append(div); //agrega el nodo al body del documento
div.append(h1); //se le agrega un h1 al div


var fruits = ["pera", "melon", "banana"];

for (var i = 0; i < fruits.length; i++) {       // por cada elemento del array crea un h1
    var h1 = document.createElement('h1');
    h1.textContent = fruits[i];
    document.body.append(h1);
}


Crear y agregar nodos en una lista
Usar los métodos y propiedades vistos en clase para crear tres nodos <li> con distintos nombres adentro, agregarles a cada
uno la clase list-group-item y agregarlos a la lista provista uno por uno.

<ul id="mainList" class="list-group">
  <!-- Elementos de la lista -->
</ul>

*/

var texts = ['Ed', 'Edd', 'Eddy' ];

var ul = document.createElement('ul');
document.body.append(ul);
ul.className = "list-group";

for(var i = 0; i < texts.length; i++){
    var li = document.createElement('li');
    li.textContent = texts[i];
    ul.appendChild(li);
    li.className = "list-group-item";
}

