import { useState } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { durationFormat } from '../../utils/utils';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie, onToggleSave, onDeleteSave }) => {
  const { values } = useFormWithValidation();
  const path = useLocation().pathname;
  const [isSaved, setIsSaved] = useState(false);

  const handleToggleSave = () => {
    if (!isSaved) {
      onToggleSave(movie);
    } else {
      onDeleteSave(movie);
    }

    setIsSaved(!isSaved);
  };

  localStorage.setItem('isCheckboxChecked', isSaved);

  const isCheckboxChecked =
    localStorage.getItem('isCheckboxChecked') === 'true';

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
                onChange={handleToggleSave}
                checked={isCheckboxChecked}
              />
              <span className="movies-card__checkbox"></span>
            </label>
          ) : (
            <button
              type="button"
              className="movies-card__button movies-card__button_type_unsave"
              aria-label="Удалить фильм из сохранённых"
              title="Удалить фильм из сохранённых"
              onClick={handleToggleSave}
            ></button>
          )}
        </div>
        <span className="movies-card__duration">
          {durationFormat(movie.duration)}
        </span>
      </li>
    </>
  );
};

export default MoviesCard;
