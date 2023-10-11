import { useState } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie, handleSaveMovie, deleteSaveMovie }) => {
  const { values } = useFormWithValidation();
  const path = useLocation().pathname;

  const duration = `${Math.floor(movie.duration / 60)}ч ${
    movie.duration % 60
  }м`;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    if (!isChecked) {
      setIsChecked(true);
      handleSaveMovie(movie);
    } else {
      setIsChecked(false);
      deleteSaveMovie(movie);
    }
  };

  return (
    <>
      <li className="movies-card">
        <article className="movies-card__item">
          <a
            target="_blank"
            rel="noreferrer"
            href={movie.trailerLink}
          >
            <img
              src={movie.image}
              alt={`Отрывок из фильма ${movie.nameRU}`}
              className="movies-card__image"
            />
          </a>
        </article>
        <div className="movies-card__description">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          {path === '/movies' ? (
            <label className="movies-card__label">
              <input
                className="movies-card__input"
                type="checkbox"
                value={values}
                onChange={handleCheckboxChange}
                checked={isChecked}
              />
              <span className="movies-card__checkbox"></span>
            </label>
          ) : (
            <button
              type="button"
              onChange={handleCheckboxChange}
              className="movies-card__button movies-card__button_type_unsave"
              aria-label="Удалить фильм из сохранённых"
              title="Удалить фильм из сохранённых"
            ></button>
          )}
        </div>
        <span className="movies-card__duration">{duration}</span>
      </li>
    </>
  );
};

export default MoviesCard;
