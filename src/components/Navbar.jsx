import ProfilePic from "../assets/profile.jpg"
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Ihab chat</span>
      <div className="user">
        <img src={ProfilePic} alt="Profile Pic" />
        <span>Ihab</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar