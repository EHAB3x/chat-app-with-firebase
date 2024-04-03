import { useContext, useState } from "react"
import { collection, query, where, getDocs, setDoc, doc} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  
  const {currentUser} = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName));
    try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                // Assuming only one user is found with the given display name
                setUser(doc.data());
                setErr(false)
            });
        } else {
            setUser(null); // Reset user state if no matching user found
        }
    } catch (error) {
        console.error("Error searching for user:", error);
        setErr(true);
    }
};
  const handleKey = (e)=>{
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async ()=>{
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try{
      const res = await getDocs(db, "chats", combinedId);
      if (!res.exists()) {
        await setDoc(doc, (db, "chats", combinedId),{messages:[]})

        await setDoc(doc, (db, "chats", combinedId),{messages:[]})
      }
    }catch(err){}
  }
  return (
    <div className="search">
      <form className="searchForm" onSubmit={(e)=> e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Find a user" 
          value={userName} 
          onChange={(e)=> setUserName(e.target.value)}
          onKeyDown={handleKey}
        />
      </form>
      {err && <span>Something went wrong</span>}
      {user &&<div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="pic" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search