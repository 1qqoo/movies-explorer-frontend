import { useState } from 'react';
import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  const handleOpenBurger = () => {
    setIsActiveBurger(!isActiveBurger);
  };

  return (
    <nav
      className={`${
        !isActiveBurger ? 'burger-navigation' : 'burger-navigation_type_active'
      }`}
    >
      <div className="burger-btn__container">
        <button
          onClick={handleOpenBurger}
          className={`${
            !isActiveBurger ? 'burger-btn' : 'burger-btn burger-btn_type_active'
          }`}
        >
          <span
            className={`${
              !isActiveBurger
                ? 'burger-span'
                : 'burger-span burger-span_type_active'
            }`}
          ></span>
        </button>
      </div>
      {isActiveBurger ? (
        <>
          <div className="burger-menu__links">
            <NavLink
              to="/"
              className="burger-menu__link"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="burger-menu__link"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="burger-menu__link"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="burger-menu__links burger-menu__links_type_account">
            <NavLink
              to="/profile"
              className="burger-menu__link burger-menu__link_type_account"
            >
              Аккаунт
            </NavLink>
            <div className="burger-menu__link-icon"></div>
          </div>
        </>
      ) : (
        ''
      )}
    </nav>
  );
};

export default BurgerMenu;
