import pic from "../assets/profile.jpg"
const Search = () => {
  return (
    <div className="search">
      <form className="searchForm">
        <input type="text" placeholder="Find a user"/>
      </form>
      <div className="userChat">
        <img src={pic} alt="pic" />
        <div className="userChatInfo">
          <span>Amr</span>
        </div>
      </div>
    </div>
  )
}

export default Search