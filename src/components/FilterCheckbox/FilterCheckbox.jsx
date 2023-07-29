import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <>
      <label
        className="checkbox"
        for="checkbox"
      >
        <input
          className="checkbox__input"
          type="checkbox"
          id="checkbox"
        />
        <span className="checkbox__inner">Короткометражки</span>
      </label>
    </>
  );
};

export default FilterCheckbox;
