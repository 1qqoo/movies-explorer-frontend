import './Header.css';
import Logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    <header
      className={`header header_theme_${
        location.pathname === '/' ? 'mazarine' : 'dark'
      }`}
    >
      <div className="header__container">
        <Link
          to="/"
          className="header__link"
        >
          <img
            className="header__logo"
            src={Logo}
            alt="Логотип"
          />
        </Link>

        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
};

export default Header;
