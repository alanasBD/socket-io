const { Socket } = require("dgram");
const express = require("express");
const app = express();

const http = require("http");

const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

let buyNameSpace = io.of("/buy");

buyNameSpace.on("connection", (socket) => {
  buyNameSpace.emit("MyEvent", "BuyNameSpace");
});

let sellNameSpace = io.of("/sell");

sellNameSpace.on("connection", (socket) => {
  sellNameSpace.emit("MyEvent", "SellNameSpace");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3001, () => {
  console.log("Server is running...");
});
