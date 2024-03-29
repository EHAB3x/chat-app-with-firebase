import cam from "../assets/cam.png";
import add from "../assets/add.png";
import more from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
return (
    <div className="chat">
        <div className="chatInfo">
            <span>Amr</span>
            <div className="chatIcons">
                <img src={cam} alt="camera" />
                <img src={add} alt="add" />
                <img src={more} alt="more" />
            </div>
        </div>
        <Messages />
        <Input />
    </div>
)
}

export default Chat