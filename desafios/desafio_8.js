var email = document.getElementById('email');
var emailHelp = document.getElementById('emailHelp');

email.onblur = verifyEmail;
email.onclick = resetStatus;

function verifyEmail(event){
    var emailNode =  event.target;
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailNode.value))
    {
        email.classList.add("is-valid");
        emailHelp.innerText = "El mail ingresado es válido.";

    } else {
        email.classList.add("is-invalid");
        emailHelp.innerText = "El mail ingresado es inválido.";
    }
}

function resetStatus(event) {
    var emailNode = event.target;
    emailNode.value.clear;
    emailHelp.innerText = "";
    email.classList.remove("is-invalid", "is-valid");
}



