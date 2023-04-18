import "./Filter.scss";
import { Gender } from "./categories/Gender";
import { Species } from "./categories/Species";
import { Status } from "./categories/Status";

export const Filter = () => {
  return (
    <div>
      <h3 className="filter_form__title">Фильтры</h3>
      <div className="filter_form__clear_btn">Очистить фильтры</div>
      <div className="filter_form__inputs">

      <Status />
      <Species />
      <Gender />
      </div>
    </div>
  );
};
