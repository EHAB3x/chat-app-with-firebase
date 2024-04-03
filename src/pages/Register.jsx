import addAvatar from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  
    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];
  
      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);       
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);
        
        await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
              
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
            navigate("/");
          });
        });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
    };
    return (
        <div className="form__container">
            <div className="form__wrapper">
                <span className="form__logo">Ihab Chat</span>
                <span className="form__title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Display name" autoComplete="off" />
                    <input type="email" placeholder="Email" autoComplete="off" />
                    <input type="password" placeholder="Password" autoComplete="off" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={addAvatar} alt="addAvatar" />
                        <span>Add an Avatar</span>
                    </label>
                    <button>{loading ?(<div className="spinner"></div>):"Sign up"}</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
