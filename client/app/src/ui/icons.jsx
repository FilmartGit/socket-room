// UI комопнент с иконками для приложения
import { LuDrama } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuSmile } from "react-icons/lu";
import { LuSendHorizontal } from "react-icons/lu";

const UIIcons = {
  Logo: ({ className }) => {
    return <LuDrama className={className} />;
  },
  Logout: ({ className }) => {
    return <LuLogOut className={className} />;
  },
  User: ({ className }) => {
    return <LuUser className={className} />;
  },
  Smile: ({ className }) => {
    return <LuSmile className={className} />;
  },
  SendMessage: ({ className }) => {
    return <LuSendHorizontal className={className} />;
  }
};

export default UIIcons;
