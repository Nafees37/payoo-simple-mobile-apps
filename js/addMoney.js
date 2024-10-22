document.getElementById("add-button")
  .addEventListener("click", function (event) {

    event.preventDefault();

    let addMoney = document.getElementById("add-money").value;
    let int_addMoney = parseFloat(addMoney);

    let addPin = document.getElementById("add-pin").value;

    let add_payment = document.getElementById("payment").innerText;
    let int_addPayment = parseFloat(add_payment);


    if (int_addMoney <= 0 || isNaN(int_addMoney)) {

      alert("Please Enter Your Money, Try Again....");
      return;

    }

    if (addPin === "1234") {

      let newPayment = int_addMoney + int_addPayment;

      document.getElementById("payment").innerText = newPayment;

    }


    else {
      alert("Please Try Again");
    }

    document.getElementById("add-money").value = "";
    document.getElementById("add-pin").value = "";

  });