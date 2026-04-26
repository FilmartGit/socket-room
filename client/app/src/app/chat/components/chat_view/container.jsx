import clsx from "clsx";
import style from "../../style/chat.module.css";

export default function ChatContainer({ children }) {
  return <div className={clsx(style.chat_container, "glass")}>{children}</div>;
}
