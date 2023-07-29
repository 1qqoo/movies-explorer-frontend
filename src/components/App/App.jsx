import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css';

function App() {
  const loggedIn = true;
  const isBurgerOpened = false;

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        isBurgerOpened={isBurgerOpened}
      />
      {/* <Main /> */}
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
