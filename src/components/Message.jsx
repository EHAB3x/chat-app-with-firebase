import img from "../assets/profile.jpg"
const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={img} alt="img" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default Message