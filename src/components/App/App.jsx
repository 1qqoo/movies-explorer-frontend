import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

import './App.css';
import NotFound from '../NotFound/NotFound';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProtectedRoutes from '../../utils/ProtectedRoutes';
import api from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { correctMovieFormat } from '../../utils/utils';
import { getMovies } from '../../utils/MoviesApi';

const App = () => {
  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const navigate = useNavigate();

  // Стейты состояния пользователя
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('jwt'));
  const [currentUser, setCurrentUser] = useState({});

  // Стейты ошибок
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isStatus, setIsStatus] = useState({
    status: '',
    message: '',
  });
  const [movies, setMovies] = useState(localFilms());
  const [savedMovies, setSavedMovies] = useState([]);

  const [isOpenInfoTooltip, setIsOpenInfoTooltip] = useState(false);

  // Закрытие попапов
  const closeAllPopups = () => {
    setIsOpenInfoTooltip(false);
  };

  const isBurgerOpened = false;

  const goBack = () => {
    navigate(-1);
  };

  // ====================================

  useEffect(() => {
    if (!token) {
      setIsLoading(false);
      return;
    }
    api.setAuthHeaders(token);
    api
      .getUserInfo()
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([api.getUserInfo(), api.getSavedMovies()])
        .then(([user, savedMovies]) => {
          setCurrentUser(user);
          setSavedMovies(savedMovies.reverse());
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);

  // Функционал============
  function localFilms() {
    return JSON.parse(localStorage.getItem('movies') ?? '[]');
  }

  const getAllMovies = () => {
    return getMovies()
      .then((newMovies) => {
        const newFormatMovies = correctMovieFormat(newMovies);
        setMovies(newFormatMovies);
        localStorage.setItem('movies', JSON.stringify(newFormatMovies));
      })
      .catch(console.error);
  };

  // Регистрация, авторизация =================================================>
  const registerUser = (userData) => {
    api
      .registerUser(userData)
      .then(() => {
        setIsOpenInfoTooltip(true);
        setIsStatus({
          status: true,
          message: 'Вы успешно зарегистрировались!',
        });
        navigate('/');
        navigate('/sign-in', { replace: true });
      })
      .catch((err) => {
        setIsOpenInfoTooltip(true);
        setIsStatus({
          status: false,
          message: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
        console.log(err);
      });
  };

  const loginUser = (loginData) => {
    api
      .loginUser(loginData)
      .then((res) => {
        setIsOpenInfoTooltip(true);
        setIsStatus({
          status: true,
          message: 'Вы успешно вошли!',
        });
        setToken(res.token);
        setIsLoggedIn(true);
        api.setAuthHeaders(res.token);
        localStorage.setItem('jwt', res.token);

        navigate('/');
      })
      .catch((err) => {
        setIsOpenInfoTooltip(true);
        setIsStatus({
          status: false,
          message: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
        console.log(err);
        setLoginError('Что-то пошло не так! Попробуйте ещё раз.');
      });
  };

  const logOut = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setToken('');
    setMovies([]);
    setCurrentUser({});
    navigate('/');
  };

  // Обновить данные профиля===========================>
  const updateUser = (name, email) => {
    return api
      .updateUserData(name, email)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setIsOpenInfoTooltip(true);
        setIsStatus({
          status: true,
          message: 'Вы успешно обновили данные.',
        });
      })
      .catch((err) => {
        setIsOpenInfoTooltip(true);
        setIsStatus({
          status: false,
          message: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      });
  };
  // ============================================================

  // Отрисовка
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {headerPaths.includes(path) && (
          <Header
            isLoggedIn={isLoggedIn}
            isBurgerOpened={isBurgerOpened}
          />
        )}
        <Routes>
          <Route
            path="/signin"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                loginUser={loginUser}
                errorMessage={loginError}
                title="Вход"
                buttonText="Войти"
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Register
                isLoggedIn={isLoggedIn}
                registerUser={registerUser}
                title={'Регистрация'}
                buttonText={'Зарегистрироваться'}
              />
            }
          ></Route>
          <Route
            path="/"
            element={<Main />}
          ></Route>
          <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
            <Route
              path="/movies"
              element={<Movies movies={movies} />}
            ></Route>
            <Route
              path="/saved-movies"
              element={<SavedMovies movies={savedMovies} />}
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile
                  onClick={logOut}
                  updateUser={updateUser}
                />
              }
            ></Route>
            <Route
              path="*"
              element={<NotFound onBack={goBack} />}
            />
          </Route>
        </Routes>
        {footerPaths.includes(path) && <Footer />}
        <InfoTooltip
          isRegister={isStatus}
          isOpen={isOpenInfoTooltip}
          onClose={closeAllPopups}
          alt={'Статус'}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
