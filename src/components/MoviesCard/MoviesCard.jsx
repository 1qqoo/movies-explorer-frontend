import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = (props) => {
  const path = useLocation().pathname;

  return (
    <>
      <li className="movies-card">
        <article className="movies-card__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="/"
          >
            <img
              src={props.image}
              alt={props.name}
              className="movies-card__image"
            />
          </a>
        </article>
        <div className="movies-card__description">
          <h3 className="movies-card__title">{props.name}</h3>
          {path === '/movies' ? (
            <label className="movies-card__label">
              <input
                className="movies-card__input"
                type="checkbox"
              />
              <span className="movies-card__checkbox"></span>
            </label>
          ) : (
            <button
              type="button"
              className="movies-card__button movies-card__button_type_unsave"
              aria-label="Удалить фильм из сохранённых"
              title="Удалить фильм из сохранённых"
            ></button>
          )}
        </div>
        <span className="movies-card__duration">1ч42м</span>
      </li>
    </>
  );
};

export default MoviesCard;
