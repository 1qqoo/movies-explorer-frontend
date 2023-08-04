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

const App = () => {
  const navigate = useNavigate();

  const loggedIn = true;
  const isBurgerOpened = false;

  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="app">
      {headerPaths.includes(path) && (
        <Header
          loggedIn={loggedIn}
          isBurgerOpened={isBurgerOpened}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={<Main />}
        ></Route>
        <Route
          path="/movies"
          element={<Movies />}
        ></Route>
        <Route
          path="/saved-movies"
          element={<SavedMovies />}
        ></Route>
        <Route
          path="/profile"
          element={<Profile />}
        ></Route>
        <Route
          path="/signin"
          element={<Login />}
        ></Route>
        <Route
          path="/signup"
          element={<Register />}
        ></Route>
        <Route
          path="*"
          element={<NotFound onBack={goBack} />}
        />
      </Routes>
      {footerPaths.includes(path) && <Footer />}
    </div>
  );
};

export default App;
