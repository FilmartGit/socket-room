const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const route = require("./route/route");
const { addUser } = require("./constants/users");
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
    // присоединение к комнате
    socket.join(roomId);

    // в production здесь должна быть логика проверка и добавление пользователя в БД
    const user = addUser({ userName, roomId });

    // отправка в ответ пользователю
    socket.emit("message", {
      data: { user: { name: "Admin" }, message: `Вы присоединились к чату` },
    });

    // отправка всем пользователям комнаты, кроме текущего
    socket.broadcast.to(roomId).emit("message", {
      data: {
        user: { name: "Admin" },
        message: `${userName} присоединился к чату`,
      },
    });
  });

  io.on("disconnect", () => {
    console.log("Пользователь отключился");
  });
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
