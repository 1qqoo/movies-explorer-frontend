import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const SearchForm = ({
  onSearch,
  onShortFilmChange,
  shortFilm,
  searchQuery = '',
}) => {
  const { values, handleChange } = useFormWithValidation({
    search: searchQuery,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(values.search);
  };

  const handleShortFilmToggle = (e) => {
    onShortFilmChange(e.target.checked);
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
            required
            value={values.search || ''}
            onChange={handleChange}
          />
          <button
            className="search__button"
            type="submit"
          ></button>
        </div>
        <span className="search__error"></span>

        <FilterCheckbox
          isChecked={shortFilm}
          onCheckboxChange={handleShortFilmToggle}
        />
      </form>
    </section>
  );
};

export default SearchForm;
