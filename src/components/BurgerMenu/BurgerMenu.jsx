import { useState } from 'react';
import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  const handleOpenBurger = () => {
    setIsActiveBurger(!isActiveBurger);
  };

  return (
    <section
      className={`${!isActiveBurger ? 'burger' : 'burger burger_type_active'}`}
    >
      <nav
        className={`${
          !isActiveBurger
            ? 'burger__navigation'
            : 'burger__navigation burger__navigation_type_active'
        }`}
      >
        <div className="burger__container">
          <button
            type="button"
            onClick={handleOpenBurger}
            className={`${
              !isActiveBurger
                ? 'burger__button'
                : 'burger__button burger__button_type_active'
            }`}
          >
            <span
              className={`${
                !isActiveBurger
                  ? 'burger__span'
                  : 'burger__span burger__span_type_active'
              }`}
            ></span>
          </button>
        </div>
        {isActiveBurger ? (
          <>
            <ul className="burger__links">
              <li>
                <NavLink
                  to="/"
                  className="burger__link"
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className="burger__link"
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saved-movies"
                  className="burger__link"
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <div className="burger__links burger__links_type_account">
              <NavLink
                to="/profile"
                className="burger__link burger__link_type_account"
              >
                Аккаунт
              </NavLink>
              <div className="burger__link-icon"></div>
            </div>
          </>
        ) : (
          ''
        )}
      </nav>
    </section>
  );
};

export default BurgerMenu;
