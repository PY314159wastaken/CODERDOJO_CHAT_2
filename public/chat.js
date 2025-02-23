function on_click() {
    console.log("clicked")
    username = document.getElementById("username").value
    console.log("L0GGED IN AS", username)
    document.querySelector("#chat_container").classList.remove("hidden")
    document.querySelector("#login_container").classList.add("hidden")
    document.querySelector("#username_indicator").innerHTML = username
}
async function chat(){
    let message = document.querySelector("#chatbox").value
    let response = await fetch('/api/chat',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            message: message})
    })
    loadChat()
}
let username = null
async function loadChat() {
    let chatResponse = await fetch('/api/chat',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    let messages = await chatResponse.json()
    let chatContainer = document.getElementById('chat')
    chatContainer.innerHTML = ''
    for(let message of messages) {
        let messageEl = document.createElement('p')
        messageEl.innerHTML = `<b>${message.user}:</b> ${message.message}`
        chatContainer.appendChild(messageEl)
    }
}
setInterval(loadChat, 1000)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login_button").onclick = on_click
    document.getElementById("chat_submit").onclick = chat
    loadChat()
})
console.log("azertyuiopmlkjhgfds")