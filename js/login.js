document.getElementById("login-button")
  .addEventListener("click", function (event) {

    event.preventDefault();

    let phoneNumber = document.getElementById("phone-number").value;
    let pinNumber = document.getElementById("pin-number").value;

    if (phoneNumber === "017" && pinNumber === "1234") {

      window.location.href = "home.html";

    } else {
      alert("Please Enter Your Phone OR Pin Number");
    }

  });