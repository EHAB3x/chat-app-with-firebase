import attach from "../assets/attach.png"
import img from "../assets/img.png"
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something"/>
      <div className="send">
        <img src={attach} alt="attach" />
        <input type="file" id="file" style={{display:"none"}}/>
        <label htmlFor="file">
          <img src={img} alt="img" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input