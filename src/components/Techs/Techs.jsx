import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="section-title">Технологии</h2>
        <div className="techs-info">
          <h3 className="techs-info__description">7 технологий</h3>
          <p className="techs-info__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__spisok">
            <li className="techs__spisok-element">
              <a
                href="https://doka.guide/html/html"
                target="_blank"
                rel="noreferrer"
                className="techs__spisok-link"
              >
                HTML
              </a>
            </li>
            <li className="techs__spisok-element">
              <a
                href="https://doka.guide/css/"
                target="_blank"
                rel="noreferrer"
                className="techs__spisok-link"
              >
                CSS
              </a>
            </li>
            <li className="techs__spisok-element">
              <a
                href="https://doka.guide/js/"
                target="_blank"
                rel="noreferrer"
                className="techs__spisok-link"
              >
                JS
              </a>
            </li>
            <li className="techs__spisok-element">
              <a
                href="https://doka.guide/js/react-and-alternatives/"
                target="_blank"
                rel="noreferrer"
                className="techs__spisok-link"
              >
                React
              </a>
            </li>
            <li className="techs__spisok-element">
              <a
                href="https://doka.guide/tools/git-cli/"
                target="_blank"
                rel="noreferrer"
                className="techs__spisok-link"
              >
                Git
              </a>
            </li>
            <li className="techs__spisok-element">
              <a
                href="https://doka.guide/tools/nodejs/"
                target="_blank"
                rel="noreferrer"
                className="techs__spisok-link"
              >
                Express.js
              </a>
            </li>
            <li className="techs__spisok-element">
              <a
                href="https://www.mongodb.com/docs/"
                target="_blank"
                rel="noreferrer"
                className="techs__spisok-link"
              >
                MongoDB
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
