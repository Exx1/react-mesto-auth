import React from "react";

function Login(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    return (

            <div className="auth">
                <h3 className="auth__header">Вход</h3>
                <form className="auth__form" name="auth__form_sign-in" noValidate>
                    <input id="email-input" className="auth__input" value={email || ''} onChange={handleChangeEmail} placeholder="Email" type="email"
                        name="sign-in-email" required />
                    <span className="auth__input-error name-input-error"></span>
                    <input id="password-input" className="auth__input" value={password || ''} onChange={handleChangePassword} placeholder="Пароль" type="password"
                        name="sign-in-password" required />
                    <span className="auth__input-error status-input-error"></span>
                    <button className="auth__button" type="submit">Войти</button>
                </form>

            </div>
    )

}

export default Login;