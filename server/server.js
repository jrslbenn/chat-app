const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const moment = require("moment");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "/../public");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const {generateMessage, generateLocationMessage} = require("./utils/message");
const {isRealString} = require("./utils/validation");

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.on("join", (params, callback) => {
      if (!isRealString(params.name) || !isRealString(params.room)) {
          callback("Name and room name are required");
      } else {
          socket.join(params.room);
          socket.emit("newMessage", generateMessage("Admin", "Welcome to the chatroom"));
          socket.broadcast.to(params.room)
            .emit("newMessage", generateMessage("Admin", `${params.name} has joined`));
      }
  });

  socket.on("createMessage", (message, callback) => {
    io.emit("newMessage", generateMessage(message.from, message.text));
    callback();
  });

  socket.on("createLocationMessage", (coords) => {
    io.emit("newLocationMessage", generateLocationMessage("Admin", coords.latitude, coords.longitude));
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected from server.");
  });
});

server.listen(port, () => {
  console.log("Server running on port", port);
});
