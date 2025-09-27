const pin = 2;
const transHistory = [];
// transaction history
function allHistory(transId) {
  const indHistory = {
    transId: transId,
    date: new Date().toLocaleTimeString(),
  };
  transHistory.push(indHistory);
  return indHistory;
}
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
    const historyAll = document.getElementById("historyCont");
    historyAll.innerHTML = "";
    for (const data of transHistory) {
      const div = document.createElement("div");
      div.innerHTML = `<div
            action=""
            class="p-5 bg-white rounded-xl border-2 shadow-2xl border-gray-200 mb-4"
          >
            <div class="flex gap-3">
              <img
                src="./assets/wallet1.png"
                alt=""
                class="bg-gray-100 rounded-full p-4"
              />
              <div class="flex justify-between items-center w-full">
                <div class="flex flex-col gap-2">
                  <h1>${data.transId}</h1>
                  <h4>${data.date}</h4>
                </div>
                <div>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </div>
          </div>`;
      historyAll.appendChild(div);
    }
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
    allHistory("Add Money");
  });
// Cash out btn
document.getElementById("cashout-btn").addEventListener("click", function (e) {
  updateBalance({
    accountId: "agent-acct",
    amountId: "cashout-amount",
    pinId: "cashout-pin",
    action: "subtract",
  });
  allHistory("Cash Out");
});
// transfer btn
document.getElementById("send-btn").addEventListener("click", function (e) {
  updateBalance({
    accountId: "transfer-acct",
    amountId: "transfer-amount",
    pinId: "transfer-pin",
    action: "subtract",
  });
  allHistory("Transfer Money");
});
// get bonus btn
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  allHistory("Get Bonus");
});
// bill btn
document.getElementById("bill-btn").addEventListener("click", function (e) {
  updateBalance({
    accountId: "pay-acct",
    amountId: "pay-amount",
    pinId: "pay-pin",
    action: "subtract",
  });
  allHistory("Pay Bill");
});
// transaction history btn
document.getElementById("trans-btn").addEventListener("click", function (e) {
  console.log("bonus button clicked");
});
