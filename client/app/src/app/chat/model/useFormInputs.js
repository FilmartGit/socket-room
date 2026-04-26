import { useState } from "react";

// Создание и отправка сообщения
// Отправка параметров комнаты и имени пользователя для присоединения к комнате на сервере
// Вывод входящих сообщений

export function useFormInputs(params, socket) {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  // Добавление выбранного эмодзи к сообщению
  const onEmojiClick = ({ emoji }) => {
    setMessage(`${message} ${emoji}`);
  };

  // Отправка сообщения на сервер и очистка поля ввода
  const sendMessage = () => {
    if (!message) return;
    socket.emit("sendMessage", { message, params });
    console.log("DEBUG")
    console.log("EMIT")
    console.log(message)
    console.log(params)
    setMessage("");
  };

  return {
    message,
    setMessage,
    showEmojiPicker,
    toggleEmojiPicker,
    onEmojiClick,
    sendMessage,
  };
}
