import { Link } from "react-router-dom";
import UIIcons from "./icons";

const UIButtons = {
  Send: ({ to, onClick }) => {
    return (
      <Link to={to} className="button_send_link" onClick={onClick}>
        <button className="button_send">Войти</button>
      </Link>
    );
  },
  Logout: ({ onClick }) => {
    return (
      <div className="button_logout_link" onClick={onClick}>
        <button className="button_logout">
          <span>Выйти</span> <UIIcons.Logout />
        </button>
      </div>
    );
  },
  SendMessage: ({ onClick }) => {
    return (
      <div className="button_send_box" onClick={onClick}>
        <button className="button_send_message">
          <span>Отправить</span>
          <UIIcons.SendMessage />
        </button>
      </div>
    );
  },
};

export default UIButtons;
