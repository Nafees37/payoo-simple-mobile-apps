// Cash Out Button

document.getElementById("cash-out-btn")
  .addEventListener("click", function () {
    document.getElementById("cashout-form").classList.remove("hidden");
    document.getElementById("addMoney-form").classList.add("hidden");
  });


// Add Money Button

document.getElementById("add-money-btn")
  .addEventListener("click", function () {
    document.getElementById("addMoney-form").classList.remove("hidden");
    document.getElementById("cashout-form").classList.add("hidden");
  });