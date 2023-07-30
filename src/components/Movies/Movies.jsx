import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = () => {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
};

export default Movies;
