const pin = 2;
// add money btn
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    const bank = document.getElementById("select-bank").value;
    const acctNum = document.getElementById("bank-acct").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNum = parseInt(document.getElementById("pin-num").value);
    const mainBalance = parseInt(
      document.getElementById("main-balance").innerText
    );
    if (acctNum.length !== 1) {
      alert("Please Enter Valid Account Number");
      return;
    }
    if (document.getElementById("add-amount").value === "") {
      alert("Please Enter Your Amount");
      return;
    }
    if (pinNum !== pin) {
      alert("You Enter Wrong Pin Number");
      return;
    }
    const newBalance = addAmount + mainBalance;
    document.getElementById("main-balance").innerText = newBalance;
    document.getElementById("add-amount").value = "";
  });
// cash out btn
document.getElementById("cashout-btn").addEventListener("click", function (e) {
  const acctNum = document.getElementById("bank-acct").value;
  const cashoutAmount = parseInt(document.getElementById("add-amount").value);
  const pinNum = parseInt(document.getElementById("pin-num").value);
  const mainBalance = parseInt(
    document.getElementById("main-balance").innerText
  );
});
