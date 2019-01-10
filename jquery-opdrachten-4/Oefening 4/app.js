$(document).ready(function () {
    function generate() {
        name = $('#name').val();
        firstname = $('#firstname').val();
        birthdate = $('#birthdate').val();
        birthplace = $('#birthplace').val();
        workplace = $('#workplace').val();
        organisation = $('#organisation').val();
        $message = $('#message');
        $('#message').html(firstname + name + ', Geboren op ' + birthdate + ' in ' + birthplace + ' , momenteel ' + organisation + ' in ' + workplace);
    }
$('#button').click(generate);
});


/*
Voorbeeld: Als de ingevoerde gegevens zijn: 
Lesley Forn, 11/11/1987, Amsterdam, Coach, Genk
dan wordt de presentatie zin:
Lesley Forn, Geboren op 11/11/1987 in Amsterdam, momenteel een Coach in Genk.
*/