import { useContext } from "react";
import "./Filter.scss";
import { Gender } from "./categories/Gender";
import { Species } from "./categories/Species";
import { Status } from "./categories/Status";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const Filter = () => {

  const { pageNumber, updatePageNumber, updateStatus,updateGender,updateSpecies } =
    useContext(GalleryContext);

    const radios = document.querySelectorAll('input[type="radio"]');
  const clearF = () => {
    radios.forEach((rado) => /* console.log */( rado.checked = false))
  }

    const clearFilters = () => {
      updateStatus("")
      updateGender("")
      updateSpecies("")
      updatePageNumber(1);
      clearF()
    }
  return (
    <div>
      <h3 className="filter_form__title">Фильтры</h3>
      <div className="filter_form__clear_btn" onClick={clearFilters}>Очистить фильтры</div>
      <div className="filter_form__inputs">

      <Status />
      <Species />
      <Gender />
      </div>
    </div>
  );
};
