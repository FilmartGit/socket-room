import { Link } from "react-router-dom";

const UIButtons = {
  Send: ({ to, onClick }) => {
    return (
      <Link to={to} className="button_send_link" onClick={onClick}>
        <button className="button_send">Войти</button>
      </Link>
    );
  },
};

export default UIButtons;
