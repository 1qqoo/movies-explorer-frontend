import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__info">
          <p className="footer__info-data">© {new Date().getFullYear()}</p>
          <ul className="footer__links">
            <li
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Яндекс.Практикум
            </li>
            <li
              href="https://github.com/1qqoo"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Github
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
