import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Отправка параметров комнаты и имени пользователя для присоединения к комнате на сервере
// Вывод входящих сообщений

export function useChat(search, socket) {
  const [params, setParams] = useState(null);
  const [usersRoom, setUsersRoom] = useState([]);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const logOut = () => {
    socket.emit("logout", { params: params });
    navigate("/");
  };

  // получение параметров из url и отправка их на сервер для присоединения к комнате
  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, [search, socket]);

  // сохранение входящих сообщений в состоянии
  useEffect(() => {
    socket.on("message", ({ data }) => {
      setMessages((prev) => {
        if (prev.message !== data.message) {
          return [...prev, data];
        }
      });
    });
    socket.on("joinRoom", ({ users }) => {
      setUsersRoom(users);
    });
  }, [socket]);

  return {
    params,
    messages,
    usersRoom,
    logOut,
  };
}
