function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const correctUsername = "0067237207";
  const correctPassword = "H123456m";

  if (username === correctUsername && password === correctPassword) {
    localStorage.setItem("isLoggedIn", "true"); // ذخیره وضعیت ورود
    window.location.href = "home.html";
  } else {
    document.getElementById("error").textContent = "نام کاربری یا رمز عبور اشتباه است.";
  }
}
