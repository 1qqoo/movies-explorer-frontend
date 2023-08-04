import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import './App.css';

const App = () => {
  const loggedIn = true;
  const isBurgerOpened = false;

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        isBurgerOpened={isBurgerOpened}
      />
      {/* <Main /> */}
      {/* <Movies /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
