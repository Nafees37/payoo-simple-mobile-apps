document.getElementById("cash-out-button")
  .addEventListener("click", function (event) {

    event.preventDefault();

    let cashOut = document.getElementById("cash-out").value;
    let int_cashOut = parseFloat(cashOut);

    let cashPin = document.getElementById("cash-pin").value;

    let add_payment = document.getElementById("payment").innerText;
    let int_addPayment = parseFloat(add_payment);


    if (int_cashOut <= 0 || int_cashOut > int_addPayment || isNaN(int_cashOut)) {

      alert("Please Enter Your Money, Try Again....");
      return;

    }


    if (cashPin === "1234") {

      let newPayment = int_addPayment - int_cashOut;

      document.getElementById("payment").innerText = newPayment;

    }

    else {
      alert("Please Try Again");
    }


    document.getElementById("cash-out").value = "";
    document.getElementById("cash-pin").value = "";

  });