import './Register.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import logo from '../../images/logo.svg';

const Register = ({ registerUser }) => {
  const [isRequesting, setIsRequesting] = useState(false);
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRequesting(true);
    registerUser(values).finally(() => {
      setIsRequesting(false);
    });
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="main">
      <section className="register">
        <form
          className="register__form"
          name="register"
          noValidate
          onSubmit={handleSubmit}
        >
          <Link
            to="/"
            className="register__link"
          >
            <img
              src={logo}
              alt="Логотип"
              className="register__logo"
            />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <div className="register__labels-container">
            <label className="register__label">
              <span className="register__label-text">Имя</span>
              <input
                name="name"
                className={`register__input ${
                  errors.name && 'register__input_error'
                }`}
                onChange={handleChange}
                value={values.name || ''}
                type="text"
                required
                minLength="2"
                maxLength="30"
                pattern={'^[а-яА-Яa-zA-Z0-9]+$'}
                placeholder="Введите имя"
              />
              <span className="register__error">{errors.name || ''}</span>
            </label>
            <label className="register__label">
              <span className="register__label-text">E-mail</span>
              <input
                name="email"
                className={`register__input ${
                  errors.email && 'register__input_error'
                }`}
                onChange={handleChange}
                value={values.email || ''}
                type="email"
                required
                placeholder="Введите почту"
              />
              <span className="register__error">{errors.email || ''}</span>
            </label>
            <label className="register__label">
              <span className="register__label-text">Пароль</span>
              <input
                name="password"
                className={`register__input ${
                  errors.password && 'register__input_error'
                }`}
                onChange={handleChange}
                value={values.password || ''}
                type="password"
                required
                minLength="6"
                maxLength="30"
                placeholder="Введите пароль"
              />
              <span className="register__error">{errors.password || ''}</span>
            </label>
          </div>
          <button
            type="submit"
            className="register__button"
            disabled={!isValid || isRequesting}
          >
            Зарегистрироваться
          </button>
        </form>
        <span className="register__support">
          Уже зарегистрированы?&nbsp;
          <Link
            to="/signin"
            className="register__link"
          >
            Войти
          </Link>
        </span>
      </section>
    </main>
  );
};

export default Register;
