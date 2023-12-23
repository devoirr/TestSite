const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const form = document.getElementById('form');
const sendBtn = document.getElementById('sendBtn');
const messagesText = document.getElementById('messagesText');
var text = "";

text = localStorage.getItem("savedMessages");
if (text === null) {
    text = "";
}
messagesText.textContent = text;

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    text += "\n" + nameInput.value + ": " + messageInput.value;
    localStorage.setItem("savedMessages", text);
    messagesText.textContent = text;
    console.log(text);
});