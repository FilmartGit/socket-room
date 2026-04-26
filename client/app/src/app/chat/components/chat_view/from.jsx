import UIInputs from "../../../../ui/inputs";
import styles from "../../style/chat.module.css";
import SmilePicker from "./smile_picker";
import UIButtons from "../../../../ui/buttons";
import { useFormInputs } from "../../model/useFormInputs";

export default function ChatForm({ params, socket }) {
  const {
    message,
    setMessage,
    showEmojiPicker,
    toggleEmojiPicker,
    onEmojiClick,
    sendMessage,
  } = useFormInputs(params, socket);
  return (
    <div className={styles.chat_form}>
      <UIInputs.Input
        placeholder="Введите сообщение..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.chat_form_input}
      />

      <SmilePicker
        showEmojiPicker={showEmojiPicker}
        toggleEmojiPicker={toggleEmojiPicker}
        onEmojiClick={onEmojiClick}
      />

      <UIButtons.SendMessage onClick={sendMessage} />
    </div>
  );
}
