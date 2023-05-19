const button = document.querySelector(".hero-button");

if (localStorage.getItem("username") === null) {
  button.href = "login.html";
} else {
  button.href = "chat.html";
}
