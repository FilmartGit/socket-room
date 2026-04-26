const { TrimString } = require("../utils/trims");

let users = [];

const findUser = (user) => {
  const userName = TrimString(user.userName);
  const userRoom = TrimString(user.roomId);
  return users?.length > 0
    ? users.find(
        (u) =>
          TrimString(u.userName) === userName &&
          TrimString(u.roomId) === userRoom,
      )
    : false;
};

const addUser = (user) => {
  const existingUser = findUser(user);

  !existingUser &&
    users.push({
      ...user,
      userName: user.userName,
      roomId: user.roomId,
    });

  const currentUser = existingUser || user;

  return { isExist: !!existingUser, user: currentUser };
};

const removeUser = (user) => {
  users = users.filter((u) => u.userName !== user.userName);
};

const getRoomUsers = (roomId) => {
  return users.filter((u) => TrimString(u.roomId) === TrimString(roomId));
}

module.exports = {
  addUser,
  findUser,
  getRoomUsers,
  removeUser
};
