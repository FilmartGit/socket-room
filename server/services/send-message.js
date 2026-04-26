const { findUser } = require('../constants/users');

const sendMessage = (socket, io, params, message) => {
  const user = findUser(params);

    if (user) {
      io.to(user.roomId).emit("message", {
        data: {
          user: { name: user.userName },
          message: message,
        },
      });
    } else {
      socket.emit("message", {
        data: { user: { name: "Admin" }, message: `Ошибка соединения` },
      });
    }
};

module.exports = {
  sendMessage,
};
