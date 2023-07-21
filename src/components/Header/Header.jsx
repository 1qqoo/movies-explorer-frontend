import './Header.css';
import Logo from '../../image/logo.svg';
import NavTab from '../NavTab/NavTab';
import { Link, useLocation } from 'react-router-dom';

function Header() {
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
            src={Logo}
            alt="Логотип"
          />
        </Link>
        <NavTab />
      </div>
    </header>
  );
}

export default Header;
