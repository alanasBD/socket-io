const express = require("express");
const app = express();

const http = require("http");

const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
  io.sockets.emit("MyEvent", "Hello EveryOne");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3001, () => {
  console.log("Server is running...");
});
