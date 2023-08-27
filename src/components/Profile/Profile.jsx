import './Profile.css';
import useFormWithValidation from '../../components/hooks/useFormWithValidation';

export default function Profile({ onClick, isLoggedIn }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  return (
    <main className="profile">
      <form
        className="profile__form"
        name="profile"
        noValidate
      >
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__labels-container">
          <label className="profile__label">
            <span className="profile__label-text">Имя</span>
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
            />
            <span className="profile__error-name">{errors.name || ''}</span>
          </label>
          <label className="profile__label">
            <span className="profile__label-text">E-mail</span>
            <input
              name="email"
              className={`profile__input ${
                errors.email && 'profile__input_error'
              }`}
              onChange={handleChange}
              value={values.email || ''}
              type="email"
              required
            />
            <span className="profile__error">{errors.email || ''}</span>
          </label>
        </div>
        <div className="profile__button-container">
          <button
            type="submit"
            className={`profile__button-edit ${
              !isValid && 'profile__button-edit_disabled'
            }`}
            disabled={!isValid ? true : false}
          >
            Редактировать
          </button>
          <button
            type="submit"
            className="profile__button-exit"
            onClick={onClick}
            isLoggedIn={isLoggedIn}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </main>
  );
}
