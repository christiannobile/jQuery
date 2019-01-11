// Solution goes here
$(document).ready(function () {

    //click event for the submit button
    $('#send').click(function (event) {
        event.preventDefault();

        //$variabele, gebruik ik als geheugensteuntje (workflow) voor te weten dat dit een domVar is
        $displayName = $('#display-name').val();
        $pass = $('#pass').val();
        $passConfirm = $('#pass-confirm').val();
        $email = $('#email').val();

        //RegExp to check if the displayname contains at least 5 characters, contains only letters and number
        var testDisplayName = /^[a-z0-9_-]{5,16}$/;
        if (testDisplayName.test($displayName)) {
            $('#display-name').css('background-color', 'green');
        } else {
            $('#display-name').css('background-color', 'red');
            $("#mistake").show();
        }

        /*
        /^
  (?=.*\d)          // should contain at least one digit
  (?=.*[a-z])       // should contain at least one lower case
  (?=.*[A-Z])       // should contain at least one upper case
  [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
$/
*/
        //RegExp to check the password
        var testPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (testPassword.test($pass)) {
            $('#pass').css('background-color', 'green');
        } else {
            $('#pass').css('background-color', 'red');
            $("#mistake").show();
        }

        //check if the confirmPassBox = as the input for pass
        if (testPassword.test($passConfirm) && ($pass == $passConfirm)) {
            $('#pass-confirm').css('background-color', 'green');
        } else {
            $('#pass-confirm').css('background-color', 'red');
            $("#mistake").show();
        }

        //RegExp to check for valid email
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test($email)) {
            $('#email').css('background-color', 'green');
        } else {
            // color red if it fails.
            $('#email').css('background-color', 'red');
            $('#email').css('background-color', 'red');
            $("#mistake").show();
        }

    })
});

    //click event for the reset button
    $('#reset').click(function (event) {
        $('#form').css('background-color', 'inherit');
        $('#display-name').css('background-color', 'inherit');
        $('#pass').css('background-color', 'inherit');
        $('#pass-confirm').css('background-color', 'inherit');
        $('#email').css('background-color', 'inherit');
    })
