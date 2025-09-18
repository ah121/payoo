const pin = 2;
// active btn reuseable function
function activeButton(buttonId, infoId) {
  document
    .querySelectorAll(".show")
    .forEach((el) => el.classList.remove("show"));
  document
    .querySelectorAll(".active")
    .forEach((el) => el.classList.remove("active"));

  document.getElementById(buttonId).classList.add("active");
  document.getElementById(infoId).classList.add("show");
}
// update balance reuseable function
function updateBalance({ accountId, amountId, pinId, action }) {
  const account = Number(document.getElementById(accountId).value);
  const amount = Number(document.getElementById(amountId).value);
  const pinNum = Number(document.getElementById(pinId).value);
  const mainBalanceEl = document.getElementById("main-balance");
  const mainBalance = Number(mainBalanceEl.innerText);
  if (account.length < 1) {
    alert("Please enter a valid account number.");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  if (pinNum !== pin) {
    alert("You entered the wrong PIN.");
    return;
  }
  let newBalance;
  if (action === "add") {
    newBalance = mainBalance + amount;
  } else {
    if (amount > mainBalance) {
      alert("Insufficient funds.");
      return;
    }
    newBalance = mainBalance - amount;
  }
  mainBalanceEl.innerText = newBalance;
  document.getElementById(accountId).value = "";
  document.getElementById(amountId).value = "";
  document.getElementById(pinId).value = "";
}
// add money info
document.getElementById("addMoney").addEventListener("click", function (e) {
  activeButton("addMoney", "add-money-info");
});
// cash out info
document.getElementById("cashOut").addEventListener("click", function (e) {
  activeButton("cashOut", "cashout-info");
});
// transfer money info
document
  .getElementById("transferMoney")
  .addEventListener("click", function (e) {
    activeButton("transferMoney", "transfer-info");
  });
// get bonus
document.getElementById("getBonus").addEventListener("click", function (e) {
  activeButton("getBonus", "bonus-info");
});
// pay bills
document.getElementById("payBills").addEventListener("click", function (e) {
  activeButton("payBills", "bill-info");
});
// transation history
document
  .getElementById("trans-history")
  .addEventListener("click", function (e) {
    activeButton("trans-history", "transaction-info");
  });
// Add money btn
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    updateBalance({
      accountId: "bank-acct",
      amountId: "add-amount",
      pinId: "pin-num",
      action: "add",
    });
  });
// Cash out btn
document.getElementById("cashout-btn").addEventListener("click", function (e) {
  updateBalance({
    accountId: "agent-acct",
    amountId: "cashout-amount",
    pinId: "cashout-pin",
    action: "substract",
  });
});
// transfer btn
document.getElementById("send-btn").addEventListener("click", function (e) {
  updateBalance({
    accountId: "transfer-acct",
    amountId: "transfer-amount",
    pinId: "transfer-pin",
    action: "substract",
  });
});
// get bonus btn
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  console.log("bonus button clicked");
});
// bill btn
document.getElementById("bill-btn").addEventListener("click", function (e) {
  updateBalance({
    accountId: "pay-acct",
    amountId: "pay-amount",
    pinId: "pay-pin",
    action: "substract",
  });
});
// transaction history btn
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  console.log("bonus button clicked");
});
