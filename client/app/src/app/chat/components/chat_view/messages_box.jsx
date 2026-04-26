import clsx from "clsx";
import UIIcons from "../../../../ui/icons";
import styles from "../../style/chat.module.css";

export default function MessageBox({ messages, user }) {
  return (
    <div className={styles.messages_box}>
      {messages.map((message, index) => {
        const isOwnMessage =
          message.user.name.toLowerCase() === user.toLowerCase();
        return (
          <div
            key={index}
            className={
              styles.message +
              " " +
              (isOwnMessage ? styles.own_message : styles.other_message)
            }
          >
            <div className={styles.user_info}>
              <UIIcons.User className={styles.user__rounded} />

              <p className={styles.user_name}>{message.user.name}</p>
            </div>
            <div className={clsx("glass liter", styles.message_content)}>
              {message.message}
            </div>
          </div>
        );
      })}
    </div>
  );
}
