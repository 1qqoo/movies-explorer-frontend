import './Promo.css';
import logo from '../../image/landing-logo.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <img
          src={logo}
          alt="Лого - Земной шар"
          className="promo__logo"
        />
        <div className="promo__about-project">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="promo__learn-more-link"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promo;
