const chat = document.getElementById("chat");
const button = document.getElementById("send");
const form = document.querySelector("form");
const start = document.querySelectorAll(".container-container");
const textruta = document.querySelector(".text");
const container = document.querySelector(".text-container"); 
const newChat = document.querySelector(".new")
const newChat2 = document.getElementById("new-phone")
function delayedTyping(s) {;
    let i = 0;
    let time = 50;
    let interval = setInterval(() => {
        const char = s[i];
        textruta.innerHTML += char;
        i++;
        if (i >= s.length) {
            clearInterval(interval);
        };
    }, time);
}

function toggleChat() {
    chat.toggleAttribute("disabled");
    button.toggleAttribute("disabled");
}

newChat.addEventListener("click", (e) => {
    chat.value = ""
    container.innerHTML = ""
    start[0].style.display = "flex"
    let messages = []
    messages.length = 0
    chat.disabled = false
    button.disabled = false
})

newChat2.addEventListener("click", (e) => {
    chat.value = ""
    container.innerHTML = ""
    start[1].style.display = "flex"
    let messages = []
    messages.length = 0
    chat.disabled = false
    button.disabled = false
})

window.addEventListener("resize", e => {
    if (window.innerWidth > 600) {
        start[0].style.display = "flex"
        start[1].style.display = "none"
    }
    else if (window.innerWidth <= 600) {
        start[0].style.display = "none"
        start[1].style.display = "flex"
    }
    if (container.innerHTML !== "") {
        start[0].style.display = "none"
        start[1].style.display = "none"
    }
})

let messages = []
form.addEventListener("submit", function(e) {
    e.preventDefault();
    start[0].style.display = "none"
    start[1].style.display = "none"
    container.insertAdjacentHTML("beforeend",
    `<div class="text">
    <img id="user" src="bilder/open-ai.png" alt="profilbild">
    <p>${chat.value}</p>
    </div>`);
    const newMessage = {"role" : "user", "content" : `${chat.value}`}
    messages.push(newMessage)
    chat.value = "";
    toggleChat();
    fetch("http://localhost:5000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messages
        })      
    })
    .then(res => res.json())
    .then(data => {
        let newResponse = {"role": "assistant", "content": `${data.completion.content}`}
        console.log(data.completion.content)
        messages.push(newResponse)
        chat.value = ""
        container.insertAdjacentHTML("beforeend",
        `<div class="text">
        <img id="user" src="bilder/open-ai.png" alt="profilbild">
        <p>${data.completion.content}</p>
        </div>`);
        toggleChat()
    })
})

