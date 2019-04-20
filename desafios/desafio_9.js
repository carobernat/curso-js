
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
    //$(this) => event.target en vanilla
    emailHelp.text("");
    email.removeClass('is-invalid is-valid');
})


/*
$(document).ready(function(){
  Esto es para que la función se ejecute una vez que carga el dom
});

$(document).on('click', function(){
    Esto es para eventos custom
})

$(document).one('click', function(){
   Esto es para que se ejecute una sóla vez
})

*/








