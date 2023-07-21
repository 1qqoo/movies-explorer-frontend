import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject">
      <div className="aboutProject__container">
        <h2 className="section-title">О проекте</h2>
        <div className="aboutProject-info">
          <article className="two-columns">
            <h3 className="two-columns__main-text">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="two-columns__main-paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </article>
          <article className="two-columns">
            <h3 className="two-columns__main-text">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="two-columns__main-paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </div>
        <ul className="aboutProject-list">
          <li className="aboutProject-list__text aboutProject-list__text_colore_green">
            1 неделя
          </li>
          <li className="aboutProject-list__text aboutProject-list__text_colore_grey">
            4 недели
          </li>
          <li className="aboutProject-list__text">Back-end</li>
          <li className="aboutProject-list__text">Front-end</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
