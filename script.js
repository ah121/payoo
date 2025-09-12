// login button function
document.getElementById("login-btn").addEventListener("click", function () {
  const mob = 1;
  const pin = 2;
  const mobNum = parseInt(document.getElementById("mob-num").value);
  const pinNum = parseInt(document.getElementById("pin-num").value);
  console.log(mobNum, pinNum);
  if (mobNum === mob && pinNum === pin) {
    window.location.href = "./home.html";
  } else {
    alert("Your login information is not correct");
    document.getElementById("mob-num").value = "";
    document.getElementById("pin-num").value = "";
  }
});
