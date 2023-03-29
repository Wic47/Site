let collapse = document.getElementById("collapse");
let aside = document.querySelector("aside");
let aside2 = document.querySelector(".aside2")
collapse.addEventListener("click", function() {
    aside.style.display = "none";
    aside2.style.display = "flex"
})

collapse2.addEventListener("click", function() {
    aside.style.display = "flex";
    aside2.style.display = "none"
})
