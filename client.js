const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on("message", msg => {
  console.log(msg.toString());
})