$(document).ready(function() {
    $('button').on('click', function(){
        $(this).parentsUntil('tbody').fadeOut(2000, function () {
            $(this).remove()
        })
    });
});
