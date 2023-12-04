import React from "react";

function Register(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

return(
    <div className="auth">
                <h3 className="auth__header">Регистрация</h3>
                <form className="auth__form" name="auth__form_sign-up" noValidate>
                    <input id="email-input" className="auth__input" value={email || ''} onChange={handleChangeEmail} placeholder="Email" type="email"
                        name="sign-up-email" required />
                    <span className="auth__input-error name-input-error"></span>
                    <input id="password-input" className="auth__input" value={password || ''} onChange={handleChangePassword} placeholder="Пароль" type="password"
                        name="sign-up-password" required />
                    <span className="auth__input-error status-input-error"></span>
                    <button className="auth__button" type="submit">Зарегистрироваться</button>
                </form>
                <p className="auth__sign-up">Уже зарегистрированы? Войти</p>
            </div>
)

}

export default Register;