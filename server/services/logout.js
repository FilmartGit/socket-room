const { findUser, getRoomUsers } = require("../constants/users");

const logout = (socket, io, params) => {
  removeUser(params);

  // отправка всем пользователям комнаты, кроме текущего
  io.to(params.roomId).emit("message", {
    data: {
      user: { name: "Admin" },
      message: `${params.userName} покинул чат`,
    },
  });

  io.to(params.roomId).emit("joinRoom", {
    users: getRoomUsers(params.roomId),
  });
};

module.exports = {
  logout,
};
