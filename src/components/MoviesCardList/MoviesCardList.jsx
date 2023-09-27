import './MoviesCardList.css';

const MoviesCardList = ({}) => {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list"></ul>
      <button
        type="button"
        className="movies-cards__add-button"
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
