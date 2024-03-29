/* eslint-disable react/no-unescaped-entities */


const Login = () => {
return (
    <div className="form__container">
        <div className="form__wrapper">
            <span className="form__logo">Ihab Chat</span>
            <span className="form__title">Login</span>
            <form>
                <input type="email" placeholder="email" autoComplete="off"/>
                <input type="password" placeholder="password" autoComplete="off"/>
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
)
}

export default Login