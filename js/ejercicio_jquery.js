/*
Mostrar un contandor en pantalla manejado por teclado
Crear un contador que se vaya incrementando al presionar las flechas de arriba y abajo del teclado, siguiendo la siguiente lógica:

Empezar en cero.
Si el usuario presiona Enter tiene que empezar de nuevo.
Sumar uno si el usuario presiona arriba.
Restar uno si el usuario presiona abajo.


Códigos de letras

Enter: 13
Up: 38
Down: 40
 */

$(document).ready(function() {
    var count = 0;
    var counter = $('#counter');
    var dom = $(document);

    dom.keydown(function(event) {  //Se le pasa el event
        switch (event.which) { // Se evalúa en el event qué key se está presionando
            case 13:
                count = 0;
                break;
            case 38:
                count++;
                break;
            case 40:
                count--;
                break;
        }
        counter.text(count);
    });
});
