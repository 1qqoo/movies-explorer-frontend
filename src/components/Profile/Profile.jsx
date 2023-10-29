import './Profile.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useMoviesContext } from '../../contexts/MoviesContext';

export default function Profile({ onLogOut, updateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { resetMoviesContext } = useMoviesContext();

  const handleLogOut = () => {
    onLogOut();
    resetMoviesContext();
  };

  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const openEditProfile = (e) => {
    e.preventDefault();
    setIsEditProfile(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRequesting(true);
    updateUser(values)
      .then(() => {
        setIsEditProfile(false);
      })
      .finally(() => {
        setIsRequesting(false);
      });
  };

  const requirementValidity =
    !isValid ||
    (currentUser.name === values.name && currentUser.email === values.email);

  return (
    <main className="main">
      <section className="profile">
        <form
          className="profile__form"
          name="profile"
          noValidate
          onSubmit={handleSubmit}
        >
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <div className="profile__labels-container">
            <label
              className="profile__label"
              type="name"
            >
              <span className="profile__label-text">Имя</span>

              <input
                name="name"
                className={`profile__input ${
                  errors.name && 'profile__input_error'
                }`}
                onChange={handleChange}
                value={values.name}
                type="text"
                required
                disabled={!isEditProfile}
                minLength="2"
                maxLength="30"
                pattern={'^[а-яА-Яa-zA-Z0-9]+$'}
                placeholder="Введите новое имя"
              />
            </label>
            <span className="profile__error-name">{errors.name || ''}</span>
            <label
              className="profile__label"
              type="email"
            >
              <span className="profile__label-text">E-mail</span>
              <input
                name="email"
                className={`profile__input ${
                  errors.email && 'profile__input_error'
                }`}
                onChange={handleChange}
                value={values.email}
                disabled={!isEditProfile}
                type="email"
                required
                placeholder="Введите новую почту"
              />
            </label>
            <span className="profile__error">{errors.email || ''}</span>
          </div>
          {!isEditProfile ? (
            <div className="profile__button-container">
              <button
                type="button"
                onClick={openEditProfile}
                className="profile__button-edit"
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__button-exit"
                onClick={handleLogOut}
              >
                Выйти из аккаунта
              </button>
            </div>
          ) : (
            <div className="profile__button-container">
              <button
                type="submit"
                className="profile__button-save"
                disabled={requirementValidity || isRequesting}
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
