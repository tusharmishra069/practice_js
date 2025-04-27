const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value.trim();
  
  if (message !== "") {
    // Create message bubble
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);

    // Clear input
    messageInput.value = "";

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Dummy reply
    setTimeout(() => {
      const replyDiv = document.createElement('div');
      replyDiv.classList.add('message');
      replyDiv.style.background = '#ffd6d6';  
      replyDiv.textContent =  generateReply(message);
      chatBox.appendChild(replyDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}

// Dummy reply generator
function generateReply(userMessage) {
  const replies = [
    "That's interesting!",
    "Tell me more!",
    "I see!",
    "Wow, really?",
    "Sounds good!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}
