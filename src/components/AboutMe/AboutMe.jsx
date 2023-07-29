import './AboutMe.css';
import avatar from '../../image/avatar.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="section-title">Студент</h2>
        <div className="about-me__bio">
          <img
            className="about-me__image"
            src={avatar}
            alt="фотография студента, который пережил backend"
          ></img>
          <div className="about-me__bio-info">
            <h3 className="about-me__name">Дмитрий</h3>
            <p className="about-me__age">Фронтенд-разработчик, 28 лет</p>
            <p className="about-me__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              href="https://github.com/1qqoo"
              target="_blank"
              rel="noreferrer"
              className="about-me__social-link"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
