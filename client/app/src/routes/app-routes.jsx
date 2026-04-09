import { Routes, Route } from "react-router-dom";
import Main from "../app/main/index";
import Chat from "../app/chat/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default AppRoutes;
