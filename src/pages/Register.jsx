import addAvatar from "../assets/addAvatar.png"

const Register = () => {
return (
    <div className="form__container">
        <div className="form__wrapper">
            <span className="form__logo">Ihab Chat</span>
            <span className="form__title">Register</span>
            <form>
                <input type="text" placeholder="Display name" autoComplete="off" />
                <input type="email" placeholder="email" autoComplete="off"/>
                <input type="password" placeholder="password" autoComplete="off"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src={addAvatar} alt="addAvatar" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
)
}

export default Register