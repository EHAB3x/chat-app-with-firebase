import ProfilePic from "../assets/profile.jpg"
import {signOut} from "firebase/auth"
import { auth } from "../firebase"
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Ihab chat</span>
      <div className="user">
        <img src={ProfilePic} alt="Profile Pic" />
        <span>Ihab</span>
        <button onClick={()=> signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar