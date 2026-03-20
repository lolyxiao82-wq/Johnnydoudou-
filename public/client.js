// client.js

// WebSocket connection setup
const socket = new WebSocket('ws://example.com');

// UI elements
const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const messagesContainer = document.getElementById('messagesContainer');

// Send message on button click
sendMessageButton.addEventListener('click', function() {
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
});

// Receive messages
socket.onmessage = function(event) {
    const newMessage = document.createElement('div');
    newMessage.innerText = event.data;
    messagesContainer.appendChild(newMessage);
};

// Handle socket close
socket.onclose = function(event) {
    console.log('Connection closed:', event);
};

// Handle socket errors
socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};
