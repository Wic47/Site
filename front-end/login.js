const username = document.getElementById("username");
const form = document.getElementById("login");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("username", username.value);
  window.location.href = "chat.html";
});
