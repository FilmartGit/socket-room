// Логика работы формы вынесена в кастомный хук, чтобы не загромождать компонент Main
// и позволить расширять ее в дальнейшем по мере необходимости

import { useEffect, useState } from "react";

export default function useForm() {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState({ room: false, user: false });

  // убрать ошибку через 2 секунды
  useEffect(() => {
    if (error.room || error.user) {
      setTimeout(() => {
        setError({ room: false, user: false });
      }, 2000);
    }
  }, [error]);

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  // обработка отправки формы
  const handleClick = (e) => {
    if (roomId?.length > 0 && userName?.length > 0) {
    } else {
      e.preventDefault();
      setError({ room: roomId?.length === 0, user: userName?.length === 0 });
    }
  };

  return {
    handleRoomIdChange,
    handleUserNameChange,
    handleClick,
    roomId,
    userName,
    error,
  };
}
