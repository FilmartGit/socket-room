const { TrimString } = require('../utils/trims');

let users = [];

const addUser = (user) => {
  const userName = TrimString(user.userName);
  const userRoom = TrimString(user.roomId);
  const existingUser = users.find(
    (u) => u.userName === userName && u.roomId === userRoom,
  );

  !existingUser && users.push({ ...user, userName, roomId: userRoom });

  const currentUser = existingUser || user;

  return { isExist: !!existingUser, user: currentUser };
};

module.exports = {
  addUser,
};
