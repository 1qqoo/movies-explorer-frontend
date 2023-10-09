import './SearchForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ searchMovies }) => {
  const { values, handleChange } = useFormWithValidation({ search: '' });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchElement = values.search;
    searchMovies(searchElement);
  };

  return (
    <section className="search">
      <form
        className="search__form"
        name="search"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="search__container">
          <input
            className="search__input"
            name="search"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            value={values.search || ''}
            onChange={handleChange}
            required
          />
          <button
            className="search__button"
            type="submit"
          ></button>
        </div>
        <span className="search__error"></span>

        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;
