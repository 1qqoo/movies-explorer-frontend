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

const App = () => {
  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('jwt'));
  const [loginError, setLoginError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isRegister, setIsRegister] = useState({
    status: '',
    message: '',
  });

  const [isOpenInfoTooltip, setIsOpenInfoTooltip] = useState(false);

  const closeAllPopups = () => {
    setIsOpenInfoTooltip(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!token) {
      setIsLoading(false);
      return;
    }
    api.setAuthHeaders(token);
    api
      .getUserInfo()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  const logOut = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setToken('');
    setCurrentUser({});
    navigate('/');
  };

  const registerUser = (userData) => {
    api
      .registerUser(userData)
      .then(() => {
        setIsOpenInfoTooltip(true);
        setIsRegister({
          status: true,
          message: 'Вы успешно зарегистрировались!',
        });
        navigate('/');
        navigate('/sign-in', { replace: true });
      })
      .catch((err) => {
        setIsOpenInfoTooltip(true);
        setIsRegister({
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
        setToken(res.token);
        setIsLoggedIn(true);
        api.setAuthHeaders(res.token);
        localStorage.setItem('jwt', res.token);

        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setLoginError('Что-то пошло не так! Попробуйте ещё раз.');
      });
  };

  const isBurgerOpened = false;

  const goBack = () => {
    navigate(-1);
  };
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
              element={<Movies isLoggedIn={isLoggedIn} />}
            ></Route>
            <Route
              path="/saved-movies"
              element={<SavedMovies isLoggedIn={isLoggedIn} />}
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile
                  isLoggedIn={isLoggedIn}
                  onClick={logOut}
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
          isRegister={isRegister}
          isOpen={isOpenInfoTooltip}
          onClose={closeAllPopups}
          alt={'Статус'}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
