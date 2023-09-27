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
import { useState } from 'react';
import ProtectedRoutes from '../../utils/ProtectedRoutes';

const App = () => {
  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    setIsLoggedIn(false);
    navigate('/', { replace: true });
  };

  const isBurgerOpened = false;

  const goBack = () => {
    navigate(-1);
  };

  return (
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
          element={<Login isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/signup"
          element={<Register isLoggedIn={isLoggedIn} />}
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
    </div>
  );
};

export default App;
