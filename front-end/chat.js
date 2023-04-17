const chat = document.getElementById("chat");
const button = document.getElementById("send");
const form = document.querySelector("form");
const start = document.querySelector(".container-container");
const textruta = document.querySelector(".text");
const container = document.querySelector(".text-container"); 
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

function loading() {
    let loading = "";
    let interval = setInterval(() => {
        loading += ".";
        if (loading === ".....") {
            loading = "";
        };
        textruta.innerHTML = loading;
    },350);
    return interval;
}

function toggleChat() {
    chat.toggleAttribute("disabled");
    button.toggleAttribute("disabled");
}


let messages = []
form.addEventListener("submit", function(e) {
    e.preventDefault();
    start.style.display = "none";
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

