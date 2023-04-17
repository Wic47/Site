let collapse = document.getElementById("collapse");
let aside = document.querySelector("aside");
let aside2 = document.querySelector(".aside2");
let svar = document.getElementById("chat");
let ny = document.querySelector(".new");
let info = document.querySelector(".container-container");
let ex = document.getElementsByClassName("example");
let modes = document.getElementById("modes");
let r = document.querySelector(":root");
let purchase = document.getElementById("purchase");
let upgrade = document.getElementById("upgrade");
let textc = document.querySelector(".text-container"); 
for (let i = 0; i< ex.length; i++) {
    ex[i].addEventListener("click", function() {
        svar.value = ex[i].innerHTML.replaceAll(`"`,"").replace(` →`,"");
    });
}
collapse.addEventListener("click", function() {
    aside.style.display = "none";
    aside2.style.display = "flex";
})
collapse2.addEventListener("click", function() {
    aside.style.display = "flex";
    aside2.style.display = "none";
})
ny.addEventListener("click", function() {
    info.style.display = "flex";
    svar.value = "";
    textc.innerHTML = "";
})
upgrade.addEventListener("click", function() {
    if (purchase.style.display === "flex") {
        purchase.style.display = "none";
    }
    else {
        purchase.style.display = "flex";
    };
})

let i = false;
modes.addEventListener("click", function() {
    i = !i;
    if (i) {
        r.style.setProperty("--bg","#EEEEEE");
        r.style.setProperty("--chat","#A3A3A3");
        r.style.setProperty("--info","#D6D6D6");
        r.style.setProperty("--info-hover","#B8B8B8");
        r.style.setProperty("--aside","#BBBBBB");
        r.style.setProperty("--account","#AAAAAA");
        r.style.setProperty("--account-hover","#999999");
        r.style.setProperty("--hover","#858585");
        r.style.setProperty("--new","#ADADAD");
        r.style.setProperty("--color","black");
        r.style.setProperty("--chat-color","#141414");
        r.style.setProperty("--chat-hover","#858585");
        modes.innerHTML = `<i id="mode" class="fa-solid fa-moon"></i> Dark mode`;
    }
    else {
        r.style.setProperty("--bg","#434C5E");
        r.style.setProperty("--chat","#1234");
        r.style.setProperty("--info","#333A47");
        r.style.setProperty("--info-hover","#22272F");
        r.style.setProperty("--aside","#2B303B");
        r.style.setProperty("--account","#252323");
        r.style.setProperty("--account-hover","#151414");
        r.style.setProperty("--hover","#3C4453");
        r.style.setProperty("--new","#99A3AD");
        r.style.setProperty("--color","white");
        r.style.setProperty("--chat-color","#D2D6DB");
        r.style.setProperty("--chat-hover","#1234");
        modes.innerHTML = `<i id="mode" class="fa-solid fa-sun"></i> Light mode`;
    }; 
});
