import { NavLink, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Navigation.css';

const Navigation = ({ isLoggedIn, logIn }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 800px)` });

  return (
    <>
      {!isLoggedIn ? (
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
            onClick={logIn}
          >
            Войти
          </Link>
        </nav>
      ) : isMobile ? (
        <BurgerMenu />
      ) : (
        <nav className="navigation">
          <NavLink
            to="/movies"
            className="navigation__link navigation__link_type_film"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
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
};

export default Navigation;
