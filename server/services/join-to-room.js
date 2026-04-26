const { addUser, getRoomUsers } = require("../constants/users");

const joinToRoom = (socket, io, roomId, userName) => {
  // присоединение к комнате
  socket.join(roomId);

  // в production здесь должна быть логика: проверка и добавление пользователя в БД
  const { user, isExist } = addUser({ userName: userName, roomId: roomId });

  const userMessage = isExist ? "С возвращением" : "Вы присоединились к чату";
  // отправка в ответ пользователю
  socket.emit("message", {
    data: { user: { name: "Admin" }, message: userMessage },
  });

  // отправка всем пользователям комнаты, кроме текущего
  socket.broadcast.to(roomId).emit("message", {
    data: {
      user: { name: "Admin" },
      message: `${userName} присоединился к чату`,
    },
  });

  io.to(roomId).emit("joinRoom", { users: getRoomUsers(roomId) });
};

module.exports = {
  joinToRoom,
};
