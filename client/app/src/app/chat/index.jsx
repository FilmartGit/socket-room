import React from "react";
import { useLocation } from "react-router-dom";

import style from "./style/chat.module.css";
import Header from "./components/header";
import ChatContainer from "./components/chat_view/container";
import MessageBox from "./components/chat_view/messages_box";
import ChatForm from "./components/chat_view/from";
import { useChat } from "./model/useChat";

const Chat = () => {
  const { search } = useLocation();
  const { params, messages } = useChat(search);

  return (
    <div className={style.container}>
      <Header room={params?.roomId} user={params?.userName} counter={0} />
      <ChatContainer>
        <MessageBox messages={messages} user={params?.userName} />
      </ChatContainer>
      <ChatForm params={params} />
    </div>
  );
};

export default Chat;
