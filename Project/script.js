//register page
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

function submit() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  if (input1.value.length < 5 || input1.value.length === null) {
    alert(" user name Should min 5 character length");
  } else if (input2.value.length < 5 || input2.value.length === null) {
    alert(" user password Should min 5 character length");
  } else if (input3.value.length < 10 || input3.value.length === null) {
    alert(" Please Enter Massage Atlist 10 Character");
  } else if (!input1.value.match(validRegex)) {
    alert("invalid email");
  } else {
    localStorage.setItem("user", input1.value);
    localStorage.setItem("password", input2.value);
    localStorage.setItem("massege", input3.value);
    window.location.href = "pro.html";
  }
}

// Login page
const inputLogin = document.getElementById("inputLogin");
const inputLogin2 = document.getElementById("inputLogin2");

function submitLogin() {
  const userRegister = localStorage.getItem("user");
  const passwordRegister = localStorage.getItem("password");
  var rand = function () {
    return Math.random().toString(36).substr(2); // remove `0.`
  };
  var token = function () {
    return rand() + rand(); // to make it longer
  };

  if (inputLogin.value.length < 5 || inputLogin.value.length === null) {
    alert(" user name Should min 5 character length");
  } else if (
    inputLogin2.value.length < 5 ||
    inputLogin2.value.length === null
  ) {
    alert(" user password Should min 5 character length");
  } else if (
    inputLogin.value !== userRegister ||
    inputLogin2.value !== passwordRegister
  ) {
    alert("user doesn't match");
  } else {
    localStorage.setItem("token", token());
    if (token) {
      window.location.href = "home.html";
    } else if (!token) {
      window.location.href = "register.html";
    }
  }
}

function logout() {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("password");
  window.location.href = "contact.html";
}