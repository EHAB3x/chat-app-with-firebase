import pic from "../assets/profile.jpg"

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={pic} alt="pic" />
        <div className="userChatInfo">
          <span>Amr</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats