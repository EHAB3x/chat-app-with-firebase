import { useContext, useEffect } from "react";
import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { BsChatSquareText } from "react-icons/bs";
const Chat = () => {
  const { data } = useContext(ChatContext);

  useEffect(()=>{
    let chatIcon = document.querySelector(".chat_icon");
    let sidebar = document.querySelector(".sidebar");
    console.log(sidebar);
    chatIcon.addEventListener("click",()=>{
      sidebar.classList.toggle("show");
    })
  },[])
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chat_icon" style={{marginLeft:"5px"}}><BsChatSquareText size="25"/></div>
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;