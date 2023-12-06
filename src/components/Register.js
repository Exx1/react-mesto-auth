import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import * as Auth from './Auth';

function Register(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    React.useEffect(() => {
        props.setHeaderContent({ text: "Войти", link: "/sign-in", email: "" })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        Auth.register(password, email, props.setIsRegister, props.setIsRegisterPopupOpen)
            .then((res) => {
                /*navigate('/sign-in', {replace: true});*/
            })
    }

    return (
        <div className="auth">
            <h3 className="auth__header">Регистрация</h3>
            <form className="auth__form" name="auth__form_sign-up" onSubmit={handleSubmit} noValidate>
                <input id="email-input" className="auth__input" value={email || ''} onChange={handleChangeEmail} placeholder="Email" type="email"
                    name="sign-up-email" required />
                <span className="auth__input-error name-input-error"></span>
                <input id="password-input" className="auth__input" value={password || ''} onChange={handleChangePassword} placeholder="Пароль" type="password"
                    name="sign-up-password" required />
                <span className="auth__input-error status-input-error"></span>
                <button className="auth__button" type="submit">Зарегистрироваться</button>
            </form>
            <p className="auth__sign-up">Уже зарегистрированы? <Link className="auth__sign-up" to="/sign-in">Войти</Link></p>
        </div>
    )
}

export default Register;