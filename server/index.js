const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const route = require("./route/route");
const { getRoomUsers, removeUser } = require("./constants/users");
const { joinToRoom } = require("./services/join-to-room");
const { sendMessage } = require("./services/send-message");
const { logout } = require("./services/logout");
app.use(cors({ origin: "*" }));
app.use(route);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// прослушивание события "connection" от клиента
io.on("connection", (socket) => {
  // прослушивание события "join" от клиента
  socket.on("join", ({ roomId, userName }) => {
    joinToRoom(socket, io, roomId, userName);
  });

  // прослушивание события "sendMessage" от клиента
  socket.on("sendMessage", ({ message, params }) => {
    sendMessage(socket, io, params, message);
  });

  // прослушивание события "logout" от клиента
  socket.on("logout", ({ params }) => {
    logout(socket, io, params);
  });

  io.on("disconnect", () => {
    console.log("Пользователь отключился");
  });
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
