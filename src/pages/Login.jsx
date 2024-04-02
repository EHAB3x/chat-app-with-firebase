/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")

        }catch(err){
            setErr(true)
        }

    }
return (
    <div className="form__container">
        <div className="form__wrapper">
            <span className="form__logo">Ihab Chat</span>
            <span className="form__title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" autoComplete="off"/>
                <input type="password" placeholder="password" autoComplete="off"/>
                <button>Sign in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
)
}

export default Login