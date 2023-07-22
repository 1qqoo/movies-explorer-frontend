import './Navigation.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className="navigation">
      <Link className="navigation__link">Регистрация</Link>
      <Link className="navigation__link navigation__link_type_active">
        Войти
      </Link>
    </nav>
  );
}

export default NavTab;
