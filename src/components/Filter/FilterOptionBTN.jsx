import "./Filter.scss"

export const FilterOptionBTN = ({ optionName, task, updatePageNumber, index, name }) => {
 

  return (
//     <div className="form-check">
//   <input
//     className="form-check-input x" type="radio"
//     name={name} 
//     // id={`${name}-${index}`}
//   />
//   <label
//     // onClick={(x) => {
//       // task(input); updatePageNumber(1);
//     // }}
//     className="btn btn-outline-primary"
//     // for={`${name}-${index}`}
//     htmlFor="name"
//   > {input} </label>
// </div>

// делаем ОДНУ радиокнопку, которую мапим в компонентах статус/вид и тд
// нейм это имя компонента в котором используем кнопку, то есть присваиваем инпуты к определенной категории
// айди это имя (статус например) и номер в массиве (0, 1, 2)
// фор нужно для того чтобы при нажатии на опшонНейм выбирался соответствующий инпут, он соответствует имени+айди

<div className="option_btn__wrapper">
  <input type="radio" name={name} id={`${name}-${index}`} className="option_btn__radio" />
  <label htmlFor={`${name}-${index}`} className="option_btn__label">{optionName}</label>
</div>
  );
};