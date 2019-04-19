/*

Crear una función que compare dos textos y encuentre coincidencias parciales [Pieza del Workshop I]

Crear una función que reciba como parámetros dos string y devuelva true en caso de encontrar una coincidencia parcial y false en caso contrario,
la función no tiene que distinguir mayúsculas de minúsculas. El primer parámetro pasado a la función es el que se va a tratar de encontrarse dentro del segundo,
si alguno de los parámetros no es un string también deberá devolver false.

includesText('Pa', 'Patricia') // Deberá devolver true

includesText('Patrici', 'Pa') // Deberá devolver false

includesText(2, 'Pa') // Deberá devolver false
Hint: Se deberán pasar los parámetros recibidos a mayúsculas y luego hacer la comparación mediante indexOf para poder encontrar coincidencias parciales sin importar mayúsculas y minúsculas.




function includesText(text, baseText) {
    if(typeof text === "string" && typeof baseText === "string") {
        // if (baseText.toUpperCase().indexOf(text.toUpperCase()) !== -1) { return true; }
        // Cuando es sólo una línea se pueden usar ternarios:
        return baseText.toUpperCase().indexOf(text.toUpperCase()) !== -1 ? true : false; // Se compara con -1 porque es lo que devuelve indexof cuando no encuentra nada

        } else {

        return false;
    }
}

console.log(includesText("pa", "Patricia"));

 */
