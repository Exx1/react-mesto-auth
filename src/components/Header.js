import headerLogo from '../images/Logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={headerLogo} className="header__logo" alt="Логотип" />
        </header>
    )
}

export default Header