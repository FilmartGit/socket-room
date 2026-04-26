import { useEffect, useState } from "react";
import io from "socket.io-client";

// Отправка параметров комнаты и имени пользователя для присоединения к комнате на сервере
// Вывод входящих сообщений

const socket = io("http://localhost:5000");

export function useChat(search) {
  const [params, setParams] = useState(null);
  const [messages, setMessages] = useState([]);

  // получение параметров из url и отправка их на сервер для присоединения к комнате
  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, [search]);

  // сохранение входящих сообщений в состоянии
  useEffect(() => {
    socket.on("message", ({ data }) => {
      setMessages((prev) => [...prev, data]);
    });
  }, []);

  return {
    params,
    messages,
  };
}
