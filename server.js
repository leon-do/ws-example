const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  setInterval(() => {
    ws.send(Math.random().toString());
  }, 2000)
});