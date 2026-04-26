import React from "react";
import { useLocation } from "react-router-dom";

import style from "./style/chat.module.css";
import Header from "./components/header";
import ChatContainer from "./components/chat_view/container";
import MessageBox from "./components/chat_view/messages_box";
import ChatForm from "./components/chat_view/from";
import { useChat } from "./model/useChat";

import io from "socket.io-client";
const socket = io("http://192.168.0.17:5000");

const Chat = () => {
  const { search } = useLocation();
  const { params, messages, usersRoom, logOut } = useChat(search, socket);

  return (
    <div className={style.container}>
      <Header room={params?.roomId} user={params?.userName} usersRoom={usersRoom} logOut={logOut}/>
      <ChatContainer>
        <MessageBox messages={messages} user={params?.userName} />
      </ChatContainer>
      <ChatForm params={params} socket={socket} />
    </div>
  );
};

export default Chat;
