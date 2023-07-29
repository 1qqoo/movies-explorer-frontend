import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

function Navigation({ loggedIn }) {
  return (
    <>
      {!loggedIn ? (
        <nav className="navigation">
          <Link
            to="/signup"
            className="navigation__link"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="navigation__link navigation__link_type_active"
          >
            Войти
          </Link>
        </nav>
      ) : (
        <nav className="navigation">
          <NavLink
            to="/main"
            className="navigation__link navigation__link_type_film"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/main"
            className="navigation__link navigation__link_type_save-film"
          >
            Сохранённые фильмы
          </NavLink>
          <NavLink
            to="/profile"
            className="navigation__link navigation__link_type_account"
          >
            Аккаунт
          </NavLink>
        </nav>
      )}
    </>
  );
}

export default Navigation;
