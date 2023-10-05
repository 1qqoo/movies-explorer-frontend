import './Profile.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function Profile({ onClick }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const [isEditProfile, setIsEditProfile] = useState(false);

  const openEditProfile = (e) => {
    e.preventDefault();
    setIsEditProfile(!isEditProfile);
  };

  const closeEditProfile = (e) => {
    e.preventDefault();
    setIsEditProfile(isEditProfile);
  };

  return (
    <main className="main">
      <section className="profile">
        <form
          className="profile__form"
          name="profile"
          noValidate
        >
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <div className="profile__labels-container">
            <label
              className="profile__label"
              type="name"
            >
              <span className="profile__label-text">Имя</span>
              {!isEditProfile ? (
                <input
                  name="name"
                  className={`profile__input ${
                    errors.name && 'profile__input_error'
                  }`}
                  onChange={handleChange}
                  value={currentUser.name}
                  type="text"
                  required
                  disabled
                  minLength="2"
                  maxLength="30"
                  pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                  placeholder="Введите новое имя"
                />
              ) : (
                <input
                  name="name"
                  className={`profile__input ${
                    errors.name && 'profile__input_error'
                  }`}
                  onChange={handleChange}
                  value={values.name || ''}
                  type="text"
                  required
                  minLength="2"
                  maxLength="30"
                  pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                  placeholder="Введите новое имя"
                />
              )}
            </label>
            <span className="profile__error-name">{errors.name || ''}</span>
            <label
              className="profile__label"
              type="email"
            >
              <span className="profile__label-text">E-mail</span>
              {!isEditProfile ? (
                <input
                  name="email"
                  className={`profile__input ${
                    errors.email && 'profile__input_error'
                  }`}
                  onChange={handleChange}
                  value={currentUser.email}
                  disabled
                  type="email"
                  required
                  placeholder="Введите новую почту"
                />
              ) : (
                <input
                  name="email"
                  className={`profile__input ${
                    errors.email && 'profile__input_error'
                  }`}
                  onChange={handleChange}
                  value={values.email || ''}
                  type="email"
                  required
                  placeholder="Введите новую почту"
                />
              )}
            </label>
            <span className="profile__error">{errors.email || ''}</span>
          </div>
          {!isEditProfile ? (
            <div className="profile__button-container">
              <button
                type="submit"
                onClick={openEditProfile}
                className="profile__button-edit"
              >
                Редактировать
              </button>
              <button
                type="submit"
                className="profile__button-exit"
                onClick={onClick}
              >
                Выйти из аккаунта
              </button>
            </div>
          ) : (
            <div className="profile__button-container">
              <button
                type="submit"
                onClick={closeEditProfile}
                className={
                  isValid
                    ? 'profile__button-save'
                    : 'profile__button-save profile__button-save_disabled'
                }
                disabled={!isValid ? true : false}
              >
                Сохранить
              </button>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
