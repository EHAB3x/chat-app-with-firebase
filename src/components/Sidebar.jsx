import Chats from "./Chats"
import Navbar from "./Navbar"
import Search from "./Search"

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <Navbar />
        <Search />
        <Chats />
    </aside>
  )
}

export default Sidebar