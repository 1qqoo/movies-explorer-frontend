import './FilterCheckbox.css';

const FilterCheckbox = ({ value, onChange }) => {
  return (
    <>
      <label
        className="checkbox"
        htmlFor="checkbox"
      >
        <input
          className="checkbox__input"
          type="checkbox"
          id="checkbox"
          name="checkbox"
          checked={value}
          onChange={onChange}
        />
        <span className="checkbox__inner">Короткометражки</span>
      </label>
    </>
  );
};

export default FilterCheckbox;
