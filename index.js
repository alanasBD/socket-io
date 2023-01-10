const express = require("express");
const app = express();

const http = require("http");
const expressServer = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New user connected ...");

  setTimeout(() => {
    socket.send("Hi,I am from server");
  }, 5000);

  //   socket.on("disconnect", () => {
  //     console.log("User disconnected...");
  //   });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000, () => {
  console.log("Server is running...");
});
