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
              <p className="techs__spisok-text">HTML</p>
            </li>
            <li className="techs__spisok-element">
              <p className="techs__spisok-text">CSS</p>
            </li>
            <li className="techs__spisok-element">
              <p className="techs__spisok-text">JS</p>
            </li>
            <li className="techs__spisok-element">
              <p className="techs__spisok-text">React</p>
            </li>
            <li className="techs__spisok-element">
              <p className="techs__spisok-text">Git</p>
            </li>
            <li className="techs__spisok-element">
              <p className="techs__spisok-text">Express.js</p>
            </li>
            <li className="techs__spisok-element">
              <p className="techs__spisok-text">mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
