    $name = $('#name');
    $firstname = $('#firstname');
    $email = $('#email').val();
    $tel = $('#tel');
    $button = $('#button');
    $form = ('#form');
    $message = ('#message');

    $(document).ready(function () {
        $button.click(function (event) {

            //Validate the e-mailaddress
            $email = $('#email').val();
            //regular expression for checking e-mailaddress
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test($email)) {
                $('#messageEmail').html('You have entered a valid e-mailaddress');
            } else {
                // Do whatever if it fails.
                $('#messageEmail').html('Please enter a valid e-mailaddress');
            }
            //Validate the e-mailaddress
            $tel = $('#tel').val();
            var testPhoneNumber = /^\d+$/;
            if (testPhoneNumber.test($tel)) {
                $('#messageTel').html('You have entered a valid phone number');
            } else {
                $('#messageTel').html('Please enter a valid phonenumber');
            }
            //Validate firstname
            $firstname = $('#firstname').val();
            var testFirstname = /^[A-Za-z-]+$/;
            if (testFirstname.test($tel)) {
                $('#messageFirstname').html('You have entered a valid first name');
            } else {
                $('#messageFirstname').html('Please enter a valid first name');
            }
            //validate name
            $name = $('#name').val();
            var testName = /^[A-Za-z-]+$/;
            if (testName.test($name)) {
                $('#messageName').html('You have entered a valid firstname')
            } else {
                $('#messageName').html('Please enter a valid name');
            }
        });
    });
    /*
    telephone numbers regex: /^\d+$/
    names: /^[A-Za-z-]+$/
    */