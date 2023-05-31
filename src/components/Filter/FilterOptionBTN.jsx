import './Filter.scss';

export const FilterOptionBTN = ({
  optionName,
  task,
  index,
  name,
  checked,
  updateSpecies,
  updateGender,
}) => {
  return (
    // делаем ОДНУ радиокнопку, которую мапим в компонентах статус/вид и тд
    // нейм это имя компонента в котором используем кнопку, то есть присваиваем инпуты к определенной категории
    // айди это имя (статус например) и номер в массиве (0, 1, 2)
    // фор нужно для того чтобы при нажатии на опшонНейм выбирался соответствующий инпут, он соответствует имени+айди

    <div className="option_btn__wrapper">
      <input
        type="radio"
        checked={checked}
        name={name}
        id={`${name}-${index}`}
        className="option_btn__radio"
      />
      <label
        onClick={() => {
          task(optionName, updateSpecies, updateGender);
        }}
        htmlFor={`${name}-${index}`}
        className="option_btn__label"
      >
        {optionName}
      </label>
    </div>
  );
};
