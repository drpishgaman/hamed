function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const correctUsername = "admin";
  const correctPassword = "1234";

  if (username === correctUsername && password === correctPassword) {
    window.location.href = "home.html"; // انتقال به صفحه اصلی
  } else {
    document.getElementById("error").textContent = "نام کاربری یا رمز عبور اشتباه است.";
  }
}
