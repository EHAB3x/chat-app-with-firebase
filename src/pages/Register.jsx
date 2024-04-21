import { useState } from "react";
import Add from "../assets/add.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2'
const Register = () => {
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("Something went wrong");
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (displayName === '' || email === '' || password === '') {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "warning",
        title: "Please fill all inputs!"
      });
    }else{
      setLoading(true);
      try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, img).then(() => {
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
              navigate("/");
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Account Created Successfully!"
              });
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
          }
        });
      });
      } catch (err) {
        const msg = err.message;
        setErr(true);
        setLoading(false);
        setErrMsg(msg.slice(msg.indexOf("/") +1 , msg.indexOf(")")));
      }
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ihab Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input
           type="text" 
           placeholder="display name" 
           onChange={(e)=> setDisplayName(e.target.value)}
          />

          <input
           type="email" 
           placeholder="email" 
           onChange={(e)=> setEmail(e.target.value)}
          />

          <input
           type="password" 
           placeholder="password" 
           onChange={(e)=> setPassword(e.target.value)}
          />

          <input 
            style={{ display: "none" }} 
            type="file" id="file" 
            onChange={(e)=> setImg(e.target.files[0])}
          />

          <label htmlFor="file">
            <img 
              src={img !== null ? URL.createObjectURL(img) : Add} 
              alt="avatar" 
            />
            <span>{img !== null ? img.name : "Add an avatar"}</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && <span>Uploading and compressing the image please wait...</span>}
          {err && <span>{errMsg}</span>}
        </form>
        <p className="have">
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;