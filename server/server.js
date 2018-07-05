const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "/../public");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.emit("newMessage", {
    from: "James",
    text: "yo",
    createdAt: 1223
  });

  socket.on("createMessage", (message) => {
    console.log("create message", message);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected from server.");
  });
});

server.listen(port, () => {
  console.log("Server running on port", port);
});
