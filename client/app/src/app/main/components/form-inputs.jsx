import clsx from "clsx";
import UIButtons from "../../../ui/buttons";
import UIInputs from "../../../ui/inputs";
import styles from "../style/main.module.css";
import useForm from "../model/useForm";

export default function FormInputs() {
  const {
    handleRoomIdChange,
    handleUserNameChange,
    handleClick,
    roomId,
    userName,
    error,
  } = useForm();

  return (
    <div className={clsx(styles.form)}>
      <UIInputs.GroupeInput
        title="ID комнаты"
        id="roomId"
        name="roomId"
        placeholder="Введите ID комнаты"
        onChange={handleRoomIdChange}
        error={error.room}
        required
      />
      <UIInputs.GroupeInput
        title="Имя пользователя"
        id="userName"
        name="userName"
        placeholder="Введите имя пользователя"
        onChange={handleUserNameChange}
        error={error.user}
        required
      />
      <UIButtons.Send
        to={`/chat?roomId=${roomId}&userName=${userName}`}
        onClick={handleClick}
      />
    </div>
  );
}
