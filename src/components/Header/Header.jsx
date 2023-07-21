import './Header.css';
import Logo from '../../image/logo.svg';
import NavTab from '../NavTab/NavTab';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
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
    </header>
  );
}

export default Header;
