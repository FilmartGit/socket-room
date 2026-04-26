import UIButtons from "../../../ui/buttons";
import UIIcons from '../../../ui/icons';
import style from "../style/chat.module.css";
import clsx from "clsx";

export default function Header({ room, user, counter }) {
  return (
    <header className={clsx(style.header, "liter")}>
      <p>Комната: {room}</p>
      <p>Участники: {counter}</p>
      <div className={style.header__buttons}>
        <UIIcons.User className={style.user__rounded}/>
        {user}
        <UIButtons.Logout to={"/"} onClick={() => {}} />
      </div>
    </header>
  );
}
