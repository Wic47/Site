const collapse = document.getElementById("collapse");
const aside = document.querySelector("aside");
const aside2 = document.querySelector(".aside2");
const svar = document.getElementById("chat");
const info = document.querySelectorAll(".container-container");
const ex = document.getElementsByClassName("example");
const modes = document.querySelectorAll(".modes");
const r = document.querySelector(":root");
const purchase = document.getElementById("purchase");
const upgrade = document.querySelectorAll(".upgrade");
const textc = document.querySelector(".text-container");
const closemenu = document.querySelector(".close");
const burgercontainer = document.querySelector(".borgir-container");
const burgermenu = document.getElementById("burger");
const slide_animation = document.querySelector(".slide-animation");
const fade_animation = document.querySelector(".fade-animation");
const blur = document.querySelector(".blur");

for (let i = 0; i < ex.length; i++) {
  ex[i].addEventListener("click", function () {
    svar.value = ex[i].innerHTML.replaceAll(`"`, "").replace(` →`, "");
  });
}
collapse.addEventListener("click", function () {
  aside.style.display = "none";
  aside2.style.display = "flex";
});
collapse2.addEventListener("click", function () {
  aside.style.display = "flex";
  aside2.style.display = "none";
});
upgrade.forEach((e) => {
  e.addEventListener("click", function () {
    if (purchase.style.display === "flex") {
      purchase.style.display = "none";
    } else {
      purchase.style.display = "flex";
    }
  });
});
closemenu.addEventListener("click", function () {
  slide_animation.style.setProperty("animation-name", "slide-out");
  fade_animation.style.setProperty("animation-name", "fade-out");
});
burgermenu.addEventListener("click", function () {
  burgercontainer.style.display = "flex";
  blur.style.display = "flex";
  slide_animation.style.setProperty("animation-name", "slide-in");
  fade_animation.style.setProperty("animation-name", "fade-in");
});
let animationtoggle = false;
slide_animation.addEventListener("animationend", function () {
  if (animationtoggle) {
    burgercontainer.style.display = "none";
    blur.style.display = "none";
  }
  animationtoggle = !animationtoggle;
});

let mode = false;
modes.forEach((e) => {
  e.addEventListener("click", function () {
    mode = !mode;
    if (mode) {
      r.style.setProperty("--bg", "#EEEEEE");
      r.style.setProperty("--chat", "#A3A3A3");
      r.style.setProperty("--info", "#D6D6D6");
      r.style.setProperty("--info-hover", "#B8B8B8");
      r.style.setProperty("--aside", "#BBBBBB");
      r.style.setProperty("--account", "#AAAAAA");
      r.style.setProperty("--account-hover", "#999999");
      r.style.setProperty("--hover", "#858585");
      r.style.setProperty("--new", "#ADADAD");
      r.style.setProperty("--color", "black");
      r.style.setProperty("--chat-color", "#141414");
      r.style.setProperty("--chat-hover", "#858585");
      r.style.setProperty("--text", "#dee2e6");
      modes.innerHTML = `<i id="mode" class="fa-solid fa-moon"></i> Dark mode`;
    } else {
      r.style.setProperty("--bg", "#434C5E");
      r.style.setProperty("--chat", "#1234");
      r.style.setProperty("--info", "#333A47");
      r.style.setProperty("--info-hover", "#22272F");
      r.style.setProperty("--aside", "#2B303B");
      r.style.setProperty("--account", "#252323");
      r.style.setProperty("--account-hover", "#151414");
      r.style.setProperty("--hover", "#3C4453");
      r.style.setProperty("--new", "#99A3AD");
      r.style.setProperty("--color", "white");
      r.style.setProperty("--chat-color", "#D2D6DB");
      r.style.setProperty("--chat-hover", "#1234");
      r.style.setProperty("--text", "#3123");
      modes.innerHTML = `<i id="mode" class="fa-solid fa-sun"></i> Light mode`;
    }
  });
});
