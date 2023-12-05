import headerLogo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {


    return (
        <header className="header">
            <img src={headerLogo} className="header__logo" alt="Логотип" />
            <div className="header__info">
                <span className="header__email">{props.headerContent.email}</span>
                <Link to={props.headerContent.link} className="header__text">{props.headerContent.text}</Link>
            </div>
        </header>
    )
}

export default Header