
var email = $('#email');
var emailHelp = $('#emailHelp');


email.blur(function (){
    var emailNode =  $(this);
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailNode.val())){
        email.addClass('is-valid');
        emailHelp.text("El mail ingresado es válido.")
    } else {
        email.addClass('is-invalid');
        emailHelp.text("El mail ingresado no es válido");
    }
})

email.click(function () {
    emailHelp.text("");
    email.removeClass('is-invalid is-valid');
})









