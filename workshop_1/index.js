

(function () {

    var inputs = document.getElementsByTagName("input");
    var name = document.getElementById("name");
    var submit = document.getElementById("submit");
    var dni = document.getElementById("dni");

    console.log("HOLA");
    console.log(typeof inputs);

    Object.keys(inputs).forEach (function(index){
        console.log(inputs[index].value);
    })



    function validateDni(event) {
        var dniOK = true;
        var dniNode = event.target;


        var docNumber = parseInt(dni.value);

        if (isNaN(docNumber) || docNumber < 0) {
            dni.classList.add("is-invalid");
            dniOK = false;
        } else {
            dni.classList.add("is-valid");
        }
    }

    console.log('nameEl', name)
    console.log('dniEl', dni)

    function validateName(event) {


        var nameOk = true;
        var nameNode = event.target;


        console.log(event)
        console.log(event.target)

        if (name.value === "" || name.value === null || name.value === 'ale') {
            name.classList.add("is-invalid");
            nameOk = false;
        } else {
            name.classList.add("is-valid");
        }
    }

    function resetStatus(event) {
        var dniNode = event.target;
        dniNode.value.clear;
        dni.classList.remove("is-invalid", "is-valid");
    }



    name.onblur = validateName;

    dni.onblur = validateDni;
    dni.onclick = resetStatus;



})()

