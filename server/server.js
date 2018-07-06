const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "/../public");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const {generateMessage} = require("./utils/message");

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.emit("newMessage", generateMessage("Admin", "Welcome to the chatroom"));

  socket.broadcast.emit("newMessage", generateMessage("Admin", "New user joined"));

  socket.on("createMessage", (message, callback) => {
    io.emit("newMessage", generateMessage(message.from, message.text));
    callback("This is from the server");
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected from server.");
  });
});

server.listen(port, () => {
  console.log("Server running on port", port);
});
